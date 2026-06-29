# Casper Incident Management

React frontend prototype for the Enterprise Incident Management MVP.

## Run locally

```powershell
npm run dev
```

Then open:

```text
http://localhost:5173
```

This project is intentionally self-contained for quick review in this workspace. React, ReactDOM, and Babel are vendored in `public/vendor`.

## Source structure

```text
src/
├── pages/            route-level wrappers only
├── features/         domain slices: incidents, dashboard, reports, admin, users
├── shared/           reusable components, layouts, constants, utils
├── core/             app state controller, router, auth, mock API
├── App.jsx           root composition only
└── index.css         global visual system
```

`src/App.jsx` is intentionally small now. Most functionality lives in feature folders, while reusable UI lives under `src/shared`.

## Included screens

- Login and registration
- Dashboard with KPIs, SLA summary, priority/status charts, recent incidents, and Casper assist hints
- Incident list with search and filters
- New incident intake form
- Incident detail with lifecycle status workflow, assignment, SLA tracking, comments, attachments, and audit log
- Incident edit form
- Users and user detail
- Admin categories
- Admin priorities and SLA policy
- Admin teams
- Reports for SLA breaches, category trends, and team performance
- Profile and notification preferences
- Light, dark, and system theme mode across the whole app
