*This project has been created as part of the 42 curriculum by mtaranti, rgoossen, pkhvorov, livliege.*

# PaperTrade

## Description

**PaperTrade** is a simulated cryptocurrency and stock trading platform where users trade with fake money against real, live market data. Every new account starts with a $10,000 virtual balance and can buy/sell assets at market or limit prices, track portfolio performance over time, compete on a leaderboard, and interact with other traders through a friends system and real-time chat.

### Key Features
- Live crypto (CoinGecko) and stock (Finnhub) price feeds pushed over WebSocket
- Market and limit order execution against real-time prices
- Portfolio tracking with realized + unrealized P&L, daily value snapshots
- Analytics dashboard with charts, trade stats, and CSV/PDF export
- Real-time chat, friend requests, and online presence between users
- Notification system (friend requests, accepted requests, chat messages, order fills)
- Leaderboard ranking traders by portfolio performance (bonus feature, not a scored module)
- OAuth 2.0 (Google, GitHub, 42) and Two-Factor Authentication (TOTP)
- Multi-language support (English, French, Dutch)
- GDPR compliance (personal data export, full account deletion)

---

## Team Information

| Member | Login | Role(s) | Responsibilities |
|--------|-------|---------|-------------------|
| Marco Tarantino | mtaranti | Project Owner + Developer | Infrastructure (Docker, HTTPS/Caddy), market data integration, analytics, GDPR, legal pages, social feature rebuild (friends/chat/presence/notifications/leaderboard), OAuth/2FA fixes, trading UX, portfolio backend |
| Rogier Goossens | rgoossen | Developer | Database schema design, initial social module (friends backend/frontend, chat) |
| Pavel Khvorov | pkhvorov | Developer | Auth/Users modules, orders/trading core, OAuth 2.0 + 2FA implementation, code review |
| Liat Vliegers | livliege | Developer | QA pass across the whole app (detailed bug report), Markets page and Asset Detail page |

Two earlier teammates (Roger Torrent, Yasaman Karimi) contributed to the project before leaving the team for personal/scheduling reasons in its first months — an early backend exploration and the original EN/FR/NL i18n scaffolding, respectively. Liat Vliegers joined later to bring the team back to four.

---

## Project Management

### Work Organization
Work was split by module/domain (frontend, backend, WebSockets, market data, database, auth, social, analytics, and the "other" compliance modules) via a team vote, then tracked as GitHub Issues, one per feature area. Each person worked on a dedicated feature branch and opened a Pull Request against `main` for review before merging. Issues were closed only once the corresponding code was verified working, not just present.

### Tools Used
- **Project Management:** GitHub Issues
- **Communication:** Slack
- **Version Control:** Git, feature-branch workflow with mandatory PR review before merging to `main`

### Meeting Cadence
Ad-hoc in-person and video call check-ins roughly weekly, more frequent in the final weeks before evaluation, plus asynchronous daily updates on Slack given team members' conflicting school/work/study schedules.

---

## Technical Stack

| Layer | Technology | Justification |
|-------|-----------|-----------------|
| Frontend | React + Vite + Tailwind CSS | Fast dev server, component model fits the multi-page trading UI, Tailwind satisfies the CSS-framework requirement without hand-rolled CSS |
| Backend | NestJS (TypeScript) | Structured, modular architecture (modules/controllers/services/guards) that scales well across many domains (auth, trading, social, analytics) built by different people in parallel |
| Database | PostgreSQL | Relational integrity for money-adjacent data (balances, orders, holdings) with strong transactional guarantees |
| ORM | Prisma | Type-safe queries end-to-end with TypeScript, migrations tracked in-repo, no raw SQL |
| Real-time | Socket.IO | WebSocket gateway support built into NestJS; used for live prices (`/prices`) and social features (`/social`: presence, chat, notifications) |
| Charts | lightweight-charts (price/portfolio history), Recharts (analytics) | lightweight-charts is purpose-built for financial candle/line charts; Recharts covers the more general analytics visualizations |
| Market Data | CoinGecko API (crypto), Finnhub API (stocks) | Free tiers cover both current price and history without requiring a paid data provider |
| Auth | JWT (access + refresh, httpOnly cookies), Passport (Google/GitHub/42 OAuth), otplib (TOTP 2FA) | Stateless auth that works across the REST API and WebSocket handshakes alike |
| Containerization | Docker Compose | Required by the subject; one command brings up Postgres, backend, frontend, and the reverse proxy together |
| Reverse proxy / HTTPS | Caddy | Automatic local TLS certificate generation, single HTTPS entrypoint in front of the API, WebSocket, and frontend dev server |

