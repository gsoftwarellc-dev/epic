# Epic Bouncers Frontend

React + Vite + TypeScript frontend for Epic Bouncers rental booking.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Backend Connection Point

Mock data currently lives in `src/mocks`. The frontend calls API functions in `src/api`, which can be changed later to call Laravel REST endpoints through `src/api/client.ts`.

Expected future endpoints:

```txt
GET /api/products
GET /api/products/:slug
GET /api/products/:id/availability?date=YYYY-MM-DD
POST /api/bookings
POST /api/bookings/:id/create-checkout-session
```
