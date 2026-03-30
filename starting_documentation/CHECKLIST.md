# Pre-Submission Checklist

> Go through this before submitting. Every unchecked box is a potential fail.

---

## General Requirements (project rejected if any fail)

- [ ] Project is a web app with frontend, backend, and database
- [ ] `docker compose up` (or equivalent single command) starts everything
- [ ] Works on latest stable Google Chrome
- [ ] No warnings or errors in browser console
- [ ] Privacy Policy page exists with real content, accessible from app
- [ ] Terms of Service page exists with real content, accessible from app
- [ ] Multiple users can be logged in and active simultaneously
- [ ] Concurrent actions don't cause data corruption or race conditions
- [ ] Real-time updates reflect across all connected users

## Git Requirements

- [ ] All team members have commits in the repo
- [ ] Commit messages are clear and descriptive
- [ ] Work distribution is visible across the team
- [ ] `.env` is gitignored
- [ ] `.env.example` exists with all required variables (no real secrets)

## Technical Requirements

- [ ] Frontend is responsive (mobile, tablet, desktop)
- [ ] CSS framework is used (Tailwind)
- [ ] Database has clear schema with well-defined relations
- [ ] User signup works (email + password)
- [ ] Passwords are hashed and salted (bcrypt)
- [ ] All forms validate input on frontend AND backend
- [ ] HTTPS is used everywhere (backend)

## Module Verification (demo each one)

### Major Modules (2 pts each)
- [ ] **Frontend + Backend Framework**: React frontend and NestJS backend both in use
- [ ] **Real-time WebSocket**: Live price updates visible, connection handles disconnect/reconnect
- [ ] **User Interaction**: Chat works between 2 users, profiles viewable, friends add/remove works
- [ ] **Standard User Management**: Profile update, avatar upload, friends with online status, profile page
- [ ] **Analytics Dashboard**: Charts render, date filters work, CSV and PDF export work

### Minor Modules (1 pt each)
- [ ] **ORM**: Prisma is used for all database access, no raw SQL
- [ ] **Notifications**: Bell icon shows notifications, new events trigger them, mark-as-read works
- [ ] **Advanced Search**: Search assets by name, filter by type, sort by columns, pagination works
- [ ] **OAuth 2.0**: Can sign in with Google/GitHub/42
- [ ] **2FA**: Can enable 2FA, scan QR, login requires code when enabled
- [ ] **GDPR**: Can download all personal data, can delete account
- [ ] **i18n**: 3 languages available, all text translates, language switcher works

## README Requirements

- [ ] First line is italicized with team logins
- [ ] Description section with project name and key features
- [ ] Instructions section with prerequisites and step-by-step setup
- [ ] Resources section with references and AI usage description
- [ ] Team Information with roles and responsibilities
- [ ] Project Management description
- [ ] Technical Stack with justifications
- [ ] Database Schema (visual or described)
- [ ] Features List with who built what
- [ ] Modules list with point calculation and justifications
- [ ] Individual Contributions for each team member
- [ ] Written in English

## Evaluation Prep

- [ ] Every team member can explain the full project architecture
- [ ] Every team member can explain their specific contributions
- [ ] Every team member can explain at least 1 module they didn't build
- [ ] Test accounts are seeded for evaluators
- [ ] Demo flow is rehearsed (registration → trading → chat → leaderboard → modules)
- [ ] Prepared for live code modification during evaluation