---

## Instructions

### Prerequisites
- Docker and Docker Compose
- Git
- A modern web browser (Chrome latest)

### Setup
1. Clone the repository and enter the project directory:
   ```bash
   git clone <repo-url>
   cd project
   ```
2. Copy the environment file and fill in the values you need:
   ```bash
   cp .env.example .env
   ```
   At minimum, set the `JWT_*` secrets and `TOTP_ENCRYPTION_KEY` to any random strings for local use. OAuth (Google/GitHub/42) and Finnhub stock prices are optional — leaving those blank disables just that provider/feature; the app still starts and everything else works.
3. Start the application:
   ```bash
   docker compose up --build
   ```
4. Open `https://localhost` and accept the browser's self-signed certificate warning (Caddy generates its own local CA on first run).
5. Register a new account from the UI — there are no pre-seeded user accounts; the database seed only populates the 20 tradeable assets (10 crypto, 10 stocks) so the markets aren't empty on first launch.

---

## Database Schema

PostgreSQL, managed entirely through Prisma migrations (`project/backend/prisma/migrations`).

### Tables
- **users** — accounts, balance, OAuth/2FA fields, online presence
- **assets** — tradeable crypto/stocks with live price, 24h change, high/low, volume, market cap
- **orders** — buy/sell orders (market or limit), with status (pending/processing/filled/cancelled)
- **holdings** — a user's current position per asset (quantity + average buy price)
- **portfolio_snapshots** — one row per user per day, for the portfolio performance chart
- **friendships** — friend requests/relationships between two users, with status
- **messages** — direct chat messages between two users
- **notifications** — per-user notification feed (friend requests, messages, order fills)

