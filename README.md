# Portfolio — Ramatenki Srinivasa Rao

Personal portfolio site built with React (Vite). Single-page, no routing, no
backend — all content lives in [`src/data.js`](./src/data.js), so updating a
project, skill, or link means editing one file.

## Run locally

```bash
npm install
npm run dev
```

## Editing content

Everything displayed on the site comes from `src/data.js`:
- `profile` — name, title, links, summary
- `skills` — grouped skill tags
- `projects` — each project's description, highlights, tech tags, and links
- `education`

Design tokens (colors, fonts) are in `src/theme.js`.

## Adding a project

Add an object to the `projects` array in `src/data.js`. Set `demo: null` if
there's no live demo (the "Live Demo" button hides automatically).

## Deploy

Deploys to Netlify as a static site:
- **Build command:** `npm run build`
- **Publish directory:** `dist`