# PORTFOLIO

**Aditya Jha — personal portfolio, built like a physical document.**

A neobrutalist, editorial portfolio for a second-year CS student and SDE intern who treats code like craft. No gradients, no soft shadows, no template defaults — just ink, structure, and intent. Every design decision here is traceable to a reason; nothing is decorative by default.

```
████████████████████████████████████████
█  Portfolio                            █
█                                       █
█  status: actively maintained          █
████████████████████████████████████████
```

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Key Features](#key-features)
5. [Page-by-Page Breakdown](#page-by-page-breakdown)
6. [Component Library](#component-library)
7. [Tech Stack](#tech-stack)
8. [Project Structure](#project-structure)
9. [Setup](#setup)
10. [Environment Variables](#environment-variables)
11. [Performance & Security](#performance--security)
12. [Accessibility](#accessibility)
13. [Roadmap](#roadmap)
14. [Links](#links)
15. [Closing Note](#closing-note)

---

## Design Philosophy

This portfolio is built on the idea that a portfolio should read like a printed, hand-made document rather than a generated one. The reference points are zines, stamped paperwork, annotated manuscripts, and print layout grids — not SaaS landing pages.

- **Neobrutalist & editorial.** Hard black borders, sharp corners (zero border-radius everywhere, no exceptions), heavy hard shadows (`8px 8px 0 black`), and a strict 8px spacing grid underneath all of it.
- **Color carries meaning.** The default state is bone (warm off-white) + ink (black). Accent colors are assigned only when content earns them — a section doesn't get a color because it needs one, it gets a color because that color says something specific about what's inside.
- **Hover states translate, they don't recolor.** Elements shift position (`translate(-4px, -4px)`) and shadow weight on hover, simulating a card lifting off the page. The one deliberate exception is tags, which earn a temporary yellow shadow on hover as a "highlighted with a marker" signal.
- **A cursor with a point of view.** A custom fountain-pen nib cursor leaves a fading ink trail across interactive elements, reinforcing the "this is a written document" conceit rather than a generic pointer.
- **Hand-made signals, deliberately placed.** `//hand-made` in the footer, a slightly rotated auth stamp on credentials, highlighter hover effects on key phrases, margin notes alongside body copy, and a Konami code Easter egg for anyone who goes looking.
- **Anti-template by construction.** No component is pulled from a UI kit unmodified. Every card, button, and tag variant was built specifically for this system's shadow, border, and color rules — there is no Tailwind UI or shadcn default left untouched.
- **Restraint as a feature.** Nine accent colors exist in the palette, but no single page uses more than two or three at once. Color discipline is treated as part of the design system, not an afterthought.

---

## Color System

| Token       | Hex       | Role                                               |
| ----------- | --------- | -------------------------------------------------- |
| `--bone`    | `#F5F0E8` | Page ground                                        |
| `--ink`     | `#0D0D0D` | Structure, text, borders, shadows                  |
| `--strike`  | `#E8C547` | Full-Stack / Tools projects, priority signals      |
| `--fault`   | `#D94F3D` | Standout tags, red moments, emphasis               |
| `--teal`    | `#2E6B5E` | ML / AI projects                                   |
| `--purple`  | `#7B4FD4` | Experience section, deep systems                   |
| `--coral`   | `#F4725B` | Personal content: latest writing, some credentials |
| `--blue`    | `#1E90FF` | Stack section                                      |
| `--magenta` | `#D9469A` | Beyond Code section                                |

**Usage rules:**

- Every colored surface pairs with an `--ink` border and an `--ink`-colored hard shadow, except WIP project cards, which use a colored shadow against an ink fill to read as "in progress, not finished."
- No gradients exist anywhere in the system. Color transitions are handled with flat fills and borders only.
- Accent colors are never combined arbitrarily — each one is locked to a specific content category (see table above) and does not appear outside that category.
- Text on colored backgrounds is always `--ink` or `--bone`, chosen for contrast, never a tinted variant of the accent itself.

---

## Typography

| Role    | Typeface       | Weights         | Used for                                                  |
| ------- | -------------- | --------------- | --------------------------------------------------------- |
| Display | Syne           | 800             | Headings, hero name, section titles                       |
| Body    | DM Sans        | 400 / 500       | Paragraphs, descriptions, UI copy                         |
| Mono    | JetBrains Mono | 400 / 500 / 700 | Tags, dates, metadata, code blocks, ghost section numbers |

**Type scale notes:**

- Display type is set large and tight, with negative letter-spacing on the hero name to emphasize weight over elegance.
- Mono is treated as a structural element, not just a code font — it appears in navigation metadata, timestamps, and the ghost section numbers on the About page, giving the layout a "stamped" feel.
- Line lengths are deliberately constrained on body copy to keep the editorial, column-like reading experience consistent across breakpoints.

---

## Key Features

- **Page wipe intro** — a full-screen ink curtain slides off on first visit, built with Framer Motion and tracked via session storage so it only ever plays once per session, never on subsequent navigations.
- **Fixed sidebar** with a vertical scroll progress indicator (yellow fill rising on a black track) that gives a persistent sense of "how far into the document" the visitor is.
- **Custom nib cursor** — a fountain-pen nib SVG that replaces the system cursor and leaves a fading ink-dot trail when hovering links and buttons, reinforcing the "this is a written artifact" framing.
- **Sticky navbar** with a red-underline active state that tracks the current section as the visitor scrolls.
- **Home page as editorial digest** — functions like a magazine front page, surfacing previews of Work, Experience, Credentials, Stack, Currently Building, Latest Writing, and Beyond Code in a single scroll.
- **Project cards in four variants**, each communicating project status at a glance:
  - Teal fill — completed ML/AI work
  - Yellow fill — completed Full-Stack/Tools work
  - Ink fill with colored shadow — work in progress
  - Bone fill (default) — minor or contributor-level work
- **Standout tags** — project-specific, manually curated (not auto-generated from a tech list), rendered in fault red to flag the specific skills worth noticing on a given project.
- **Contact page** — a split layout with a one-click copy-email interaction and a diff-view-styled thank-you state after submission, reinforcing the "technical document" aesthetic even in the contact flow.
- **404 page** — a red period as the visual anchor and a yellow RETURN button, kept consistent with the rest of the system rather than treated as a throwaway error state.
- **Easter eggs** — entering the Konami code triggers a "GOAL" football overlay (a nod to Aditya's football background), and the browser console greets curious developers with a styled message instead of silence.
- **About page** — a photo card, ghost section numbers in mono type, a typographic sculpture built from the list of cities lived in, pull quotes, a poem card, motto cards, interest cards, highlighter-style hover effects on key phrases, and a slightly rotated auth stamp graphic.

---

## Page-by-Page Breakdown

| Page          | Purpose                            | Notable elements                                                        |
| ------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `/` (Home)    | Editorial digest of the whole site | Section previews, scroll-triggered reveals, hero name stagger animation |
| `/work`       | Full project archive               | Four-variant project cards, standout tags, filterable by category       |
| `/about`      | Personal narrative and context     | Photo card, city sculpture, pull quotes, poem card, motto cards         |
| `/experience` | Internship and work history        | Purple-accented timeline, role descriptions, stack used per role        |
| `/contact`    | Get-in-touch flow                  | Split layout, copy-email, diff-view confirmation state                  |
| `/404`        | Not-found state                    | Red period mark, yellow RETURN button                                   |

---

## Component Library

A self-contained set of components, each built to the system's border/shadow/color rules rather than pulled from an unmodified kit:

- `Button` — primary, secondary, and ghost variants, all using translate-on-hover instead of color shift
- `ProjectCard` — four status variants (teal / yellow / ink-with-shadow / bone)
- `Tag` — standard and standout (fault red) variants, yellow shadow on hover
- `Sidebar` — fixed position, scroll-progress fill
- `Navbar` — sticky, red-underline active state
- `Cursor` — custom nib SVG with trailing ink-dot canvas layer
- `PageWipe` — full-screen intro transition, session-storage gated
- `AuthStamp` — rotated stamp graphic used on credentials and About
- `PullQuote`, `PoemCard`, `MottoCard`, `InterestCard` — editorial content blocks used on About
- `DiffView` — used in the contact form's thank-you state to mimic a code diff

---

## Tech Stack

| Layer      | Choice                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router), TypeScript strict                                                |
| Styling    | Tailwind CSS v4, CSS-first `@theme` config (no `tailwind.config.ts`)                      |
| Animation  | Framer Motion (page wipe, hero name stagger, marquee)                                     |
| Icons      | Lucide React                                                                              |
| Forms      | React Hook Form + Zod, Web3Forms via server-side proxy                                    |
| Security   | Strict CSP with per-request nonces (`proxy.ts`), security headers, zero secrets in source |
| Deployment | Vercel                                                                                    |

---

## Project Structure

```
hard-copy/
├── app/
│   ├── page.tsx              # Home — editorial digest
│   ├── work/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── globals.css           # @theme tokens, base styles
├── components/
│   ├── ui/                   # Button, Tag, ProjectCard, etc.
│   ├── cursor/                # Nib cursor + ink trail
│   ├── sidebar/
│   ├── navbar/
│   └── page-wipe/
├── lib/
│   ├── proxy.ts               # CSP nonce + Web3Forms proxy
│   └── utils.ts
├── public/
│   └── assets/
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## Setup

---

## Color System

| Token       | Hex       | Role                                               |
| ----------- | --------- | -------------------------------------------------- |
| `--bone`    | `#F5F0E8` | Page ground                                        |
| `--ink`     | `#0D0D0D` | Structure, text, borders, shadows                  |
| `--strike`  | `#E8C547` | Full-Stack / Tools projects, priority signals      |
| `--fault`   | `#D94F3D` | Standout tags, red moments, emphasis               |
| `--teal`    | `#2E6B5E` | ML / AI projects                                   |
| `--purple`  | `#7B4FD4` | Experience section, deep systems                   |
| `--coral`   | `#F4725B` | Personal content: latest writing, some credentials |
| `--blue`    | `#1E90FF` | Stack section                                      |
| `--magenta` | `#D9469A` | Beyond Code section                                |

---

## Typography

| Role    | Typeface       | Weights                                       |
| ------- | -------------- | --------------------------------------------- |
| Display | Syne           | 800 — headings, hero name, section titles     |
| Body    | DM Sans        | 400 / 500 — paragraphs, descriptions          |
| Mono    | JetBrains Mono | 400 / 500 / 700 — tags, dates, metadata, code |

---

## Key Features

- **Page wipe intro** — full-screen ink curtain slides off on first visit, tracked via session storage so it never repeats.
- **Fixed sidebar** with vertical scroll progress (yellow fill on black track).
- **Custom nib cursor** — fountain-pen nib SVG with an ink-dot trail on links and buttons.
- **Sticky navbar** with a red-underline active state.
- **Home page as editorial digest** — previews of Work, Experience, Credentials, Stack, Currently Building, Latest Writing, and Beyond Code.
- **Project cards in four variants** — teal fill (completed ML), yellow fill (completed Full-Stack/Tools), ink fill with colored shadow (WIP), bone fill (minor contributions).
- **Standout tags** — project-specific, manually curated, rendered in fault red to flag standout skills.
- **Contact page** — split layout, copy-email interaction, diff-view thank-you state.
- **404 page** — red period, yellow RETURN button.
- **Easter eggs** — Konami code triggers a "GOAL" football overlay; a styled console message greets curious developers.
- **About page** — photo card, ghost section numbers, a typographic city-list sculpture, pull quotes, a poem card, motto cards, interest cards, highlighter hover, and a rotated auth stamp.

---

## Tech Stack

| Layer      | Choice                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router), TypeScript strict                                                |
| Styling    | Tailwind CSS v4, CSS-first `@theme` config (no `tailwind.config.ts`)                      |
| Animation  | Framer Motion (page wipe, hero name stagger, marquee)                                     |
| Icons      | Lucide React                                                                              |
| Forms      | React Hook Form + Zod, Web3Forms via server-side proxy                                    |
| Security   | Strict CSP with per-request nonces (`proxy.ts`), security headers, zero secrets in source |
| Deployment | Vercel                                                                                    |

---

## Setup

**Prerequisites:** Node.js 18.18+ and npm (or pnpm/yarn).

```bash
# clone
git clone https://github.com/adityajha1606/hard-copy.git
cd hard-copy

# install
npm install

# run locally
npm run dev
# → http://localhost:3000

# type-check
npm run type-check

# lint
npm run lint

# build for production
npm run build
npm run start
```

### Fonts

Syne, DM Sans, and JetBrains Mono are loaded via `next/font`, self-hosted at build time — no external font requests, no layout shift from late-loading web fonts.

### Styling notes

Tailwind v4 is configured entirely through `@theme` in `globals.css`; there is no `tailwind.config.ts` in this project. Color tokens, spacing, and font families are all declared as CSS custom properties so they can be referenced directly outside of Tailwind utility classes where needed (e.g. in the canvas-based cursor trail).

---

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Web3Forms access key (server-side only, never exposed to the client)
WEB3FORMS_ACCESS_KEY=your_key_here

# Optional: site URL used for metadata and canonical links
NEXT_PUBLIC_SITE_URL=https://hard-copy.vercel.app
```

Form submissions are routed through a server-side proxy (`lib/proxy.ts`) so the Web3Forms key is never shipped to the client bundle.

---

## Performance & Security

- **CSP with per-request nonces.** A strict Content-Security-Policy is generated per request in `proxy.ts`, with nonces applied to inline scripts and styles rather than relying on `unsafe-inline`.
- **Security headers** — `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` are all set explicitly rather than left at framework defaults.
- **No secrets in source.** All credentials are environment-scoped and accessed only server-side.
- **Self-hosted fonts** to avoid third-party font requests and associated layout shift.
- **Animation budget.** Framer Motion usage is scoped deliberately (page wipe, hero stagger, marquee) rather than applied broadly, to keep Largest Contentful Paint and Total Blocking Time within target budgets.
- **Image handling** via `next/image` with explicit sizing to prevent cumulative layout shift.

---

## Accessibility

- Semantic HTML structure maintained underneath the visual system — hard borders and shadows are styling, not a substitute for proper landmarks and heading hierarchy.
- Color is never the sole carrier of information; status (e.g. project category, form state) is also conveyed through text and iconography.
- The custom nib cursor degrades gracefully — keyboard navigation and focus states do not depend on cursor visuals.
- Contrast ratios across the bone/ink base pairing and all accent-on-ink or accent-on-bone combinations are checked against WCAG AA.
- Reduced-motion preferences are respected; the page wipe and scroll-triggered animations are disabled when `prefers-reduced-motion` is set.

---

## Roadmap

- [ ] Dark-mode-equivalent "negative" theme (inverted ink/bone) as an alternate, not a replacement
- [ ] Writing/blog index with the same card-variant system used for projects
- [ ] Expanded Easter egg set beyond the Konami code
- [ ] Automated visual regression checks for the shadow/border system across breakpoints

---

## Links

- **Live site:** [hard-copy.vercel.app](#)
- **Repository:** [github.com/adityajha1606/hard-copy](#)

---

## Closing Note

This site is built and maintained by one person who'd rather over-engineer it than ship it generic.
