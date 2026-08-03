# Lime Tree Hotels — HTML/CSS Website Template

Plain HTML and CSS, no Next.js, no React, no build step. Open `index.html` directly in a browser, or serve the folder with any static file server. All images are bundled locally under `images/` — nothing depends on an external CDN, so there's nothing to 404.

## Every page

- Homepage — `index.html`
- All Hotels (listing) — `hotels.html`
- Serviced Apartments (listing, grouped by BHK) — `serviced-apartments.html`
- Property Detail (example) — `property-detail.html`
- Destinations (listing) — `destinations.html`
- Destination Detail — Gurgaon (example) — `destination-gurgaon.html`
- Blog (listing) — `blog.html`
- Blog Post (example) — `blog-post.html`
- FAQ — `faq.html`
- Offers & Deals — `offers.html`
- Corporate Bookings — `corporate.html`
- Medical Tourism — `medical-tourism.html`
- Restaurant — `restaurant.html`
- Banquet Halls — `banquet.html`
- Gallery — `gallery.html`
- Awards — `awards.html`
- Careers — `careers.html`
- Holiday Packages — `holiday-packages.html`
- Partner With Us — `partner-with-us.html`
- About Us — `about.html`
- Contact Us — `contact.html`
- Privacy Policy — `privacy.html`
- Terms & Conditions — `terms.html`
- Sitemap (links to every page above) — `sitemap.html`
- Design System Guide (colors, type, components) — `design-system-guide.html`

Every page shares the same navbar and footer, with working links between all of them (the nav's "Properties"/"Destinations"/"More" items open real dropdown menus on hover — pure CSS, no JS required). The mobile hamburger menu uses one inline `onclick` per page to toggle the menu open/closed.

## Folder structure

```text
html-css-template/
├── index.html, hotels.html, ... (25 pages total)
├── favicon.ico
├── images/                    Real property photos, organized by property slug
└── css/
    ├── variables.css          Shared tokens + base components (buttons, badges, FAQ accordion) — load first on every page
    ├── site.css               Shared nav/footer/hero/section/card patterns — used by every page except property-detail.html
    └── property-page.css      Property-detail-only styles (gallery, tabs, booking sidebar) — used alongside site.css
```

## Notes

- Both Google Fonts (Playfair Display, Plus Jakarta Sans) load via `<link>` in the `<head>` — remove those tags for a fully offline copy and swap in local `@font-face` declarations instead.
- To add another page in the same style: link `variables.css` then `site.css`, copy the navbar/footer markup from any existing page, and reuse the `.section`, `.card`, `.grid-3` etc. classes already defined in `site.css` — never duplicate a rule that's already there.
- `property-detail.html` is the one page that doesn't use `site.css`'s generic `.card`/`.section` patterns (it has its own tabbed layout) — it loads `property-page.css` instead, which itself no longer duplicates the shared navbar/footer rules.
