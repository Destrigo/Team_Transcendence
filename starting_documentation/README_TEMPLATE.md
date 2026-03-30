# README Template — Fill In During Development

> This template covers ALL required README sections from the ft_transcendence subject.
> Replace placeholder text as the project progresses.

---

*This project has been created as part of the 42 curriculum by <login1>, <login2>, <login3>, <login4>[, <login5>].*

## Description

**PaperTrade** is a simulated cryptocurrency and stock trading platform where users trade with fake money using real-time market data. Users receive a starting balance of €10,000 and can buy/sell assets, track their portfolio performance, compete on a leaderboard, and interact with other traders through chat and friend systems.

### Key Features
- Real-time market data from external APIs
- Market and limit order execution
- Portfolio tracking with P&L calculations
- Interactive analytics dashboard with charts and data export
- Real-time chat and friend system
- Leaderboard ranking traders by performance
- OAuth 2.0 and Two-Factor Authentication
- Multi-language support (EN, FR, NL)
- GDPR compliance (data export and account deletion)

---

## Team Information

| Member | Login | Role(s) | Responsibilities |
|--------|-------|---------|-----------------|
| Name 1 | login1 | Product Owner + Developer | [describe] |
| Name 2 | login2 | Project Manager + Developer | [describe] |
| Name 3 | login3 | Technical Lead + Developer | [describe] |
| Name 4 | login4 | Developer | [describe] |
| Name 5 | login5 | Developer | [describe] |

---

## Project Management

### Work Organization
[Describe how the team organized the work — task distribution, sprint planning, etc.]

### Tools Used
- **Project Management:** [GitHub Issues / Trello / Notion / etc.]
- **Communication:** [Discord / Slack / etc.]
- **Version Control:** Git with feature branch workflow

### Meeting Cadence
[Describe meeting frequency and format]

---

## Technical Stack

| Layer | Technology | Justification |
|-------|-----------|---------------|
| Frontend | React + Tailwind CSS | [why] |
| Backend | NestJS (TypeScript) | [why] |
| Database | PostgreSQL | [why] |
| ORM | Prisma | [why] |
| Real-time | Socket.IO | [why] |
| Charts | Recharts / Lightweight Charts | [why] |
| Market Data | CoinGecko API | [why] |
| Containerization | Docker Compose | [required] |

---

## Instructions

### Prerequisites
- Docker and Docker Compose
- Git
- A modern web browser (Chrome latest)

### Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd papertrade
   ```
2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
3. Edit `.env` with your configuration (see `.env.example` for required variables).
4. Start the application:
   ```bash
   docker compose up --build
   ```
5. Access the application at `https://localhost:3000`

### Default Test Accounts
[If seeded — list test accounts for evaluators]

---

## Database Schema

[Include a visual diagram or describe the structure]

### Tables
- **users** — User accounts and profiles
- **assets** — Tradeable assets (crypto/stocks)
- **orders** — Buy/sell orders (market and limit)
- **holdings** — Current asset holdings per user
- **portfolio_snapshots** — Daily portfolio value snapshots
- **friendships** — Friend relationships between users
- **messages** — Chat messages
- **notifications** — User notifications
- **price_alerts** — User-configured price alerts

### Key Relationships
[Describe the main relationships between tables]

---

## Features List

| Feature | Description | Implemented by |
|---------|-------------|---------------|
| User Registration | Email + password signup with validation | login1 |
| JWT Authentication | Access + refresh token system | login1 |
| [continue for all features...] | | |

---

## Modules

### Module Summary

| # | Module | Category | Type | Points | Implemented by |
|---|--------|----------|------|--------|---------------|
| 1 | Frontend + Backend Framework | Web | Major | 2 | All |
| 2 | Real-time Features (WebSocket) | Web | Major | 2 | [who] |
| 3 | User Interaction | Web | Major | 2 | [who] |
| 4 | ORM (Prisma) | Web | Minor | 1 | All |
| 5 | Notification System | Web | Minor | 1 | [who] |
| 6 | Advanced Search | Web | Minor | 1 | [who] |
| 7 | Standard User Management | User Mgmt | Major | 2 | [who] |
| 8 | OAuth 2.0 | User Mgmt | Minor | 1 | [who] |
| 9 | 2FA | User Mgmt | Minor | 1 | [who] |
| 10 | Analytics Dashboard | Data | Major | 2 | [who] |
| 11 | GDPR Compliance | Data | Minor | 1 | [who] |
| 12 | Multiple Languages (i18n) | Accessibility | Minor | 1 | [who] |
| | **Total** | | | **17** | |

### Module Details

#### 1. Frontend + Backend Framework (Major — 2 pts)
**Justification:** [describe framework choices and how both frontend and backend capabilities are used]
**Implementation:** [brief technical description]

[Repeat for each module...]

---

## Individual Contributions

### login1 — [Name]
- **Role:** [PO / PM / Tech Lead / Developer]
- **Contributions:**
  - [List specific features, modules, components]
- **Challenges:** [What was difficult and how it was solved]

[Repeat for each team member...]

---

## Resources

### Documentation & References
- [React Documentation](https://react.dev/)
- [CoinGecko API Documentation](https://docs.coingecko.com/)
- [Socket.IO Documentation](https://socket.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### AI Usage
[Describe how AI was used in the project — which tasks, which parts, how it was reviewed]

---

## Known Limitations
- [List any known issues or limitations]

## License
[If applicable]
