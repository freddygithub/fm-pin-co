# F&M Pin Co.

Phase 1 is a static one-page marketing site. The project is intentionally structured so phase 2 can add a PostgreSQL catalog, Stripe Checkout, order webhooks, and an admin workflow without changing frameworks.

## Local development

```bash
npm install
npm run dev
```

Edit business text, email, social profile, and storefront links in `src/content/site.ts`.

## Roadmap

- Phase 1: Next.js, TypeScript, Tailwind CSS, static export, Vercel deployment
- Phase 2: PostgreSQL (Neon), Drizzle ORM, Stripe-hosted Checkout, server-side webhooks

For phase 2, remove `output: "export"` from `next.config.ts` before adding server routes.
