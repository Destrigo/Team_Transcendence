## Tiny Tasks

### Privacy Policy Page
- Create `/privacy` route
- Write real privacy policy content
- Cover: data collected, usage, storage, user rights, simulated trading disclaimer
- Add footer link
- **No dependencies. Just HTML/React content.**

### Terms of Service Page
- Create `/terms` route
- Write real ToS content: no real money, user responsibilities, account rules
- Add footer link
- **No dependencies. Just HTML/React content.**

### Asset Seed Script
- Write a seed file with 20 assets (top cryptos or stocks)
- Fields: symbol, name, type, logo_url
- Run as part of Prisma seed command
- **No dependencies. Just a data file.**

---

## Small Tasks

### OAuth 2.0 — Google/GitHub/42 (1 module point)
- Register OAuth app with the chosen provider
- Install passport + provider strategy
- Create callback endpoint
- If user exists → log in. If new → create account + log in
- Frontend: "Sign in with [Provider]" button on login page
- **Needs:** auth module structure (endpoints exist), but the OAuth part is self-contained

### 2FA — TOTP (1 module point)
- Install `otplib` and `qrcode`
- `POST /auth/2fa/setup` → generate secret, return QR code as data URI
- `POST /auth/2fa/verify` → validate 6-digit code
- `POST /auth/2fa/disable` → disable with code confirmation
- Modify login flow: if 2FA enabled, prompt for code after password
- Frontend: settings page with QR code display and code input
- **Needs:** auth module structure, but 2FA logic is self-contained

### GDPR Compliance (1 module point)
- `GET /gdpr/export` → collect all user data (profile, orders, holdings, messages) → return as JSON download
- `DELETE /gdpr/delete-account` → delete user + all related data, with confirmation
- Frontend: buttons in settings page
- **Needs:** working user model and a few related tables, but query logic is independent

---

## Medium Tasks (1-2 days each)

### i18n — Multiple Languages (1 module point)
- Install `react-i18next` + `i18next`
- Set up translation namespace structure
- Create `en.json`, `fr.json`, `nl.json` with ALL UI strings
- Replace every hardcoded string in the frontend with `t('key')`
- Language switcher component in navbar or settings
- Save preference in user profile
- **Needs:** frontend to be mostly built (so you know what strings exist)
- **Best done in Week 6-7 when UI is stable**

### Notification System (1 module point)
- Backend: notifications table, CRUD endpoints
- WebSocket: push `notification:new` to connected user
- Create helper: `notificationService.create(userId, type, title, body, data)`
- Hook into: order fills, friend requests, price alerts, messages
- Frontend: bell icon in navbar, dropdown showing recent notifications, unread count badge
- **Can build the system independently, then wire it into other features at the end**

### Analytics Dashboard (2 module points — larger task)
- Portfolio performance line chart (data from `portfolio_snapshots`)
- Allocation pie chart (data from holdings)
- Trade history table with date range picker
- Stats cards: total trades, best/worst trade, total P&L
- CSV export (use Papa Parse or manual CSV generation)
- PDF export (use jsPDF or pdfmake)
- **Can be built with mock data first, then connected to real endpoints**
- **Best assigned to someone comfortable with charting libraries**

## What "Done" Means

- Code compiles and runs without errors
- Feature works end-to-end (backend endpoint + frontend page)
- Input validation on both sides
- No console warnings or errors
- Tested manually with at least 2 scenarios
- PR submitted with clear description
