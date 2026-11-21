# Studio Point Zero

An editorial portfolio for an Ahmedabad interior design and turnkey solutions studio. Built with Next.js App Router, TypeScript, Tailwind CSS and Motion for React.

## Local development

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Next.js. Run `pnpm lint`, `pnpm typecheck` and `pnpm build` to check changes.

## Content and contact setup

Presentation imagery is stored locally as WebP files in `public/demo`. The source, photographer, license and intended placement of each file are recorded in `public/demo/sources.json`. The set uses the Pexels and Unsplash licenses. The website's shared footer carries the demonstration notice.

- `lib/studio.ts` holds the studio information, draft service descriptions and turnkey process. Review the About and Home copy against the official business document when available.
- `lib/demo-images.ts` maps descriptive image names to the files in `public/demo`. Update this map or replace its files when approved studio photography arrives.
- `lib/projects.ts` holds conceptual portfolio collections. The images within each collection are independent references. Each collection requires a cover image. Add approved project copy, photos and alt text, then set `conceptual` to `false` for verified studio projects. Supply `comparison` only for a matching before-and-after pair. Previous prototype detail URLs redirect to the current concept collections.
- Copy `.env.example` to `.env.local` when the official phone, email, WhatsApp number and map URL are available. Without a studio map URL, the Contact page links to Ahmedabad on Google Maps.
- The enquiry server action validates input and reports that delivery is unavailable. Connect and test an approved provider before enabling enquiries.
- Set `SITE_URL` to the canonical origin when preparing for launch. Until then, the sitemap is empty and robots rules discourage indexing. Concept collection detail pages carry a `noindex` directive.
