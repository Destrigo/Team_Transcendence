## 1. INFRASTRUCTURE & SETUP

### 1.1 🔓 Docker Compose setup
- PostgreSQL container (or any DB of choice)
- Backend container
- Frontend container (React dev server)
- Shared network, volume for DB persistence
- `docker compose up` starts everything
- **Assignable solo**

### 1.2 🔓 Backend scaffold
- project init with JS/TypeScript
- ORM setup + initial schema migration
- Environment config (.env loading)
- Global exception filter
- Global validation pipe
- Health check endpoint (`GET /health`)
- CORS configuration
- **Assignable solo**

### 1.3 🔓 Frontend scaffold
- React + Vite project init (if chosen, should be the easiest setup)
- Tailwind CSS setup
- React Router with route structure
- Axios instance with base URL + interceptors (JWT attach, 401 redirect)
- Base layout components (Navbar, Sidebar, PageShell, Footer)
- **Assignable solo**

### 1.4 🔓 HTTPS setup
- Generate self-signed certificate for local dev
- Configure backend to serve over HTTPS
- Frontend proxy or direct HTTPS
- **Assignable solo**

---

## 2. AUTHENTICATION (Phase 1)

### 2.1 🔓 Registration endpoint
- `POST /auth/register`
- Email + password validation
- Password hashing (bcrypt, salt rounds ≥ 10)
- Check duplicate email/username
- Return JWT pair
- **Assignable solo** (just needs DB schema from 1.2)

### 2.2 🔗 Login endpoint
- `POST /auth/login`
- Verify credentials
- Return JWT pair (access + refresh)
- **Depends on:** 2.1

### 2.3 🔗 JWT middleware & guards
- JwtAuthGuard for protected routes
- Token refresh endpoint (`POST /auth/refresh`)
- @CurrentUser() decorator to extract user from token
- @Public() decorator for unprotected routes
- **Depends on:** 2.1

### 2.4 🔗 Frontend auth pages
- Registration form with validation
- Login form with validation
- Auth context/store (Zustand or Context API)
- Token storage + auto-refresh logic
- ProtectedRoute wrapper component
- Redirect after login/register
- **Depends on:** 2.1, 2.2, 2.3, 1.3

---

## 3. USER MANAGEMENT (Module: Standard User Management — 2pts)

### 3.1 🔗 User profile backend
- `GET /users/me` — own profile
- `PUT /users/me` — update display name, language, etc.
- `PUT /users/me/avatar` — file upload (multer) + storage
- `GET /users/:id` — public profile
- `GET /users/search?q=` — search by username/display name
- Default avatar generation or placeholder
- **Depends on:** 2.3

### 3.2 🔗 User profile frontend
- Profile settings page (edit display name, avatar)
- Avatar upload with preview
- Public profile page (for viewing other users)
- **Depends on:** 3.1, 2.4

### 3.3 🔗 Friends system backend
- `POST /friends/request/:userId`
- `PUT /friends/:id/accept`
- `PUT /friends/:id/decline`
- `DELETE /friends/:id`
- `GET /friends` — list with online status
- Prevent duplicate requests, self-friending
- **Depends on:** 2.3

### 3.4 🔗 Friends system frontend
- Friends list page
- Send request button on profiles
- Pending requests view (incoming + outgoing)
- Online/offline indicator
- **Depends on:** 3.3, 3.2

---

## 4. MARKET DATA & ASSETS (Phase 2)

### 4.1 🔓 Asset seed data
- Create migration/seed script for top 20 assets
- Name, symbol, type, logo URL
- **Assignable solo** — just a seed file

### 4.2 🔓 Market data service
- CoinGecko API integration (fetch current prices)
- Price caching in database (update `assets.current_price`)
- Cron job: fetch prices every 30-60 seconds
- Fallback: serve cached prices when API fails
- Rate limit awareness (track calls, backoff if needed)
- **Assignable solo** — self-contained service

### 4.3 🔗 Asset endpoints
- `GET /assets` — list all with current prices, search, filter, sort, pagination
- `GET /assets/:symbol` — detail + price
- **Depends on:** 4.1, 4.2

### 4.4 🔗 Price WebSocket feed
- WebSocket gateway: `price:update` events
- Broadcast to all connected clients when prices change
- Initial batch send on connection
- Handle connection/disconnection cleanly
- **Depends on:** 4.2

### 4.5 🔗 Asset browser frontend
- Markets page: table/grid of assets
- Live price updates via WebSocket
- Search bar, filter by type, sort columns
- Click asset → navigate to detail page
- **Depends on:** 4.3, 4.4, 1.3

