*This project has been created as part of the 42 curriculum by mtaranti, rgoossen, pkhvorov, livliege.*

# PaperTrade

## Table of Contents

- [Description](#description)
- [Team Information](#team-information)
- [Project Management](#project-management)
- [Technical Stack](#technical-stack)
- [Instructions](#instructions)
- [Database Schema](#database-schema)
- [Features List](#features-list)
- [Modules](#modules)
- [Individual Contributions](#individual-contributions)
- [Resources](#resources)
- [Known Limitations](#known-limitations)
- [License](#license)

---

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
| Marco Tarantino | mtaranti | Product Owner + Project Manager + Technical Lead + Developer | Defined feature priorities and reviewed/merged all PRs (PO); tracked deadlines, ran check-ins, coordinated the team through two membership changes (PM); owned architecture and stack decisions — Docker/Caddy infrastructure, module boundaries, security fixes (Tech Lead); implemented market data integration, analytics, GDPR, legal pages, the full social feature rebuild (friends/chat/presence/notifications/leaderboard), OAuth/2FA fixes, trading UX, and portfolio backend (Developer) |
| Rogier Goossens | rgoossen | Developer | Database schema design, initial social module (friends backend/frontend, chat) |
| Pavel Khvorov | pkhvorov | Developer | Auth/Users modules, orders/trading core, OAuth 2.0 + 2FA implementation, code review |
| Liath Vliegers | livliege | Developer | QA pass across the whole app (detailed bug report), Markets page and Asset Detail page |

Two earlier teammates (Roger Torrent, Yasaman Karimi) contributed to the project before leaving the team for personal/scheduling reasons in its first months — an early backend exploration and the original EN/FR/NL i18n scaffolding, respectively. Liath Vliegers joined later to bring the team back to four.

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
- `make` (GNU Make)
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
   At minimum, set `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `JWT_LOGIN_SECRET`, and `TOTP_ENCRYPTION_KEY` to any random strings for local use. OAuth (Google/GitHub/42) and Finnhub stock prices are optional — leaving those blank disables just that provider/feature; the app still starts and everything else works. See [Environment Variables](#environment-variables) below for the full list.
3. Start the application:
   ```bash
   make up
   ```
   This builds the images on first run and starts every service in the background. If you change a `Dockerfile` or a dependency later, rebuild with `make rebuild`.
4. Open `https://localhost` and accept the browser's self-signed certificate warning (Caddy generates its own local CA on first run).
5. Log in with a seeded test account, or register your own from the UI.

### Useful Commands (Makefile)

| Command | Description |
|---------|-------------|
| `make up` | Build (if needed) and start all services in the background |
| `make down` | Stop and remove all containers |
| `make restart` | Restart running containers without rebuilding |
| `make rebuild` | Rebuild images and restart — use after pulling changes or editing a `Dockerfile` |
| `make status` | Show the status of all containers (`docker compose ps`) |
| `make logs` | Tail logs from every service |
| `make logs-back` / `logs-front` / `logs-db` / `logs-proxy` | Tail logs from one service only |
| `make bash-back` / `bash-front` / `bash-db` | Open a shell inside a running container |
| `make psql` | Open a `psql` shell into the database |
| `make clean` | Stop everything and **delete database volumes** — full reset, all data is lost |
| `make prune` | `docker system prune -a --volumes -f` — reclaims disk space; ⚠️ removes unused Docker data for *all* projects on the machine, not just this one |

### Default Test Accounts
The database seed populates the 20 tradeable assets (10 crypto, 10 stocks) and two test accounts, already friends with each other with a sample chat message and a filled BTC position on the first account, so Friends/Chat/Notifications/Portfolio/Trading aren't empty on first login:

| Email | Password |
|-------|----------|
| evaluator1@papertrade.test | Evaluator123! |
| evaluator2@papertrade.test | Evaluator123! |

### Environment Variables

All variables live in `.env` (copied from `.env.example`, never committed). Everything under **Database**, **JWT**, and **App** is required; everything else is optional and safely defaults to "feature disabled" when left blank.

| Variable | Required | Description |
|----------|----------|--------------|
| `DB_USER` | ✅ | PostgreSQL username |
| `DB_PASSWORD` | ✅ | PostgreSQL password |
| `DB_NAME` | ✅ | PostgreSQL database name |
| `DATABASE_URL` | ✅ | Prisma connection string — must be kept in sync with `DB_USER`/`DB_PASSWORD`/`DB_NAME` above (it is not derived automatically) |
| `JWT_ACCESS_SECRET` | ✅ | Signs short-lived access tokens |
| `JWT_REFRESH_SECRET` | ✅ | Signs refresh tokens |
| `JWT_LOGIN_SECRET` | ✅ | Signs the short-lived token issued between password check and 2FA verification |
| `TOTP_ENCRYPTION_KEY` | ✅ | Encrypts each user's stored TOTP secret at rest |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Optional | Enables "Sign in with Google"; blank = provider hidden |
| `GOOGLE_CALLBACK_URL` | Optional | Defaults to `https://localhost/api/auth/google/callback`, only used if the two values above are set |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` / `GITHUB_CALLBACK_URL` | Optional | Same, for GitHub OAuth |
| `FORTYTWO_CLIENT_ID` / `FORTYTWO_CLIENT_SECRET` / `FORTYTWO_CALLBACK_URL` | Optional | Same, for 42 OAuth |
| `COINGECKO_API_URL` | Has default | Crypto price source; free tier, no key needed |
| `FINNHUB_API_KEY` | Optional | Enables stock prices; blank = only crypto assets get live prices |
| `FINNHUB_API_URL` | Has default | Finnhub base URL |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | Optional | Sends GDPR export/delete confirmation emails; blank = confirmation is logged server-side instead of emailed |
| `PORT` | Has default | Backend listen port (`4000`) inside the Docker network |
| `PUBLIC_URL` / `FRONTEND_URL` | ✅ | Public HTTPS origin behind Caddy; also used as the CORS / Socket.IO allowed origin. Keep as `https://localhost` for local evaluation |

### Troubleshooting

| Symptom | Fix |
|---------|-----|
| Backend can't connect to the database | `DATABASE_URL` must point at host `db` (the Docker service name), not `localhost` — and must match `DB_USER`/`DB_PASSWORD`/`DB_NAME` |
| Browser refuses to connect / certificate warning | Expected — Caddy's TLS cert is self-signed for local dev. Accept the warning and make sure you're on `https://`, not `http://` |
| Changed `.env` but nothing changed | `make restart` does not re-read environment changes; use `make rebuild` (or `make down` then `make up`) |
| OAuth button missing for a provider | That provider's `CLIENT_ID`/`CLIENT_SECRET` are blank — the login page only shows configured providers by design |
| Stock assets show no live price | `FINNHUB_API_KEY` is unset — crypto assets still update normally via CoinGecko |
| Port already in use / `docker compose up` fails to bind | Another process is using port 80/443/5432 locally; stop it or change the exposed port in `docker-compose.yml` |
| `make clean` and now I have no data | Expected — it drops the DB volume for a full reset. Restart with `make up` and the seed will repopulate assets and test accounts |

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

The subject requires 14 points minimum. We implemented 17 (5 major + 7 minor), a 3-point buffer over the requirement.

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
All database access goes through Prisma. A couple of trading paths use Prisma's parameterized `$queryRaw` / `$executeRaw` (row locks and atomic holding upserts) rather than the query builder — still Prisma-mediated, no ad-hoc SQL strings outside that layer.

#### 7. Notification System (Minor — 1 pt)
Bell icon with unread badge, dropdown panel, mark-one/mark-all-read, pushed live over the `/social` WebSocket and hooked into friend requests/accept/decline/remove, chat messages, order place/fill/cancel, profile/avatar updates, deposits, password changes, and 2FA enable/disable.

#### 8. Advanced Search (Minor — 1 pt)
Search assets by name/symbol, filter by type (crypto/stock), sort by any column, with pagination.

#### 9. OAuth 2.0 (Minor — 1 pt)
Sign in with Google, GitHub, or 42 via Passport strategies; existing users are matched by email, new users are created automatically. Each provider is only registered if its credentials are configured. The login page only shows configured providers (`GET /auth/providers`); hitting an unconfigured provider returns `503` instead of crashing or a `500`.

#### 10. 2FA (Minor — 1 pt)
TOTP setup with QR code (via `qrcode.react`), required 6-digit code on login when enabled, and the stored secret is encrypted at rest (AES-256-GCM) rather than kept in plaintext.

#### 11. GDPR Compliance (Minor — 1 pt)
Users can export all their personal data (profile, orders, holdings, friendships, messages, notifications, portfolio snapshots) as JSON, and delete their account, which cascades cleanly across every feature that references them. Confirmation emails are sent after export/delete when SMTP is configured.

#### 12. Multiple Languages (Minor — 1 pt)
English, French, and Dutch via `react-i18next`, with a language switcher and the choice persisted to the user's profile.

---

## Individual Contributions

### mtaranti — Marco Tarantino
- **Role:** Product Owner + Project Manager + Technical Lead + Developer
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

### livliege — Liath Vliegers
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

## Known Limitations
- CoinGecko and Finnhub free tiers are rate-limited; under heavy load the price cron falls back to the last cached price with a "stale" indicator rather than failing.
- Stock prices (Finnhub) are disabled entirely if `FINNHUB_API_KEY` is left unset — only crypto assets get live data in that case.
- GDPR export/delete confirmation is only emailed if SMTP is configured; otherwise it's logged server-side instead.
- No automated test suite yet — verification was manual (see QA pass under Individual Contributions).

## License

This project was built for educational purposes as part of the 42 curriculum and has no commercial license.

PaperTrade displays real, live market data and third-party branding (cryptocurrency and stock names, tickers, and logos, sourced via the CoinGecko and Finnhub APIs) purely for educational simulation purposes. No real money is ever transacted, as stated in the app's own Terms of Service, and this project is not affiliated with, endorsed by, or a substitute for any real exchange, broker, or financial data provider. All asset names, tickers, and logos remain the property of their respective owners.
