# Kusum Communications — React + Vite Frontend

Complete editable React frontend with six pages, local images, gallery lightboxes, contact email drafts, original design CSS, and browser animation libraries.

## Requirements

- Node.js 20.19+ or 22.12+ (Node 22 LTS recommended)
- npm

## Start

Open a terminal in this project folder:

```sh
npm install
npm run dev
```

Open the localhost address printed by Vite. To reproduce the locked dependency versions exactly, use `npm ci` instead of `npm install`.

## Build and preview

```sh
npm run build
npm run preview
```

The production build is in `dist/`. A prebuilt `dist/` is included in this ZIP. You can upload its contents immediately, or rebuild after editing the source.

## Pages

| Page | URL | React component |
| --- | --- | --- |
| Home | `/` | `src/pages/Home.jsx` |
| About | `/about/` | `src/pages/About.jsx` |
| Services | `/services/` | `src/pages/Services.jsx` |
| Gallery | `/our-gallery/` | `src/pages/Gallery.jsx` |
| Story | `/2026/09/06/kusum-communications-story/` | `src/pages/Story.jsx` |
| Contact | `/contact/` | `src/pages/Contact.jsx` |

## Source structure

- `src/App.jsx`: page selection and theme initialization.
- `src/main.jsx`: React entry point and page metadata.
- `src/components/SiteHeader.jsx`: shared header with Home and inner-page variants.
- `src/components/SiteFooter.jsx`: shared footer.
- `src/components/PhotoGallery.jsx`: React gallery and accessible photo dialog. Supports next/previous, keyboard arrows, and Escape.
- `src/components/ContactForm.jsx`: React form with required fields and email draft creation.
- `src/data/galleries.json`: editable gallery image lists. The Gallery page includes 166 photos.
- `src/data/pages.json`: page metadata and original browser script lists.
- `src/themeRuntime.js`: loads the original frontend theme scripts after React renders, preserving the reference sliders and effects.
- `public/app.css`, `public/recreation.css`, `public/gallery.css`: custom styling.
- `public/wp-content/`, `public/wp-includes/`: local images, original CSS, fonts, and browser JavaScript libraries. These are static files; WordPress is not installed or required.
- `vite.config.js`: six HTML entries for production routes.

The pages render from JSX, not embedded screenshots, iframes of the website, or raw HTML injection. Navigation uses normal links and each URL starts its React page independently. This keeps the reference browser animation scripts isolated per page and supports direct links on static hosting.

## Frontend behavior

No backend, database, server functions, environment variables, or private API keys are required.

The Contact form opens the visitor's email app with an enquiry draft addressed to `kusumcommunications@gmail.com`. The visitor must send the draft. It does not silently send mail, save enquiries, or claim successful delivery. A direct sending service can be connected later.

Vimeo videos need internet access. Google Fonts, some optional theme runtime chunks, social links, and media coverage links also use external services or the original reference website. This is not a fully offline package. The original frontend theme libraries, including jQuery and Elementor browser assets, are retained for visual compatibility alongside React components.

## Upload to Hostinger

1. Run `npm run build` after source changes.
2. Back up the existing website in your domain's `public_html`.
3. Upload the CONTENTS of `dist/` directly into `public_html`.
4. Keep all page folders and asset paths intact.
5. Open the domain and test the six menu destinations, gallery, videos, and contact draft.

This export expects to be served at the domain root. Do not double-click `index.html` to preview it; use Vite or an HTTP server.

## Deploy to Vercel / Netlify

- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output folder: `dist`
- Environment variables: none

## Verification

`npm run build` creates all six route entries. `npm run check:render` checks that every page renders through React, verifies the shared header/footer, and verifies the gallery count and contact form. Browser-based pixel matching and every animation have not been verified in this session.

The ZIP excludes `node_modules`, Git history, deployment credentials, and account configuration. Install dependencies locally with npm.