### 4.6 🔗 Asset detail page frontend
- Price chart (use Lightweight Charts or Recharts)
- Current price + 24h change
- Order form (integrated from 5.3)
- **Depends on:** 4.5

---

## 5. TRADING ENGINE (Phase 2)

### 5.1 🔗 Order processing backend
- `POST /orders` — place market or limit order
- Market order: execute immediately at current price
- Limit order: store as pending, execute when price matches
- Validate: sufficient balance (buy) or holdings (sell)
- Update user balance and holdings atomically (transaction)
- Calculate average buy price for holdings
- `GET /orders` — order history with filters
- `DELETE /orders/:id` — cancel pending limit order
- **Depends on:** 2.3, 4.2

### 5.2 🔗 Limit order checker
- Background job: check pending limit orders against current prices
- Execute when conditions met
- Create notification on fill
- Run on every price update or on a short interval
- **Depends on:** 5.1, 4.2

### 5.3 🔗 Trading frontend
- Order form component: buy/sell tabs, market/limit toggle
- Quantity input, price input (limit only), estimated total
- Balance display, validation feedback
- Order confirmation modal
- Order history table
- **Depends on:** 5.1, 4.5

### 5.4 🔗 Portfolio service backend
- `GET /portfolio` — holdings + current value + P&L per asset
- Calculate: current value = quantity × current price
- Calculate: P&L = current value - (quantity × avg buy price)
- Total portfolio value = balance + sum of holdings values
- **Depends on:** 5.1

### 5.5 🔗 Portfolio page frontend
- Holdings table (asset, quantity, avg price, current price, P&L, % change)
- Total portfolio value card
- Balance card
- Allocation breakdown (optional pie chart)
- **Depends on:** 5.4

### 5.6 🔗 Portfolio snapshot scheduler
- Daily cron job: for each user, calculate total portfolio value
- Store in `portfolio_snapshots` table
- Used for the analytics performance chart
- **Depends on:** 5.4

---

## 6. SOCIAL & CHAT (Module: User Interaction — 2pts)

### 6.1 🔗 Chat backend
- WebSocket gateway for chat messages
- `chat:send` — client sends message (receiver_id, content)
- `chat:receive` — server pushes to receiver if online
- Message persistence in database
- `GET /messages/:userId` — paginated chat history
- **Depends on:** 2.3

