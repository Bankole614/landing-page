# Formula Apex — Portfolio Landing Page

This folder contains the marketing and portfolio showcase landing page for **Formula Apex**. Tailwind CSS is compiled ahead of time; the deployed page does not load Tailwind's Play CDN or need Node.js at runtime.

## Contents

- `index.html`: Landing page markup, embedded SVG icons, and inline SVG favicon.
- `src/input.css`: Tailwind entry point and custom animations/styles.
- `tailwind.config.js`: Tailwind theme and HTML content scan configuration.
- `styles.css`: Generated, minified stylesheet loaded by the page.

## Build

Install the build dependency and generate the production stylesheet:

```sh
npm install
npm run build
```

For local preview, open `index.html` after building or serve this folder with any static file server. Node.js is needed only to install dependencies and build, not to host the site.

## Deploy

Deploy `index.html`, `styles.css`, and `Formula_Apex_Case_Study.pdf` together to any static host, including GitHub Pages, Netlify, Vercel, or Cloudflare Pages. Run `npm run build` as the host's build command when building from source; the publish directory is this folder. If deploying without a build step, include the already-generated `styles.css`.

The "Play game" buttons currently link to `https://apex.bankole.xyz`; update those links in `index.html` if the game URL changes.
