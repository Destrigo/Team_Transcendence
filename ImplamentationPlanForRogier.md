# Comprehensive Plan: All Databases + Socials Feature

## Overview

This document outlines the complete implementation plan for building all 9 database tables and the Socials feature (friends, chat, leaderboard, presence) for the PaperTrade trading platform.

**Scope:** Complete database design + Socials backend + Socials frontend  
**Duration:** ~3-4 weeks  
**Learning Focus:** Database relationships, Prisma ORM, NestJS, WebSocket, React real-time

---

## Part 1: Understanding the Database

### What Each Table Does

| Table | Purpose | Why It Exists |
|-------|---------|---|
| **users** | User accounts & profiles | Store login credentials, balance, online status |
| **assets** | Tradeable items (BTC, ETH, AAPL) | Know what users can buy/sell |
| **orders** | Buy/sell transactions | Track transaction history for P&L calculations |
| **holdings** | Current asset ownership | Know what user owns right now |
| **portfolio_snapshots** | Daily wealth records | Draw performance charts, calculate returns |
| **friendships** | Friend relationships | Track who is friends with whom |
| **messages** | Chat messages | Store chat history |
| **notifications** | Activity alerts | Alert users to important events |
| **price_alerts** | User price watchers | "Alert me if BTC hits $70k" |

### Relationship Types (3 Patterns)

#### 1. One-to-Many (1:N)
```
One User → Many Orders
One Asset → Many Orders
One User → Many Messages (sent)
```
Most common. Examples:
- Alice has 10 orders, Bob has 5 orders
- BTC has 1000 orders, ETH has 800 orders

**In schema:** Foreign key on the "many" side points to "one" side.

#### 2. Many-to-Many (N:N)
```
Many Users ↔ Many Friends
(Alice has 50 friends, Bob is one, Bob has 100 friends)
```

**Problem:** Can't store on either side directly.  
**Solution:** Junction table (`friendships`) in the middle.

**Friendship table has:**
- `requester_id` → User A
- `addressee_id` → User B
- `status` → 'pending', 'accepted', 'declined'

#### 3. One-to-One (1:1) — Rare
```
One User → One 2FA Secret
```
Used when exactly one record relates to exactly one other record.

### Indexes (Why They Matter)

**Index** = a sorted lookup table, like a book's table of contents.

Without index:
```
Query: "Show me all messages from alice to bob"
Result: Scan ALL messages in database ❌ SLOW (1M+ messages)
```

With index on `(sender_id, receiver_id)`:
```
Query: "Show me all messages from alice to bob"
Result: Jump directly to alice's messages ✅ FAST (100ms)
```

**Where to add indexes:** On columns you query frequently.
- `WHERE sender_id = ?` → index on `sender_id`
- `ORDER BY created_at DESC` → index on `created_at`
- `WHERE status = 'pending'` → index on `status`

---

## Part 2: Database Schema Design

### Table Definitions (in dependency order)

#### 1. User
**Purpose:** Account & profile information

**Fields:**
- `id` (UUID) — Primary key, unique identifier
- `email` (string, unique) — Login & contact
- `username` (string, unique) — Public name for others to find
- `display_name` (string) — Friendly name for profile
- `password_hash` (string) — bcrypt hashed password (never plain text!)
- `avatar_url` (string, optional) — Profile picture
- `balance` (decimal) — Fake money balance (€10,000 start)
- `oauth_provider` (string, optional) — For OAuth login (google, 42, github)
- `oauth_id` (string, optional) — Provider's user ID
- `two_factor_secret` (string, optional) — Encrypted TOTP secret
- `two_factor_enabled` (boolean) — Is 2FA active?
- `language` (string) — User's language preference (en, fr, nl)
- `is_online` (boolean) — Currently online (WebSocket connected)?
- `last_seen` (timestamp) — When did they last disconnect?
- `created_at` (timestamp) — Account creation date
- `updated_at` (timestamp) — Last profile update

**Indexes:**
- `email` — login by email
- `username` — find user by username for friends
- `created_at` — sorting in leaderboard

---

#### 2. Asset
**Purpose:** Define what can be traded (BTC, ETH, AAPL, etc.)

**Fields:**
- `id` (UUID) — Primary key
- `symbol` (string, unique) — BTC, ETH, AAPL, MSFT
- `name` (string) — Bitcoin, Ethereum, Apple Inc.
- `type` (enum) — 'crypto' or 'stock'
- `current_price` (decimal) — Last fetched price (cached from API)
- `price_updated_at` (timestamp) — When was price last updated?
- `logo_url` (string, optional) — Asset logo/icon
- `is_active` (boolean) — Can users trade this?

**Indexes:**
- `symbol` — lookup asset by symbol (BTC → Bitcoin)
- `type` — filter assets by crypto vs stock

