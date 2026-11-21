# HOMELY AI — Homepage starter

A responsive Next.js homepage concept inspired by Ethiopian modern heritage: warm cream, forest green, terracotta, gold, woven-pattern accents, local furniture and professional services.

## Run locally

1. Install Node.js 20.9+.
2. Open this folder in Cursor or VS Code.
3. In the terminal run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## What's included

- Responsive landing page and mobile navigation
- AI room photo upload UI (selecting a photo updates the panel)
- Design style gallery
- Furniture marketplace preview with ETB sample prices
- Vendor marketplace with verified local shops, searchable products, vendor ratings and reviews
- Dedicated vendor storefronts and product detail pages with inquiry forms
- Vendor dashboard, vendor application demo and admin verification console
- Local professional cards
- Premium call-to-action and footer

## Important before launch

This is a frontend starter/demo. The vendor directory and product catalogue are sample data; vendor applications, dashboard changes, inquiry forms, ratings/reviews and admin verification actions are interactive demos and are not persisted or sent to a backend. AI generation, database, authentication, payments, real product feeds, booking, messaging and review verification are not connected yet. Replace sample prices and profiles with verified listings before launch. Image URLs currently use Unsplash and require internet access. Connect Supabase and your chosen image-generation API in the next phase.

## Vendor marketplace demo routes

- `/vendors` — searchable product listings and the verified vendor directory
- `/vendors/{vendor-slug}` — public vendor storefront, ratings, reviews and inquiry form
- `/vendors/{vendor-slug}/products/{product-id}` — individual product and vendor details
- `/vendor/register` — vendor application form
- `/vendor/dashboard` — sample private vendor workspace
- `/admin/vendors` — sample vendor verification console

## Suggested next steps

1. Create Supabase tables and authentication.
2. Upload room photos to private Supabase Storage.
3. Add a server-side AI generation endpoint and background job handling.
4. Replace sample furniture and professionals with real, verified Ethiopian listings.
5. Enforce premium downloads and subscription permissions on the server.
