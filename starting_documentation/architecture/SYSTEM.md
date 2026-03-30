# PaperTrade — System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Docker Compose                          │
│                                                             │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────────┐   │
│  │ Frontend │───▶│   Backend    │───▶│   PostgreSQL   │   │
│  │ (React)  │    │              │    │                  │   │
│  │ :3000    │    │  :4000       │    │  :5432           │   │
│  └──────────┘    └──────┬───────┘    └──────────────────┘   │
│                         │                                   │
│                         │ WebSocket (:4000/ws)              │
│                         │                                   │
│                    ┌────┴────┐                              │
│                    │ External│                              │
│                    │  APIs   │                              │
│                    │(CoinGecko│                             │
│                    │ Finnhub) │                             │
│                    └─────────┘                              │
└─────────────────────────────────────────────────────────────┘
```

## Backend Structure (example. NestJS)

```
src/
├── main.ts
├── app.module.ts
├── common/
│   ├── guards/          # JwtAuthGuard, TwoFactorGuard
│   ├── filters/         # HttpExceptionFilter
│   ├── interceptors/    # TransformInterceptor
│   ├── decorators/      # @CurrentUser(), @Public()
│   └── pipes/           # ValidationPipe config
│
├── auth/
│   ├── auth.module.ts
│   ├── auth.controller.ts    # POST /auth/register, /auth/login, /auth/refresh
│   ├── auth.service.ts
│   ├── strategies/           # JwtStrategy, OAuth2Strategy
│   └── dto/                  # RegisterDto, LoginDto
│
├── users/
│   ├── users.module.ts
│   ├── users.controller.ts   # GET/PUT /users/me, GET /users/:id
│   ├── users.service.ts
│   └── dto/
│
├── assets/
│   ├── assets.module.ts
│   ├── assets.controller.ts  # GET /assets, GET /assets/:symbol
│   ├── assets.service.ts
│   └── market-data/
│       ├── market-data.service.ts     # Fetch from external APIs
│       └── market-data.scheduler.ts   # Cron job to refresh prices
│
├── trading/
│   ├── trading.module.ts
│   ├── trading.controller.ts  # POST /orders, GET /orders, DELETE /orders/:id
│   ├── trading.service.ts     # Order execution logic
│   ├── portfolio.service.ts   # Holdings + value calculations
│   └── dto/
│
├── social/
│   ├── social.module.ts
│   ├── friends.controller.ts  # POST/GET/PUT /friends
│   ├── friends.service.ts
│   ├── chat.gateway.ts        # WebSocket gateway for chat
│   └── chat.service.ts
│
├── notifications/
│   ├── notifications.module.ts
│   ├── notifications.controller.ts  # GET /notifications, PUT /notifications/:id/read
│   ├── notifications.service.ts
│   └── notifications.gateway.ts     # WebSocket push
│
├── analytics/
│   ├── analytics.module.ts
│   ├── analytics.controller.ts  # GET /analytics/portfolio, /analytics/export
│   ├── analytics.service.ts
│   └── snapshot.scheduler.ts    # Daily portfolio snapshot cron
│
├── websocket/
│   ├── websocket.module.ts
│   ├── price-feed.gateway.ts   # Broadcast price updates
│   └── presence.gateway.ts     # Online status tracking
│
├── two-factor/
│   ├── two-factor.module.ts
│   ├── two-factor.controller.ts
│   └── two-factor.service.ts
│
├── gdpr/
│   ├── gdpr.module.ts
│   ├── gdpr.controller.ts   # GET /gdpr/export, DELETE /gdpr/delete-account
│   └── gdpr.service.ts
│
└── prisma/
    ├── prisma.module.ts
    ├── prisma.service.ts
    └── schema.prisma
