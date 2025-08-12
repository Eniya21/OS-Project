## Campus Connect (Students & Alumni Platform)

Monorepo with React (Vite) client and Express/TypeScript server with MongoDB.

### Quick start

1. Install deps

```bash
npm --prefix apps/server i
npm --prefix apps/client i
```

2. Set environment

- Server: `apps/server/.env` (already created)
  - `MONGO_URI` – set to your MongoDB Atlas URI if you don't have local Mongo
  - `PORT` – default `4000`
  - `JWT_SECRET` – change for production
- Client: `apps/client/.env` contains `VITE_API_URL` (defaults to `http://localhost:4000`)

3. Build and run server

```bash
npm run build:server
npm run start:server
# Health: http://localhost:4000/api/health
```

4. Run client (Dev)

```bash
npm run dev:client
# Vite dev (default): http://localhost:5173
```

### APIs scaffolded (base `/api`)
- `GET /health`
- Auth: `POST /auth/register`, `POST /auth/login`
- Profile: `GET /profile/me`, `PUT /profile/me`
- Jobs: `POST /jobs` (alumni/admin), `GET /jobs`
- Mentorships: `POST /mentorships` (alumni/admin), `GET /mentorships`
- Events: `POST /events`, `GET /events`, `POST /events/:id/rsvp`
- Discussions: `POST /discussions`, `GET /discussions`
- Stories: `POST /stories` (alumni/admin), `GET /stories`
- Challenges: `POST /challenges` (alumni/admin), `GET /challenges`

### Tech
- Frontend: React + Vite + TS
- Backend: Node + Express + TS + Socket.IO
- DB: MongoDB (Mongoose)
- Validation: Zod
- Auth: JWT

### Notes
- Docker is not available here; use MongoDB Atlas and set `MONGO_URI` accordingly.
- CORS is open (`CORS_ORIGIN=*`) for development only.
