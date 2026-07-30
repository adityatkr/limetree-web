# Lime Tree Hotels — HTML/CSS Design Template

Plain HTML and CSS, no Next.js, no React, no build step. Open either `.html` file directly in a browser, or serve the folder with any static file server.

## Contents

```
html-css-template/
├── index.html                 Property page template (gallery, tabs, booking sidebar, FAQ, footer)
├── design-system-guide.html   Full design-system reference (colors, type, components)
└── css/
    ├── variables.css          Shared tokens + base styles — load this first on any page
    ├── property-page.css      Styles specific to index.html
    └── design-guide.css       Styles specific to design-system-guide.html
```

## Using this elsewhere

Both pages load two Google Fonts (Playfair Display, Plus Jakarta Sans) via `<link>` in the `<head>` — remove those tags if you need a fully offline copy and swap in local `@font-face` declarations instead.

All images are referenced from the live `assets.simplotel.com` CDN. Point them at your own hosting if you copy this template into another project.

To build a third page in the same style, link `css/variables.css` first, then either reuse `property-page.css` or write a new page-specific stylesheet the same way — never duplicate a rule that's already in `variables.css`.