```

## Frontend Structure (React)

```
src/
├── main.tsx
├── App.tsx
├── routes.tsx
│
├── components/
│   ├── layout/          # Navbar, Sidebar, Footer, PageShell
│   ├── ui/              # Button, Input, Modal, Card, Badge, Toast
│   ├── charts/          # PriceChart, PortfolioPieChart, PerformanceLine
│   └── common/          # LoadingSpinner, ErrorBoundary, ProtectedRoute
│
├── pages/
│   ├── auth/            # LoginPage, RegisterPage, TwoFactorPage
│   ├── dashboard/       # DashboardPage (portfolio overview)
│   ├── markets/         # MarketsPage (asset browser), AssetDetailPage
│   ├── trading/         # OrderForm, OrderHistory
│   ├── portfolio/       # PortfolioPage, HoldingsTable
│   ├── social/          # FriendsPage, ChatPage, LeaderboardPage
│   ├── profile/         # ProfilePage (own), PublicProfilePage (others)
│   ├── analytics/       # AnalyticsDashboard
│   ├── settings/        # SettingsPage (2FA, language, notifications)
│   └── legal/           # PrivacyPolicy, TermsOfService
│
├── hooks/
│   ├── useAuth.ts
│   ├── useWebSocket.ts
│   ├── usePrices.ts
│   ├── usePortfolio.ts
│   └── useNotifications.ts
│
├── services/
│   ├── api.ts           # Axios instance with interceptors
│   ├── auth.service.ts
│   ├── trading.service.ts
│   ├── user.service.ts
│   └── socket.service.ts
│
├── store/               # State management (Zustand or Context)
│   ├── authStore.ts
│   ├── priceStore.ts
│   └── notificationStore.ts
│
├── i18n/
│   ├── index.ts
│   ├── en.json
│   ├── fr.json
│   └── nl.json
│
└── utils/
    ├── formatters.ts    # formatCurrency, formatPercent, formatDate
    ├── validators.ts
    └── constants.ts
```

## Key API Endpoints

### Auth
- `POST /auth/register` — create account
- `POST /auth/login` — email+password login
- `POST /auth/refresh` — refresh JWT
- `POST /auth/oauth/:provider` — OAuth callback
- `POST /auth/2fa/setup` — generate TOTP secret + QR
- `POST /auth/2fa/verify` — verify TOTP code
- `POST /auth/2fa/disable` — disable 2FA

### Users
- `GET /users/me` — current user profile
- `PUT /users/me` — update profile
- `PUT /users/me/avatar` — upload avatar
- `GET /users/:id` — public profile
- `GET /users/search?q=` — search users

### Assets
- `GET /assets` — list all assets (with search, filter, sort, pagination)
- `GET /assets/:symbol` — asset detail + price history

### Trading
- `POST /orders` — place order
- `GET /orders` — order history (with filters)
- `DELETE /orders/:id` — cancel pending limit order
- `GET /portfolio` — current holdings + total value
- `GET /portfolio/history` — daily snapshots for chart

### Social
- `POST /friends/request/:userId` — send friend request
- `PUT /friends/:id/accept` — accept
- `PUT /friends/:id/decline` — decline
- `DELETE /friends/:id` — remove friend
- `GET /friends` — friends list with online status
- `GET /messages/:userId` — chat history with user
- `GET /leaderboard` — ranked users by performance

### Notifications
- `GET /notifications` — user notifications (paginated)
- `PUT /notifications/:id/read` — mark as read
- `PUT /notifications/read-all` — mark all as read

### Analytics
- `GET /analytics/portfolio?from=&to=` — portfolio data for charts
- `GET /analytics/trades?from=&to=` — trade stats
- `GET /analytics/export/csv` — export trades as CSV
- `GET /analytics/export/pdf` — export summary as PDF

### GDPR
- `GET /gdpr/export` — download all personal data
- `DELETE /gdpr/delete-account` — delete account + all data

## WebSocket Events

### Price Feed (server → client)
- `price:update` — `{ symbol, price, change24h, volume }`
- `price:batch` — array of price updates (initial load)

### Chat (bidirectional)
- `chat:send` — client sends message
- `chat:receive` — server pushes incoming message
- `chat:typing` — typing indicator

### Notifications (server → client)
- `notification:new` — push new notification

### Presence (bidirectional)
- `presence:online` — user comes online
- `presence:offline` — user goes offline
- `presence:status` — friend online/offline status change

## External API Strategy

### Primary: CoinGecko (free, no API key needed)
- `GET /api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`
- `GET /api/v3/coins/{id}/market_chart?days=30`
- Rate limit: 10-30 calls/minute (free tier)

### Fallback: cache last known prices
- Backend caches prices in the database (`assets.current_price`)
- If API call fails, serve cached price with a "stale" indicator
- Cron job fetches prices every 30-60 seconds
- WebSocket broadcasts only when prices actually change

### Important
- NEVER call external APIs from the frontend
- All external calls go through the backend
- Backend caches aggressively to stay within rate limits
