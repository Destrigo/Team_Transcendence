# PaperTrade — Git & Workflow Guide

## Branch Strategy

```
main              ← production-ready, never push directly
  └── develop     ← integration branch, all features merge here
        ├── feature/auth-register
        ├── feature/trading-engine
        ├── feature/chat-system
        ├── feature/oauth-google
        ├── fix/price-cache-bug
        └── ...
```

### Rules
- **Never push directly to `main` or `develop`**
- Create a feature branch from `develop` for every task
- Branch naming: `feature/short-description`, `fix/short-description`
- Keep branches small and focused (1 task = 1 branch)
- Merge into `develop` via pull request (at least 1 reviewer)
- Merge `develop` into `main` only when stable (end of sprint/phase)

### Commit Messages
Use clear, descriptive messages. Prefix with the area:

```
auth: add JWT refresh token endpoint
trading: implement market order execution
frontend: create asset browser page with live prices
fix: handle null price in portfolio calculation
docs: update README with module descriptions
chore: add eslint config
```

**Every team member must have commits.** The evaluators will check.

---

## Pull Request Checklist

Before requesting review:
- [ ] Code compiles / builds without errors
- [ ] No console warnings or errors in browser
- [ ] Tested manually (happy path + edge cases)
- [ ] API endpoints validated with curl or Postman
- [ ] No hardcoded secrets or API keys
- [ ] TypeScript: no `any` types (unless justified)
- [ ] Frontend: inputs have validation
- [ ] Backend: DTOs validate input

---

## Environment Variables

All secrets go in `.env` (gitignored). Provide `.env.example` with placeholder values:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/papertrade

# JWT
JWT_SECRET=your-secret-here
JWT_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# OAuth (if using Google)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=https://localhost:4000/auth/google/callback

# External APIs
COINGECKO_API_URL=https://api.coingecko.com/api/v3
PRICE_REFRESH_INTERVAL_MS=30000

# App
FRONTEND_URL=https://localhost:3000
BACKEND_PORT=4000
NODE_ENV=development

# 2FA
TWO_FACTOR_APP_NAME=PaperTrade
```

---

## Docker Compose — Expected Structure

```yaml
version: '3.8'
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: papertrade
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: papertrade
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    depends_on:
      - db
    env_file: .env
    ports:
      - "4000:4000"

  frontend:
    build: ./frontend
    depends_on:
      - backend
    ports:
      - "3000:3000"

volumes:
  pgdata:
```

Single command to start: `docker compose up --build`

---

## Code Review Guidelines

### What to look for
- Does the code do what the PR description says?
- Are there obvious bugs or edge cases not handled?
- Is the code readable without excessive comments?
- Are error cases handled (try/catch, HTTP error responses)?
- Is input validated on both frontend and backend?
- No console.log left in production code (use proper logger)

### How to review
- Be constructive, not nitpicky
- Approve if it works and is reasonable — don't block on style preferences
- If you don't understand something, ask — don't reject

---

## Communication

- **Daily async check-in** — post in Discord/Slack what you're working on, any blockers
- **Weekly sync** — 30min call to review progress, plan next week
- **Blockers** — flag immediately, don't wait for the weekly sync
- **When stuck** — ask in the group chat before spending 2+ hours on something
