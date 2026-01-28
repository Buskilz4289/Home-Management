# Deploy to GitHub Pages

## Fix 404 (main.jsx, favicon, manifest)

1. **GitHub Pages must serve the built app, not the source.**

   In your repo: **Settings → Pages**

   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
   - If you use "Deploy from a branch", GitHub serves the repo files. Then the browser loads `index.html` with `<script src="/src/main.jsx">`, which returns 404 because that file is not in the deployed output.

2. **Deploy the built output**

   - Push to `main` (or run the workflow manually). The `.github/workflows/deploy.yml` workflow will:
     - Run `npm run build`
     - Upload the `dist` folder as the Pages artifact
   - After the workflow finishes, the site at https://buskilz4289.github.io/Home-Management/ will serve the **contents of dist** (index.html, assets/, favicon.svg, manifest.webmanifest).

3. **base in vite.config.js**

   - `base: '/Home-Management/'` is set so all JS/CSS URLs are absolute: `/Home-Management/assets/...`. That way they load correctly on GitHub Pages.

## Summary

- **Source**: GitHub Actions (so the workflow deploys `dist`).
- **Do not** use "Deploy from a branch" with the main branch unless that branch contains only the contents of `dist` (e.g. a dedicated `gh-pages` branch that you update with `dist` contents).
