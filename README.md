# Formula Apex — Standalone Portfolio Landing Page

This folder contains the complete, standalone marketing and portfolio showcase landing page for **Formula Apex**.

## Contents

- `index.html`: The fully self-contained landing page (zero build step, no npm/node dependencies, responsive glassmorphic styling, embedded SVG icons, inline SVG favicon).

## How to Move or Deploy Standalone

You can move this entire `landing-page` folder anywhere on your computer or into a separate repository:

### 1. Run Locally
Simply double-click `index.html` to open it in any web browser.

### 2. Deploy to Vercel / Netlify / Cloudflare Pages / GitHub Pages
- **GitHub Pages:** Create a repository with this folder's contents and enable GitHub Pages under **Settings > Pages > Deploy from a branch (`main`)**.
- **Netlify / Vercel:** Drag and drop this folder onto Netlify Drop (`app.netlify.com/drop`) or run `npx vercel` inside this folder.

### 3. Configure the "Play Game" Link
In `index.html`, search for `../index.html` and replace it with your hosted game URL (e.g., `https://formula-apex.vercel.app` or your domain).

