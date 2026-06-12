# bllakcn-website

Personal portfolio site for [Ahmet Bilal Akcan](https://github.com/bllakcn), built with **TanStack Start** and deployed to Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm deploy` | Build and deploy to Cloudflare Workers |
| `pnpm generate-routes` | Regenerate TanStack Router route tree |
| `pnpm lint` | Run Biome checks |

## Stack

- TanStack Start + Router (file-based routes in `src/routes/`)
- Cloudflare Workers (`wrangler.jsonc`)
- Tailwind CSS v4
- content-collections + MDX (`content/`)

See [`AGENTS.md`](./AGENTS.md) for agent-oriented project context, environment variables, and architecture notes.
