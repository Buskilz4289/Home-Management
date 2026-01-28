# Home Management

React 18 + Vite + Firebase + Tailwind, PWA-ready. Username/password auth (Firestore users), tasks per home, recurring logic, history, device tokens, backup export.

## Setup

1. **Install**

   ```bash
   npm install
   ```

2. **Firebase**

   - Create a project in [Firebase Console](https://console.firebase.google.com).
   - Enable Anonymous Authentication and Firestore.
   - Copy `apiKey`, `authDomain`, `projectId` into `.env` (see `.env.example`).

3. **Seed default admin (optional)**

   From your app or a one-off script, call:

   ```js
   import { createDefaultAdmin } from './src/lib/admin.js';
   await createDefaultAdmin();
   ```

   Then sign in with username `Admin`, password `Admin`.

## Run

- Dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

Routes use **HashRouter** so the app works with static hosting and PWA. Base is `./` for correct asset paths.

## Structure

- `src/lib/` — Firebase, auth, tasks, recurring, history, notifications, backup, admin.
- `src/context/UserContext.jsx` — Current user (sessionStorage).
- `src/pages/` — Login, Dashboard (task list + complete).
- PWA: `vite-plugin-pwa` in `vite.config.js` (manifest + service worker).

## Notes

- Passwords are stored in Firestore in plain text in this demo; hash them in production.
- Tasks are scoped by `homeId`; users need a `homeId` to see tasks and use Export.
