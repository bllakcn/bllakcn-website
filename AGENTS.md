<!-- intent-skills:start -->
## Skill Loading

Before substantial work:
- Skill check: run `pnpm dlx @tanstack/intent@latest list`, or use skills already listed in context.
- Skill guidance: if one local skill clearly matches the task, run `pnpm dlx @tanstack/intent@latest load <package>#<skill>` and follow the returned `SKILL.md`.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

# bllakcn-website

Personal portfolio site on TanStack Start, deployed to Cloudflare Workers. Migrated from Next.js App Router (June 2026).

## Stack and integrations

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start (React) |
| Routing | TanStack Router (file-based `src/routes/`) |
| Deployment | Cloudflare Workers (`wrangler.jsonc`, `@cloudflare/vite-plugin`) |
| Styling | Tailwind CSS v4 (`src/styles.css`) |
| Content | content-collections + MDX (`content/`, `content-collections.ts`) |

## TanStack Intent

```bash
pnpx @tanstack/intent@latest install
pnpx @tanstack/intent@latest list
```

Intent created the skill-loading block at the top of this file. Run `list` before architectural changes; load package skills instead of guessing patterns.

## Environment variables

See `.env.example`. Local dev loads `.env.local` via the `dev` script (`dotenv-cli`).

## Scripts

```bash
pnpm install          # use .npmrc ignore-workspace=true if parent pnpm workspace interferes
pnpm dev              # http://localhost:3000
pnpm generate-routes  # tsr generate (scoped via tsr.config.json)
pnpm generate-cv      # rebuild public/cv.pdf + public/cv.nl.pdf from CV data
pnpm build
pnpm deploy           # Cloudflare Workers
```

## Routes

| Path | File |
| --- | --- |
| `/` | `src/routes/index.tsx` |
| `/blog` | `src/routes/blog/index.tsx` |
| `/blog/$slug` | `src/routes/blog/$slug.tsx` |
| `/resume` | `src/routes/resume.tsx` |
| `/elements` | `src/routes/elements.tsx` |

404 handling lives in `notFoundComponent` on `src/routes/__root.tsx`.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/routes/` | File-based routes |
| `src/components/site/` | Layout shell (Navbar, Footer, About, Resume) |
| `src/components/blog/` | Blog list and post display |
| `src/components/ui/` | shadcn-style primitives |
| `content/` | MDX blog posts |
| `public/` | Static assets |

## Architectural decisions

1. **content-collections** — MDX pipeline via `@content-collections/vite`.
2. **Fonts** — `@fontsource-variable/outfit` instead of `next/font`.
3. **Images** — Native `<img>` with public paths instead of `next/image`.
4. **Links** — `@tanstack/react-router` `Link` (`to` prop).
5. **pnpm** — `.npmrc` sets `ignore-workspace=true` because a parent `~/pnpm-workspace.yaml` otherwise skips local `node_modules`.

## Known gotchas

- **`tsr generate` OOM** — Ensure `tsr.config.json` scopes `routesDirectory` to `./src/routes` only.
- **Vercel Analytics / Speed Insights** — Not included (Cloudflare deployment target). Add Cloudflare Web Analytics if needed.
- **Intent `list` in merged repo** — May report "No intent-enabled packages found" until dependencies are installed with `pnpm install --ignore-workspace`.

## Deployment

```bash
pnpm build
pnpm deploy
```

Configure Cloudflare account and secrets via Wrangler before first production deploy.
