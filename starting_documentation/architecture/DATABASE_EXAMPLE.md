# PaperTrade — Database Schema

## Core Tables

### users
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| email | VARCHAR(255) | unique, not null |
| password_hash | VARCHAR(255) | bcrypt hash |
| username | VARCHAR(50) | unique, not null |
| display_name | VARCHAR(100) | |
| avatar_url | VARCHAR(500) | default avatar if null |
| balance | DECIMAL(15,2) | fake money balance, default 10000.00 |
| oauth_provider | VARCHAR(50) | nullable (google, 42, github) |
| oauth_id | VARCHAR(255) | nullable |
| two_factor_secret | VARCHAR(255) | nullable, encrypted TOTP secret |
| two_factor_enabled | BOOLEAN | default false |
| language | VARCHAR(5) | default 'en' |
| is_online | BOOLEAN | default false |
| last_seen | TIMESTAMP | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### assets
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| symbol | VARCHAR(20) | e.g. BTC, ETH, AAPL |
| name | VARCHAR(100) | e.g. Bitcoin, Ethereum |
| type | ENUM | 'crypto' or 'stock' |
| current_price | DECIMAL(15,6) | last cached price |
| price_updated_at | TIMESTAMP | when price was last fetched |
| logo_url | VARCHAR(500) | |
| is_active | BOOLEAN | default true |

### orders
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| asset_id | UUID | FK → assets |
| type | ENUM | 'buy' or 'sell' |
| order_type | ENUM | 'market' or 'limit' |
| quantity | DECIMAL(15,8) | amount of asset |
| price | DECIMAL(15,6) | execution price (market) or target price (limit) |
| total | DECIMAL(15,2) | quantity × price |
| status | ENUM | 'pending', 'filled', 'cancelled' |
| filled_at | TIMESTAMP | nullable |
| created_at | TIMESTAMP | |

### holdings
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| asset_id | UUID | FK → assets |
| quantity | DECIMAL(15,8) | total held |
| avg_buy_price | DECIMAL(15,6) | weighted average purchase price |
| updated_at | TIMESTAMP | |
| | | unique(user_id, asset_id) |

### portfolio_snapshots
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| total_value | DECIMAL(15,2) | balance + holdings value at snapshot time |
| balance | DECIMAL(15,2) | cash balance at snapshot time |
| holdings_value | DECIMAL(15,2) | sum of holdings × current price |
| snapshot_date | DATE | one per user per day |
| created_at | TIMESTAMP | |

### friendships
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| requester_id | UUID | FK → users |
| addressee_id | UUID | FK → users |
| status | ENUM | 'pending', 'accepted', 'declined' |
| created_at | TIMESTAMP | |
| | | unique(requester_id, addressee_id) |

### messages
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| sender_id | UUID | FK → users |
| receiver_id | UUID | FK → users |
| content | TEXT | message body |
| is_read | BOOLEAN | default false |
| created_at | TIMESTAMP | |

### notifications
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| type | VARCHAR(50) | 'order_filled', 'price_alert', 'friend_request', 'message' |
| title | VARCHAR(200) | |
| body | TEXT | |
| data | JSONB | optional metadata (order_id, asset_id, etc.) |
| is_read | BOOLEAN | default false |
| created_at | TIMESTAMP | |

### price_alerts
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| asset_id | UUID | FK → assets |
| target_price | DECIMAL(15,6) | |
| direction | ENUM | 'above' or 'below' |
| is_triggered | BOOLEAN | default false |
| created_at | TIMESTAMP | |

---

## Key Relationships

- users 1:N orders
- users 1:N holdings
- users 1:N portfolio_snapshots
- users N:N users (through friendships)
- users 1:N messages (as sender)
- users 1:N messages (as receiver)
- users 1:N notifications
- users 1:N price_alerts
- assets 1:N orders
- assets 1:N holdings

---

## Indexes to Add

- `orders(user_id, created_at DESC)` — order history
- `orders(status, order_type)` — pending limit order checks
- `holdings(user_id)` — portfolio queries
- `messages(sender_id, receiver_id, created_at)` — chat history
- `notifications(user_id, is_read, created_at DESC)` — notification feed
- `portfolio_snapshots(user_id, snapshot_date)` — chart data
- `assets(symbol)` — search
- `friendships(requester_id, addressee_id)` — friend lookups