### Key Relationships
- A `User` has many `Order`s and `Holding`s (one holding per asset they've ever bought, enforced unique on `[userId, assetId]`).
- Each `Order`/`Holding` references one `Asset`.
- `Friendship` links two `User`s by role (`requester`/`addressee`) rather than a symmetric join table, so a request's direction and status survive independently of who queries it.
- `Message` and `Notification` both reference the owning `User`; notifications carry a flexible `data` JSON payload so the same table serves several notification types (friend request, message, order fill) without a schema per type.

---

## Features List

| Feature | Description | Implemented by |
|---------|-------------|-----------------|
| Registration & login | Email/password signup, bcrypt-hashed passwords, JWT access+refresh cookies | pkhvorov |
| OAuth 2.0 login | Sign in with Google, GitHub, or 42 | pkhvorov, mtaranti (startup/crash fix when unconfigured) |
| Two-Factor Authentication | TOTP setup with QR code, required on login when enabled | pkhvorov, mtaranti (fixed a bug where the login step always failed, and encrypted the stored secret) |
| Profile & avatar | Edit display name, upload avatar, public profile page | pkhvorov |
| User search | Search users by username/display name | pkhvorov |
| Friends | Send/accept/decline/remove friend requests, online status | rgoossen (initial), mtaranti (rebuilt for race-condition safety and outgoing-requests support) |
| Real-time chat | Direct messages over WebSocket with unread counts | rgoossen (initial), mtaranti (rebuilt on a verified-identity WebSocket gateway) |
| Notifications | Bell icon, unread badge, mark-as-read/mark-all-read, live push | mtaranti |
| Leaderboard | Ranks users by portfolio performance | mtaranti |
| Markets page | Browse/search/sort all tradeable assets with live prices | livliege, mtaranti (live WebSocket price updates) |
| Asset detail page | Price chart, 24h high/low, your position, trade panel | livliege, mtaranti (live price updates, high/low data) |
| Trading | Market/limit order form with confirmation step and toast feedback | pkhvorov (core), mtaranti (confirmation modal, toasts, full order history) |
| Portfolio | Holdings, cash, total value, realized+unrealized P&L, history chart | mtaranti |
| Analytics dashboard | Performance chart, allocation, trade stats, CSV/PDF export | mtaranti |
| GDPR | Export all personal data as JSON, delete account (cascades across all features) | mtaranti |
| Legal pages | Privacy Policy and Terms of Service | mtaranti |
| Multi-language | English, French, Dutch | ykarimi (foundation), mtaranti (extended for new features) |
| HTTPS | Caddy reverse proxy with local TLS in front of the whole app | mtaranti |

---

## Modules

### Module Summary

| # | Module | Category | Type | Points | Implemented by |
|---|--------|----------|------|--------|-----------------|
| 1 | Frontend + Backend Framework | Web | Major | 2 | All |
| 2 | Real-time Features (WebSocket) | Web | Major | 2 | rgoossen, mtaranti |
| 3 | User Interaction (chat, friends, profiles) | Web | Major | 2 | rgoossen, pkhvorov, mtaranti |
| 4 | Standard User Management | User Mgmt | Major | 2 | pkhvorov, mtaranti |
| 5 | Analytics Dashboard | Data | Major | 2 | mtaranti |
| 6 | ORM (Prisma) | Web | Minor | 1 | All |
| 7 | Notification System | Web | Minor | 1 | mtaranti |
| 8 | Advanced Search | Web | Minor | 1 | pkhvorov |
| 9 | OAuth 2.0 | User Mgmt | Minor | 1 | pkhvorov, mtaranti |
| 10 | 2FA | User Mgmt | Minor | 1 | pkhvorov, mtaranti |
| 11 | GDPR Compliance | Data | Minor | 1 | mtaranti |
| 12 | Multiple Languages (i18n) | Accessibility | Minor | 1 | ykarimi, mtaranti |
| | **Total** | | | **17** | |

### Module Details

#### 1. Frontend + Backend Framework (Major — 2 pts)
React (Vite) frontend talking to a NestJS backend over a REST API and two WebSocket namespaces, all served through a single Caddy HTTPS entrypoint.

#### 2. Real-time Features / WebSocket (Major — 2 pts)
Two namespaces: `/prices` (JWT-authenticated on handshake; pushes a full snapshot on connect, then only the assets whose price actually changed on each update) and `/social` (presence, chat, notifications, all identity-verified from the connection's JWT cookie rather than trusted from the client).

#### 3. User Interaction (Major — 2 pts)
Public profiles, user search, friend requests (send/accept/decline/remove, with a race-condition-safe accept path for simultaneous mutual requests), and direct real-time chat with unread counts.

#### 4. Standard User Management (Major — 2 pts)
Profile editing, avatar upload with type/size validation, and friends list with live online/offline status.

#### 5. Analytics Dashboard (Major — 2 pts)
Portfolio performance chart, asset allocation breakdown, trade statistics (best/worst trade), and CSV/PDF export, each filterable by date range.

#### 6. ORM (Minor — 1 pt)
All database access across every module goes through Prisma; no raw SQL queries.

#### 7. Notification System (Minor — 1 pt)
Bell icon with unread badge, dropdown panel, mark-one/mark-all-read, pushed live over the `/social` WebSocket and hooked into friend requests, accepted requests, chat messages, and order fills/cancellations.

#### 8. Advanced Search (Minor — 1 pt)
Search assets by name/symbol, filter by type (crypto/stock), sort by any column, with pagination.

#### 9. OAuth 2.0 (Minor — 1 pt)
Sign in with Google, GitHub, or 42 via Passport strategies; existing users are matched by email, new users are created automatically. Each provider is only registered if its credentials are configured, so a missing provider degrades to "that button doesn't work" instead of crashing the whole backend on startup.

#### 10. 2FA (Minor — 1 pt)
TOTP setup with QR code (via `qrcode.react`), required 6-digit code on login when enabled, and the stored secret is encrypted at rest (AES-256-GCM) rather than kept in plaintext.

#### 11. GDPR Compliance (Minor — 1 pt)
Users can export all their personal data (profile, orders, holdings, friendships, messages, notifications) as JSON, and delete their account, which cascades cleanly across every feature that references them.

#### 12. Multiple Languages (Minor — 1 pt)
English, French, and Dutch via `react-i18next`, with a language switcher and the choice persisted to the user's profile.

---

## Individual Contributions

### mtaranti — Marco Tarantino
- **Role:** Project Owner + Developer
- **Contributions:**
  - Docker Compose infrastructure and Caddy HTTPS reverse proxy
  - Market data integration (CoinGecko crypto, Finnhub stocks) and the live price WebSocket feed
  - Analytics module (performance chart, allocation, trade stats, CSV/PDF export)
  - GDPR export/delete, Privacy Policy and Terms of Service pages
  - Rebuilt friends, chat, presence, leaderboard, and notifications from scratch on a verified-identity WebSocket gateway after the original branches went stale
  - Diagnosed and fixed a login-breaking JWT secret mismatch and an app-crashing OAuth startup bug in the 2FA/OAuth module, and encrypted the stored 2FA secret
  - Completed the Markets/Asset Detail pages (live price updates, 24h high/low) and the Trading/Portfolio module (order confirmation + toasts, full order history, corrected P&L calculation, dedicated portfolio page)
- **Challenges:** Coordinating merges across several people's long-lived branches without a shared understanding of NestJS's module system up front; several features (friends/chat, portfolio P&L) needed a full rebuild rather than a patch once real bugs surfaced under testing.

### rgoossen — Rogier Goossens
- **Role:** Developer
- **Contributions:**
  - Designed the full Prisma schema and initial SQL migrations
  - Built the first version of the social module: friends backend/frontend and chat
- **Challenges:** Learning a new stack (Prisma/NestJS/React) from scratch under a tight, part-time schedule while starting a full-time bachelor's programme in parallel.

### pkhvorov — Pavel Khvorov
- **Role:** Developer
- **Contributions:**
  - Auth and Users modules, orders/trading core
  - OAuth 2.0 and 2FA implementation
  - Caught and helped fix a P&L-inflation bug (deposits counting as trading profit) and a duplicated backend route during code review
- **Challenges:** Coming from a C/C++ background, the NestJS module/controller/provider/DI model took real time to get comfortable with.

### livliege — Liat Vliegers
- **Role:** Developer
- **Contributions:**
  - Joined the team partway through and ran a full manual QA pass across the app, filing a detailed, prioritized bug report (untranslated i18n keys leaking into the UI, a multi-session login bug, missing input validation, styling issues)
  - Built the Markets and Asset Detail pages
- **Challenges:** Joining an existing, already-large codebase and getting comfortable with Git branching/PR workflow in a team setting.

---

## Resources

### Documentation & References
- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [CoinGecko API Documentation](https://docs.coingecko.com/)
- [Finnhub API Documentation](https://finnhub.io/docs/api)
- [Socket.IO Documentation](https://socket.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### AI Usage
Claude (Anthropic) was used as a documentation assistant, in particular to help put together this README (structuring it against the subject's requirements, and cross-referencing the codebase and the team's git/Slack history to keep the feature list, module table, and individual contributions accurate).

## License
This project was built for educational purposes as part of the 42 curriculum and has no commercial license.
