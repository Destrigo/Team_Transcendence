# PaperTrade — Database Schema

> Reflects the actual Prisma schema on `main` (`project/backend/prisma/schema.prisma`), not the earlier planning-stage example. 9 tables, all managed through Prisma migrations — no raw SQL, no tables outside this schema.

## Tables

### users
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| email | VARCHAR(255) | unique |
| password_hash | VARCHAR(255) | nullable — null for OAuth-only accounts |
| hashed_refresh_token | VARCHAR(255) | nullable — hashed refresh token for rotation/revocation, no separate sessions table |
| username | VARCHAR(50) | unique |
| display_name | VARCHAR | nullable |
| avatar_url | text | nullable |
| balance | DECIMAL | default 10000 — cash balance, moves with every trade/deposit |
| total_deposited | DECIMAL | default 0 — tracked **separately** from `balance` so a deposit is never counted as trading profit in P&L/leaderboard |
| oauth_provider | VARCHAR(50) | nullable: `google` / `github` / `42` |
| oauth_id | VARCHAR(255) | nullable |
| two_factor_secret | VARCHAR(255) | nullable — **encrypted at rest** (AES-256-GCM, `common/crypto/secret-cipher.ts`), not plaintext |
| two_factor_enabled | BOOLEAN | default false |
| language | VARCHAR(5) | default `'en'` — one of `en`/`fr`/`nl` |
| is_online | BOOLEAN | default false |
| last_seen | TIMESTAMP | nullable |
| created_at / updated_at | TIMESTAMP | |

### assets
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| symbol | text | unique, e.g. `BTC`, `AAPL` |
| name | text | e.g. `Bitcoin` |
| type | ENUM `AssetType` | `CRYPTO`, `STOCK`, `FOREX`, `COMMODITY` (only CRYPTO and STOCK are seeded/used today) |
| current_price | DECIMAL(15,6) | last price written by the market-data fetch cycle — doubles as the de-facto price cache |
| change_24h | DECIMAL(10,4) | |
| high_24h / low_24h | DECIMAL(15,6) | |
| volume_24h | DECIMAL(20,2) | |
| market_cap | DECIMAL(20,2) | |
| logo_url | text | nullable |
| coingecko_id | text | nullable — set for CRYPTO assets |
| finnhub_symbol | text | nullable — set for STOCK assets |
| is_active | BOOLEAN | default true |
| price_updated_at | TIMESTAMP | nullable — how stale `current_price` is |
| created_at | TIMESTAMP | |

### orders
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| asset_id | UUID | FK → assets |
| type | ENUM `OrderType` | `BUY` / `SELL` |
| order_type | ENUM `OrderExecutionType` | `MARKET` / `LIMIT` |
| quantity | DECIMAL(15,8) | |
| price | DECIMAL(15,6) | execution price (market) or target price (limit) |
| total | DECIMAL(15,2) | |
| status | ENUM `OrderStatus` | `PENDING` → `PROCESSING` → `FILLED`, or `CANCELLED` |
| filled_at | TIMESTAMP(6) | nullable |
| created_at | TIMESTAMP(6) | |

Indexes: `(user_id, created_at)` for order history, `(status, order_type)` for the limit-order-fill scan.

### holdings
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| asset_id | UUID | FK → assets |
| quantity | DECIMAL(15,8) | |
| avg_buy_price | DECIMAL(15,6) | weighted average, recalculated on each buy |
| updated_at | TIMESTAMP | |

Unique on `(user_id, asset_id)` — one row per user per asset ever held.

### portfolio_snapshots
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| total_value | DECIMAL(15,2) | `balance + holdings_value` at snapshot time |
| balance | DECIMAL(15,2) | |
| holdings_value | DECIMAL(15,2) | |
| snapshot_date | DATE | |
| created_at | TIMESTAMP | |

Unique on `(user_id, snapshot_date)` — one snapshot per user per day, written by `analytics/snapshot.scheduler.ts`. This is why the Analytics page's historical "Portfolio value" can differ from the live figure on the Portfolio page: Analytics charts the daily snapshots, Portfolio computes live from current `balance` + current holdings × current price.

### friendships
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| requester_id | UUID | FK → users |
| addressee_id | UUID | FK → users |
| status | ENUM `FriendshipStatus` | `PENDING` / `ACCEPTED` / `DECLINED` |
| created_at / updated_at | TIMESTAMP | |

Unique on `(requester_id, addressee_id)` — directional, so who sent the request survives independently of who's asking. A declined request can be retried (updated back to `PENDING` rather than duplicated). Accepting/declining/removing has a `Serializable`-isolation retry path to stay correct if two people act on the same or a mirrored request simultaneously.

### messages
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| sender_id / receiver_id | UUID | FK → users |
| content | VARCHAR(2000) | |
| is_read | BOOLEAN | default false |
| created_at | TIMESTAMP | |

Indexed both directions — `(sender_id, receiver_id, created_at)` and `(receiver_id, sender_id, created_at)` — for fast conversation history lookups regardless of who's asking.

### notifications
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| type | VARCHAR(50) | e.g. `friend_request`, `friend_removed`, `deposit`, `order_filled`, `profile_updated` |
| title / body | text | |
| data | JSONB | nullable — flexible per-type payload (e.g. the other user's id) so one table serves every notification type without a schema-per-type |
| is_read | BOOLEAN | default false |
| created_at | TIMESTAMP | |

Indexed on `(user_id, is_read, created_at)` for the notification feed / unread badge.

## Enums

```
FriendshipStatus:     PENDING | ACCEPTED | DECLINED
AssetType:             STOCK | CRYPTO | FOREX | COMMODITY
OrderType:             BUY | SELL
OrderExecutionType:    MARKET | LIMIT
OrderStatus:           PENDING | PROCESSING | FILLED | CANCELLED
```

## Key Relationships

- `User` 1:N `Order`, `Holding`, `PortfolioSnapshot`, `Notification`
- `User` N:N `User` through `Friendship` (directional: `requester`/`addressee`, not a symmetric join table)
- `User` 1:N `Message` as sender, 1:N as receiver (two separate relations on the same table)
- `Asset` 1:N `Order`, `Holding`

## What's Deliberately Not Here

Compared to earlier planning notes, three things were intentionally not built:
- **No `price_alerts` table** — the feature was never implemented.
- **No `sessions` table** — refresh-token rotation/revocation uses a single `hashed_refresh_token` column on `users`, not a separate table.
- **No `two_factor` table** — 2FA is two columns (`two_factor_secret`, `two_factor_enabled`) on `users`, not a separate model.
