# video.surf

video.surf is a responsive surf-capture marketplace for finding, selecting, and booking photos and videos from Bali surf spots.

**Developer:** Afaq Ahmad

## Routes

- `/` — Explore the Bali surf map, search spots, select markers, and open a spot.
- `/spot` — Browse dated captures, select waves, review pricing, and book a private session.
- `/studio` — Manage photographer sessions, capture counts, sales, and availability.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
```

The app uses Vite with TanStack Router, React, TypeScript, Tailwind CSS, and shadcn/ui primitives.

## Design system

The visual system pairs a warm sand background with deep ocean blue, coral accents, rounded cards, and a serif display face for editorial surf storytelling. Nunito Sans handles interface copy; Lora handles headings. Shared navigation, focus states, safe-area spacing, and reduced-motion behavior live in `src/components/site-shell.tsx` and `src/styles.css`.

## Responsive behavior

All three routes are mobile-first and tested around compact phone widths and spacious desktop layouts. Desktop navigation collapses into a bottom navigation bar on phones, capture grids reflow from two to four columns, and booking/actions remain reachable without obscuring content.

## Assets

Surf photography and the illustrated map are bundled in `src/assets`. They are used locally so the preview and production build do not depend on external image hosts.

© 2026 video.surf. Built by Afaq Ahmad.