**Why cache prices?**
- You need historical prices for P&L calculations
- "What was BTC price when Alice bought last week?"
- Don't rely solely on live API (what if it's down?)

---

#### 3. Order
**Purpose:** Track every buy/sell transaction

**Fields:**
- `id` (UUID) — Primary key
- `user_id` (UUID, FK) → User who placed order
- `asset_id` (UUID, FK) → Asset being traded
- `type` (enum) — 'buy' or 'sell'
- `order_type` (enum) — 'market' or 'limit'
  - Market: Execute immediately at current price
  - Limit: Wait until price reaches target
- `quantity` (decimal) — How much (0.5 BTC, 100 AAPL shares)
- `price` (decimal) — Execution price (market) or target (limit)
- `total` (decimal) — quantity × price (total cost/proceeds)
- `status` (enum) — 'pending', 'filled', 'cancelled'
- `filled_at` (timestamp, optional) — When did order execute?
- `created_at` (timestamp) — When was order placed?

**Relationships:**
- 1 user → many orders (Alice places 100 orders)
- 1 asset → many orders (BTC traded in 1000 orders)

**Indexes:**
- `(user_id, created_at DESC)` — show user's order history, newest first
- `(status, order_type)` — find pending limit orders to check

---

#### 4. Holding
**Purpose:** What does user currently own?

**Fields:**
- `id` (UUID) — Primary key
- `user_id` (UUID, FK) → User
- `asset_id` (UUID, FK) → Asset
- `quantity` (decimal) — How much they own (0.5 BTC, 100 AAPL)
- `avg_buy_price` (decimal) — Weighted average purchase price
  - If Alice bought 0.1 BTC at $60k then 0.1 at $70k: avg = $65k
  - Needed to calculate profit/loss
- `updated_at` (timestamp) — Last updated when?

**Constraint:** `UNIQUE(user_id, asset_id)` — One row per user per asset

**Why average buy price?**
```
Alice's P&L on BTC:
  Current price: $70k
  Avg buy price: $65k
  Quantity: 0.5 BTC
  
  P&L = (70k - 65k) × 0.5 = $2,500 profit ✅
```

**Indexes:**
- `user_id` — get Alice's holdings quickly

---

#### 5. PortfolioSnapshot
**Purpose:** Daily wealth records for charting performance

**Fields:**
- `id` (UUID) — Primary key
- `user_id` (UUID, FK) → User
- `total_value` (decimal) — Balance + holdings value at this moment
  - $2,500 cash + $10,000 BTC = $12,500
- `balance` (decimal) — Pure cash at this moment
- `holdings_value` (decimal) — Value of all assets at this moment
  - 0.5 BTC × $70k = $35k
- `snapshot_date` (DATE) — What date is this for?
- `created_at` (timestamp) — When was snapshot recorded?

**Purpose:** Create time-series data
```
May 1: $10,000
May 2: $10,500
May 3: $11,200
May 4: $12,000
...
(Draw chart, calculate returns, rank users)
```

**Indexes:**
- `(user_id, snapshot_date)` — get portfolio chart data for Alice

---

#### 6. Friendship
**Purpose:** Track friend relationships (N:N table)

**Fields:**
- `id` (UUID) — Primary key
- `requester_id` (UUID, FK) → User who sent request
- `addressee_id` (UUID, FK) → User who received request
- `status` (enum) — 'pending', 'accepted', 'declined'
- `created_at` (timestamp) — When was request sent?

**Constraint:** `UNIQUE(requester_id, addressee_id)` — Only one request per direction

**Why N:N?**
```
Friendship is bidirectional but asymmetric requests:
  Row 1: Alice → Bob, status='accepted'
  Row 2: Bob → Alice, status='accepted'
  
OR one-way:
  Row 1: Alice → Bob, status='pending'
  (Bob hasn't accepted yet)
```

**Indexes:**
- `requester_id` — find Alice's outgoing requests
- `addressee_id` — find requests sent to Alice
- `(requester_id, addressee_id)` — check if already friends

---

#### 7. Message
**Purpose:** Chat history

**Fields:**
- `id` (UUID) — Primary key
- `sender_id` (UUID, FK) → User who sent message
- `receiver_id` (UUID, FK) → User who received message
- `content` (TEXT) — Message body
- `is_read` (boolean) — Has receiver read it?
- `created_at` (timestamp) — When sent?

**Relationships:**
- User can send many messages → 1:N
- User can receive many messages → 1:N (same User, different role)

**Indexes:**
- `(sender_id, receiver_id, created_at)` — get chat history between Alice & Bob, chronological

---

#### 8. Notification
**Purpose:** Alert users to important events

