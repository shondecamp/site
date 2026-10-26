# shondecamp.com

Portfolio site for Shon DeCamp, built with [Astro](https://astro.build) and published free on GitHub Pages at **https://shondecamp.com**.

## How it works

Astro turns the files in this repo into plain HTML and CSS. A GitHub Action (`.github/workflows/deploy.yml`) builds the site on every push to `main` and publishes it, usually within a minute or two. Pull requests are built too, so a broken change shows a red check before it can go live.

## Where things live

| What | Where |
| --- | --- |
| Page text and markup | `src/page-bodies/*.html` (one file per page, plain HTML) |
| Page title, CSS and fonts for a page | `src/pages/*.astro` |
| Shared `<head>` (meta tags, social previews, canonical URL) | `src/layouts/BaseLayout.astro` |
| Page styles | `src/styles/pages/*.css` |
| Images, PDFs, fonts and other files served as-is | `public/` (a file at `public/Resume.pdf` is served at `/Resume.pdf`) |
| Custom domain | `public/CNAME` and repo **Settings → Pages** |

Every page keeps its original URL, for example `/CareNotes.html` and `/Design System.html`.

## Editing in the browser (no setup)

1. Open the file on github.com and click the pencil icon.
2. Make your change and commit it to `main` (or to a branch and open a pull request).
3. Watch the **Actions** tab. When the run turns green, the change is live.

To add an image or PDF, open the `public/` folder and use **Add file → Upload files**.

## Editing on your computer (optional)

Requires Node.js 22 or newer.

```sh
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```
