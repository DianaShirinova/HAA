# HAA website — design preview

This is a static 7-page mockup: `index.html`, `events.html`, `apply.html`,
`gallery.html`, `directory.html`, `faq.html`, `contact.html`, sharing
`css/style.css` and `js/main.js`.

All content (events, fees, artist names, deadlines) is **placeholder** —
swap in HAA's real dates, fees, and photos once ready.

## What's already in place
- Responsive layout with a mobile nav menu (down to ~360px)
- Unified events timeline on `events.html` with type filtering (Market /
  Pop-up / Member meeting)
- Apply page with eligibility, a fees table, a deadlines table, and a
  process outline
- Artist/vendor directory with craft-category filtering
- Gallery grid (placeholder color tiles — drop in real photos)
- FAQ accordion (native `<details>`, no JS needed)
- Contact and application forms (front-end only for now)

## What needs a real backend or account to go live
- **Forms**: both forms currently just show a confirmation message on
  submit. Point them at a service like Formspree, Google Forms, or a
  custom backend to actually receive submissions.
- **Online payment**: booth fees aren't collected on-site yet. Stripe
  Checkout or Payment Links, or Square, are the simplest way to add this
  once fee amounts are final.
- **Calendar sync**: the "Add to Google Calendar" / "Subscribe (iCal)"
  buttons on `events.html` are placeholders — wire them to a real
  Google Calendar or a generated `.ics` feed once the calendar is
  authoritative somewhere (e.g. a shared Google Calendar).
- **Eventbrite**: the "See tickets on Eventbrite" link is a placeholder
  — point it at HAA's real Eventbrite org page or embed their widget.
- **Instagram/Facebook feed**: social icons link out to the existing
  profiles; if you want live post embeds on the homepage, that needs
  either the Instagram Basic Display API or a plugin/embed service
  (e.g. SnapWidget, Elfsight).
- **SEO**: titles, meta descriptions, and semantic headings are set on
  every page. Still to add before launch: a real domain, a
  `sitemap.xml`, Google Search Console verification, and submitting the
  sitemap — plus real alt text once photos replace the placeholder tiles.
- **Hosting**: this is plain static HTML/CSS/JS — it will run as-is on
  GitHub Pages, Netlify, or Vercel with no build step.