**Fields:**
- `id` (UUID) — Primary key
- `user_id` (UUID, FK) → User receiving notification
- `type` (string) — 'order_filled', 'price_alert', 'friend_request', 'message'
- `title` (string) — Short headline (200 chars)
- `body` (TEXT) — Full message
- `data` (JSONB) — Extra metadata (order_id, asset_id, etc.)
  - Example: `{ "order_id": "...", "asset_symbol": "BTC" }`
- `is_read` (boolean) — User seen it?
- `created_at` (timestamp) — When?

**Indexes:**
- `(user_id, is_read, created_at DESC)` — show unread notifications, newest first

---

#### 9. PriceAlert
**Purpose:** User sets watchers: "Alert me if BTC > $70k"

**Fields:**
- `id` (UUID) — Primary key
- `user_id` (UUID, FK) → User who set alert
- `asset_id` (UUID, FK) → Asset to watch
- `target_price` (decimal) — Alert threshold
- `direction` (enum) — 'above' or 'below'
  - 'above': alert if price ≥ target
  - 'below': alert if price ≤ target
- `is_triggered` (boolean) — Has alert fired?
- `created_at` (timestamp) — When created?

**Example:**
```
User: Alice
Asset: BTC
Target: $70,000
Direction: 'above'
Status: Waiting (untriggered)

When BTC hits $70k → is_triggered = true, send notification
```

---

## Part 3: Implementation Phases

### Phase 1: Database Schema (3-4 days)

#### Step 1.1: Write Prisma Schema
Create `project/backend/prisma/schema.prisma` with all 9 table definitions.

**Process:**
1. Define each table with all fields
2. Add relationships (foreign keys)
3. Add constraints (unique, defaults)
4. Add indexes where needed

#### Step 1.2: Create Prisma Migration
```bash
cd project/backend
npm install @prisma/client
prisma migrate dev --name init
```

This:
- Validates schema syntax
- Creates PostgreSQL tables
- Generates Prisma Client (TypeScript code to query DB)

#### Step 1.3: Set Up PrismaService in NestJS
Create `project/backend/src/prisma/prisma.service.ts` to:
- Initialize Prisma Client on app startup
- Clean up on shutdown

#### Step 1.4: Verify Schema Works
- Run `prisma studio` to visually inspect database
- Write test script to insert/query data
- Verify relationships work

---

### Phase 2: Socials Backend APIs (5-7 days)

#### Friends Service & Controller
**Endpoints:**
- `POST /friends/request/:userId` — Send friend request
- `GET /friends` — List my friends (with online status)
- `GET /friends/requests` — List pending requests (incoming & outgoing)
- `PUT /friends/:id/accept` — Accept request
- `PUT /friends/:id/decline` — Decline request
- `DELETE /friends/:id` — Remove friend

**Queries to implement:**
- Get all friends of user (accepted friendships)
- Get pending requests for user
- Check if already friends
- Accept/decline with proper status updates

#### Messages Service & Controller
**Endpoints:**
- `GET /messages/:userId` — Get chat history with user (paginated, newest first)
- `POST /messages` — Save message to database

**Queries:**
- Store message in DB
- Retrieve conversation between two users
- Pagination (limit 50 per page, sorted by created_at DESC)

#### Leaderboard Service & Controller
**Endpoint:**
- `GET /leaderboard?page=1&limit=100` — Top users ranked by portfolio value

**Query:**
- For each user: total_value = balance + sum(holdings × current_price)
- Sort descending
- Include username, avatar, current value, % gain

**Calculation:**
```sql
SELECT 
  u.id,
  u.username,
  u.avatar_url,
  u.balance,
  COALESCE(SUM(h.quantity * a.current_price), 0) as holdings_value,
  u.balance + COALESCE(SUM(h.quantity * a.current_price), 0) as total_value,
  ((u.balance + COALESCE(SUM(h.quantity * a.current_price), 0) - 10000) / 10000 * 100) as percent_gain
FROM users u
LEFT JOIN holdings h ON u.id = h.user_id
LEFT JOIN assets a ON h.asset_id = a.id
GROUP BY u.id
ORDER BY total_value DESC
LIMIT 100
```

#### Presence Service
**Responsibility:**
- Track when user connects (WebSocket)
- Track when user disconnects
- Update `users.is_online` and `users.last_seen`
- Broadcast online/offline to friends

---

### Phase 3: WebSocket Real-Time (3-4 days)

#### Chat Gateway
**Events (Client → Server):**
- `chat:send` — Client sends message with payload: `{ receiver_id, content }`

**Events (Server → Client):**
- `chat:receive` — Server broadcasts to receiver: `{ sender_id, content, created_at }`

**Logic:**
1. Client emits `chat:send` event
2. Server saves message to database
3. Server broadcasts `chat:receive` to receiver (if online)
4. Client shows message in UI