### 6.2 🔗 Chat frontend
- Chat sidebar or modal UI
- Conversation list (friends who you've chatted with)
- Message thread view
- New message input
- Online indicator per contact
- **Depends on:** 6.1, 3.4

### 6.3 🔗 Leaderboard backend
- `GET /leaderboard` — rank users by portfolio performance
- Performance = (current total value - 10000) / 10000 × 100
- Paginated, top 50 or 100
- **Depends on:** 5.4

### 6.4 🔗 Leaderboard frontend
- Ranked table: position, username, avatar, P&L %, total value
- Link to public profile
- **Depends on:** 6.3

### 6.5 🔗 Online presence system
- Track user online/offline via WebSocket connection
- Update `users.is_online` and `users.last_seen`
- Broadcast status changes to friends
- **Depends on:** 3.3

---

## 7. MODULES — INDEPENDENT / SOLO-FRIENDLY

> These can be built mostly independently once basic auth (Phase 1) is done.

### 7.1 🔓 ORM — Prisma setup (Module: ORM — 1pt)
- Already done as part of 1.2
- Just needs to be properly used everywhere (no raw SQL)
- Schema with clear relations
- **Part of initial setup — free point**

### 7.2 🔓 OAuth 2.0 integration (Module: OAuth — 1pt)
- Pick one provider: Google, GitHub, or 42
- Configure OAuth app on provider side
- Passport strategy (passport-google-oauth20 or similar)
- Callback endpoint: create user if new, login if existing
- Frontend: "Sign in with Google" button
- **Assignable solo** — only needs auth module structure

### 7.3 🔓 2FA — TOTP (Module: 2FA — 1pt)
- `POST /auth/2fa/setup` — generate secret, return QR code (otpauth:// URI)
- `POST /auth/2fa/verify` — verify 6-digit code
- `POST /auth/2fa/disable` — disable with code confirmation
- On login: if 2FA enabled, require code after password
- Frontend: setup page with QR display, code input
- Libraries: `otplib` for TOTP, `qrcode` for QR generation
- **Assignable solo** — self-contained feature

### 7.4 🔓 Notification system (Module: Notifications — 1pt)
- Database table for notifications
- `GET /notifications` — paginated, unread count
- `PUT /notifications/:id/read`
- `PUT /notifications/read-all`
- WebSocket push: `notification:new`
- Trigger notifications from: order fill, friend request, price alert, chat message
- Frontend: bell icon in navbar, dropdown with notification list
- **Assignable solo** — just needs to hook into other services at the end

### 7.5 🔓 Advanced search (Module: Advanced Search — 1pt)
- `GET /assets?q=bit&type=crypto&sort=price&order=desc&page=1&limit=20`
- Full-text search on asset name + symbol
- Filter by type (crypto/stock)
- Sort by price, 24h change, volume, name
- Pagination with total count
- Frontend: search bar + filter dropdowns + sort buttons on markets page
- **Assignable solo** — just query logic

### 7.6 🔓 i18n — Multiple languages (Module: i18n — 1pt)
- Set up `react-i18next` with namespace support
- Create translation files: `en.json`, `fr.json`, `nl.json`
- Translate ALL user-facing strings (no hardcoded text)
- Language switcher in settings/navbar
- Persist language preference in user profile
- **Assignable solo** — can do this entirely in the frontend

### 7.7 🔓 GDPR compliance (Module: GDPR — 1pt)
- `GET /gdpr/export` — collect all user data (profile, orders, holdings, messages) as JSON
- `DELETE /gdpr/delete-account` — soft or hard delete with confirmation
- Confirmation email or modal before deletion
- Frontend: settings page with "Download my data" and "Delete account" buttons
- **Assignable solo** — mostly backend queries

### 7.8 🔓 Analytics dashboard (Module: Analytics — 2pts)
- Portfolio performance line chart (from daily snapshots)
- Asset allocation pie chart
- Trade history table with date range filter
- Summary stats: total trades, best trade, worst trade, total P&L
- Export to CSV (trades table)
- Export to PDF (summary report)
- Libraries: Recharts for charts, jsPDF or pdfmake for PDF, Papa Parse for CSV
- **Assignable solo** — needs portfolio data endpoints but can mock them initially

### 7.9 🔓 Privacy Policy page
- `/privacy` route
- Real content covering: data collected, how it's used, how it's stored, user rights
- Tailored to PaperTrade (simulated trading, no real money)
- Accessible from footer
- **Assignable solo**

### 7.10 🔓 Terms of Service page
- `/terms` route
- Real content: simulated trading disclaimer, no real money, user responsibilities
- Accessible from footer
- **Assignable solo**

---

## Suggested Team Assignment (4-5 people)

### Person A — Backend Lead / Architect
- 1.2 Backend scaffold
- 2.1-2.3 Auth system
- 5.1-5.2 Trading engine
- 5.4 Portfolio service

### Person B — Frontend Lead
- 1.3 Frontend scaffold
- 2.4 Auth pages
- 5.3 Trading frontend
- 5.5 Portfolio page
- Base UI components

### Person C — Real-time & Social
- 4.4 Price WebSocket feed
- 6.1-6.2 Chat (backend + frontend)
- 6.5 Online presence
- 3.3-3.4 Friends system

### Person D — Market Data & Modules
- 4.1-4.2 Asset seed + market data service
- 4.5-4.6 Asset browser + detail page frontend
- 7.5 Advanced search
- 7.4 Notification system

### Person E — Solo Modules (limited time)
Pick from the solo-friendly pool:
- 7.2 OAuth 2.0
- 7.3 2FA
- 7.6 i18n (translations)
- 7.7 GDPR compliance
- 7.9 Privacy Policy page
- 7.10 Terms of Service page
- 7.8 Analytics dashboard (if more time available)

---

## Development Order (What to Build When)

```
WEEK 1:  [1.1] [1.2] [1.3] [1.4]          ← everyone can start
              │      │
WEEK 2:  [2.1]→[2.2]→[2.3]  [2.4]         ← auth must work first
              │               │
WEEK 3:  [4.1][4.2]  [3.1]→[3.2]           ← market data + user profiles
              │       │
WEEK 4:  [4.3]→[4.4]→[4.5]→[4.6]           ← asset pages
         [5.1]→[5.2]  [5.3]                 ← trading engine
              │
WEEK 5:  [5.4]→[5.5]→[5.6]                 ← portfolio
         [6.1]→[6.2]  [6.3]→[6.4]          ← chat + leaderboard
         [3.3]→[3.4]  [6.5]                 ← friends + presence
              │
WEEK 6:  [7.2][7.3][7.4][7.5][7.6][7.7]    ← solo modules (parallel)
         [7.8]                               ← analytics dashboard
              │
WEEK 7:  [7.9][7.10]                        ← legal pages
         Polish, bug fixes, testing
              │
WEEK 8:  README, demo prep, final testing
```
