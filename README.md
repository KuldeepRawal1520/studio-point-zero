# Studio Point Zero

An editorial portfolio for an Ahmedabad interior design and turnkey solutions studio. Built with Next.js App Router, TypeScript, Tailwind CSS and Motion for React.

## Local development

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Next.js. Run `pnpm lint`, `pnpm typecheck` and `pnpm build` to check changes.

## Content and contact setup

Concept image sources are retained here for reference. Interior photographs by Dmitry Zvolskiy (Pexels photo 28576394) and Nihar Manyalli (37872783), timber texture by Natalia Sevruk (36081877), and fabric texture by Artem Podrez (7232409) are used under the Pexels license at https://www.pexels.com/license/. These are illustrative references.

- `lib/studio.ts` holds the studio information, draft service descriptions and turnkey process. Review the About and Home copy against the official business document when available.
- `lib/projects.ts` holds the portfolio entries. Replace placeholder slugs and copy, add approved photos under `public/projects`, give each image descriptive alt text and set `placeholder` to `false` for approved entries. Supply `comparison` only for a matching before-and-after pair.
- Copy `.env.example` to `.env.local` when the official phone, email, WhatsApp number and map URL are available. Without a studio map URL, the Contact page links to Ahmedabad on Google Maps.
- The enquiry server action validates input and reports that delivery is unavailable. Connect and test an approved provider before enabling enquiries.
- Set `SITE_URL` to the canonical origin when preparing for launch. Until then, the sitemap is empty and robots rules discourage indexing. Placeholder detail pages carry a `noindex` directive.
