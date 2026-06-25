# Ricardo Calçado — CV Website

Personal CV / portfolio site built with **React + Vite + Tailwind CSS**.

## Editing your content

Everything the site renders lives in one file: **`src/data/cv.js`**.
Open it and update the marked sections — especially the ones tagged
`⚠️ PLACEHOLDER` (experience, education, certifications), which currently
contain sample data and should be replaced with your real LinkedIn details.

Skills and projects are already filled in from your GitHub profile.

## Local development

```bash
npm install
npm run dev        # start dev server (http://localhost:5173/cv-website/)
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

## Deploying to GitHub Pages

1. Create a GitHub repo named **`cv-website`** (the `base` in `vite.config.js`
   and `homepage` in `package.json` assume this name — change both if you use
   a different name).
2. Push this project to the `main` branch.
3. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   select **GitHub Actions**.
4. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
   and publishes the site to `https://paparuco.github.io/cv-website/`.

> Want it at `paparuco.github.io` (root) instead? Name the repo
> `paparuco.github.io`, set `base: '/'` in `vite.config.js`, and update
> `homepage` in `package.json`.

## Optional: add a PDF résumé

Drop a PDF into `public/`, then set `resumeUrl` in `src/data/cv.js`
(e.g. `'/cv-website/Ricardo-Calcado-CV.pdf'`).