#### Presence Gateway
**Events:**
- `presence:online` — Broadcast "User came online" to their friends
- `presence:offline` — Broadcast "User went offline" to their friends

**Logic:**
1. When WebSocket connects → get user's friends
2. Broadcast to them that user is online
3. On disconnect → broadcast user is offline
4. Update `users.is_online` in database

---

### Phase 4: Socials Frontend (5-7 days)

#### Pages to Build

**1. Friends Page**
- List all friends (with online indicator)
- List pending requests (incoming & outgoing)
- Send friend request (search by username)
- Accept/decline buttons
- Remove friend option

**2. Chat Page**
- Conversation list (friends you've messaged)
- Message thread (selected conversation)
- Input field to send message
- Real-time message updates via WebSocket
- Load older messages (pagination)

**3. Leaderboard Page**
- Ranked table (position, username, avatar, P&L %, value)
- Pagination (50 per page)
- Click to view public profile

**4. Public Profile Page**
- View another user's profile
- Add friend button (if not already friends)
- View their online status

#### Components to Build
- `FriendsList.tsx` — Show list of friends
- `FriendRequestForm.tsx` — Search & send request
- `ChatWindow.tsx` — Message thread
- `ConversationList.tsx` — Recent chats
- `Leaderboard.tsx` — Ranked users
- `PublicProfile.tsx` — View user profile
- `OnlineIndicator.tsx` — Green/red dot

#### Hooks to Build
- `useFriends()` — Fetch friends list, manage requests
- `useMessages()` — Fetch chat history, send messages
- `useChatWebSocket()` — Connect to chat events
- `usePresenceWebSocket()` — Track online status
- `useLeaderboard()` — Fetch rankings

---

## Part 4: Technology Stack

### Backend
- **Language:** TypeScript
- **Framework:** NestJS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Real-time:** Socket.IO (WebSocket)

### Frontend
- **Language:** TypeScript
- **Framework:** React + Vite
- **HTTP Client:** Axios
- **Real-time:** Socket.IO Client
- **State:** React Context or Zustand

---

## Part 5: Success Criteria

### By End of Phase 1 (Database)
- ✅ Prisma schema with all 9 tables
- ✅ Schema migrated to PostgreSQL
- ✅ All relationships defined correctly
- ✅ Indexes in place
- ✅ PrismaService working in NestJS
- ✅ Can query database from NestJS

### By End of Phase 2 (Backend APIs)
- ✅ Friends API fully working (5 endpoints)
- ✅ Messages API working (2 endpoints)
- ✅ Leaderboard API working (1 endpoint)
- ✅ Can list friends, send requests, view chat history
- ✅ Leaderboard ranking correctly calculates wealth

### By End of Phase 3 (WebSocket)
- ✅ Chat real-time working (messages appear instantly)
- ✅ Online/offline indicators working
- ✅ WebSocket handles connections/disconnections gracefully
- ✅ Can disconnect & reconnect without data loss

### By End of Phase 4 (Frontend)
- ✅ All Socials pages rendering correctly
- ✅ Can send friend requests, accept/decline
- ✅ Can chat in real-time
- ✅ Can see friends online status
- ✅ Leaderboard shows correct rankings

---

## Part 6: Common Pitfalls to Avoid

1. **N:N Relationships:** Always use junction table (friendships), don't try to store array on User
2. **Bidirectional:** Friend acceptance needs both directions stored or checked correctly
3. **Indexes:** Without proper indexes, leaderboard with 10k users will be slow
4. **WebSocket:** Verify you handle disconnections — don't assume connection always stays open
5. **Timestamps:** Always use UTC, let database handle timezone conversion
6. **Constraints:** Use `UNIQUE` and `NOT NULL` to prevent bad data
7. **Pagination:** Always limit results (e.g., 50 messages per page) for performance

---

## Part 7: Resources & References

### Prisma
- https://www.prisma.io/docs/
- https://www.prisma.io/docs/concepts/components/prisma-schema

### NestJS
- https://docs.nestjs.com/
- https://docs.nestjs.com/techniques/database

### Socket.IO
- https://socket.io/docs/v4/
- https://socket.io/docs/v4/server-api/

### PostgreSQL & SQL
- https://www.postgresql.org/docs/
- SQL aggregation: SUM, COUNT, GROUP BY, HAVING

### React
- https://react.dev/learn
- https://react.dev/reference/react/hooks

---

## Next Steps

**Start with Phase 1, Step 1.1:**

Write the Prisma schema. Begin with the `User` table, then move through dependencies.

For each table:
1. Define the model with all fields
2. Understand why each field exists
3. Add relationships (FK)
4. Add constraints (unique, defaults)
5. Plan indexes

Let me know when you're ready to start!
