---
name: bllakcn
description: Personal portfolio — calm craft notebook on warm paper
colors:
  studio-charcoal: "#2e2e2e"
  warm-paper: "#f8f4f1"
  signal-blue: "#2d51d2"
  seafoam-wash: "#c1e6de"
  quiet-mint: "#cde9e2"
  gallery-card: "#fafafa"
  ink-muted: "#616161"
  rule-gray: "#6e6e6e"
  paper-nearwhite: "#fafafa"
  danger: "#ef4444"
typography:
  display:
    fontFamily: "Outfit Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Outfit Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Outfit Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Outfit Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Outfit Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "normal"
rounded:
  sm: "12px"
  md: "14px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  page-gutter: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.studio-charcoal}"
    textColor: "{colors.paper-nearwhite}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  button-primary-hover:
    backgroundColor: "#2e2e2ee6"
    textColor: "{colors.paper-nearwhite}"
    rounded: "{rounded.md}"
  button-outline:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.studio-charcoal}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  button-outline-hover:
    backgroundColor: "{colors.quiet-mint}"
    textColor: "{colors.studio-charcoal}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper-nearwhite}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.studio-charcoal}"
    padding: "0"
  badge-default:
    backgroundColor: "{colors.studio-charcoal}"
    textColor: "{colors.paper-nearwhite}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.625rem"
  badge-secondary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper-nearwhite}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.625rem"
  card:
    backgroundColor: "{colors.gallery-card}"
    textColor: "{colors.studio-charcoal}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  page-shell:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.studio-charcoal}"
    rounded: "{rounded.md}"
---

# Design System: bllakcn

## Overview

**Creative North Star: "The Craft Notebook"**

The site reads like a working notebook laid on a desk: a warm paper page, charcoal ink, and a few clear marks of emphasis. It is calm, precise, friendly, and down-to-earth — credibility through craft and real content, not through spectacle. The outer charcoal chrome frames a bordered page with a fine dot-grid texture, so the whole viewport feels like paper sitting on a table rather than a glowing product UI.

Single-family typography (Outfit Variable) keeps hierarchy through size and weight only. Color is restrained: charcoal for structure and primary actions, signal blue for rare emphasis, seafoam/mint as soft washes. Depth comes from borders, nested surfaces, and the page-on-chrome shell — never from lift or glow.

**Anti-reference:** Never futuristic — no neon, glassmorphism, cyber gradients, or dashboard chrome.

**Key Characteristics:**
- Warm paper page inside a charcoal frame
- Flat, border-led surfaces (no shadows)
- One variable sans (Outfit) for all roles
- Charcoal + rare blue + soft mint accent vocabulary
- Friendly utilitarian controls — ink on paper

## Colors

A warm-paper / charcoal-ink palette with one electric accent and soft mint washes.

### Primary
- **Studio Charcoal** (`{colors.studio-charcoal}`): Primary actions, brand wordmark weight, default filled badges, and the outer page chrome (`bg-primary` on the body shell). Also the default ink when used as foreground pairing.

### Secondary
- **Signal Blue** (`{colors.signal-blue}`): Deliberate emphasis — secondary buttons, secondary badges, heading accent when intentionally marked. Use sparingly so it stays a signal, not decoration.

### Tertiary
- **Seafoam Wash** (`{colors.seafoam-wash}`) / **Quiet Mint** (`{colors.quiet-mint}`): Soft fills for tertiary buttons, hover washes on outline/light controls, and gentle accent surfaces. Never the main text color.

### Neutral
- **Warm Paper** (`{colors.warm-paper}`): Page ground inside the shell; default reading surface.
- **Gallery Card** (`{colors.gallery-card}`): Raised-in-tone card/popover surfaces (tonal, not shadowed).
- **Ink Muted** (`{colors.ink-muted}`): Secondary body copy, descriptions, supporting labels.
- **Rule Gray** (`{colors.rule-gray}`): Borders, separators, code chrome strokes.
- **Paper Nearwhite** (`{colors.paper-nearwhite}`): Text on charcoal/blue fills; near-white card fill alias.
- **Danger** (`{colors.danger}`): Destructive actions and error affordances only.

### Named Rules
**The One Signal Rule.** Signal Blue appears as intentional emphasis only — never as large background washes or decorative gradients.

**The Paper Ground Rule.** Reading surfaces stay Warm Paper or Gallery Card. Do not introduce cool pure-white or dark glass panels as the default page.

## Typography

**Display Font:** Outfit Variable (with ui-sans-serif, system-ui)
**Body Font:** Outfit Variable (same stack)
**Label/Mono Font:** Outfit for UI labels; code blocks use the site’s code styling (bordered pre, not a second brand face)

**Character:** One geometric-humanist variable sans does all the work — approachable, clear, never decorative. Personality comes from weight and scale, not from a serif/display pairing.

### Hierarchy
- **Display / H1** (bold, `text-3xl` → `md:text-4xl`, tight tracking): Page-level titles and the `bllakcn.` wordmark treatment.
- **Headline / H2** (bold, `text-2xl` → `md:text-3xl`): Major section titles.
- **Title / H3–H4** (semibold, `text-xl`–`text-2xl` / `text-lg`–`text-xl`): Subsection and card titles.
- **Body** (regular, `1rem`, relaxed leading): Intro copy, timeline descriptions, blog prose (readable measure inside `max-w-5xl` content columns).
- **Label** (medium, `text-sm`): Buttons, nav links, badges (`text-xs` semibold for badge chips).

### Named Rules
**The Single Voice Rule.** Do not introduce a second brand typeface for display or body. Hierarchy is size + weight only.

## Layout

Content lives inside a bordered **page shell** (`.page`) inset from the charcoal body (`m-3` / `md:mx-9`), max width `--container-8xl` (90rem) on the outer wrap, with reading columns typically `max-w-5xl` and footer socials `max-w-3xl`. Horizontal padding is modest (`p-4` on sections). The about timeline uses a fixed date column (`80px`) + icon column + content — notebook-like chronology, not a card grid.

Density is comfortable and scannable for recruiters: clear section breaks, accordion for long timeline detail, no dashboard multi-column chrome. Sticky nav tightens padding slightly on scroll. Dot-grid background on `.page` reinforces the paper texture at `10px` pitch.

### Named Rules
**The Page-on-Desk Rule.** Keep the inset bordered page on charcoal chrome. Do not go full-bleed edge-to-edge content that erases the notebook shell.

## Elevation & Depth

**Flat by default — webpage on paper.** Depth is tonal and structural only: Warm Paper vs Gallery Card, border rules, the page shell against charcoal chrome, and the dot grid. **No box shadows** on resting UI (cards, buttons, chips, toggles). Overlays (menus, dialogs, toasts, tooltips) separate with borders and solid fills, not drop shadows.

Borders and tone replace lift. UI primitives use no `shadow-*` utilities.

### Named Rules
**The No-Lift Rule.** If a surface needs separation, use a border (`border-border`) or a tonal step — never `shadow-*` or glow.

## Shapes

Generous, friendly corners from a `1rem` base radius: large shell/card corners (`rounded-lg` ≈ 16px), controls at `rounded-md` (≈ 14px), chips and badge buttons at `rounded-full`. Borders are visible charcoal-gray rules (`border-border`), not hairline invisible dividers. The page shell uses `rounded-md` + full border — the signature silhouette of the site.

### Named Rules
**The Soft Notebook Rule.** Prefer the existing radius scale; avoid sharp zero-radius “broadsheet” blocks and avoid pill-everything except badges/chips.

## Components

Feel: **ink on paper — flat, bordered, approachable.** Controls should look printable: clear edge, solid fill or quiet wash, no floating elevation.

### Buttons
- **Shape:** Soft rectangle (`rounded-md`), always with a visible border except link/light/badge variants that intentionally drop it.
- **Primary:** Studio Charcoal fill, nearwhite text, `h-10` / `px-4`; hover at ~90% opacity.
- **Secondary:** Signal Blue fill; use for rare emphasis.
- **Outline / Light:** Paper or transparent ground; hover into Quiet Mint wash.
- **Link:** No border; underline on hover — used heavily in nav.
- **Focus:** `ring-2` + ring-offset on the ring token — focus is a ring, not a shadow.

### Badges / Chips
- **Style:** Pill (`rounded-full`), semibold `text-xs`, transparent border on filled variants.
- **Default / Secondary / Tertiary:** Charcoal, Signal Blue, or Seafoam fills respectively.
- **Outline / Ghost:** Ink on paper with or without rule.

### Cards / Containers
- **Corner Style:** `rounded-lg`
- **Background:** Gallery Card
- **Shadow Strategy:** none (No-Lift Rule) — border only
- **Border:** `border-border`
- **Internal Padding:** `p-6` header/content rhythm

### Inputs / Fields
- **Style:** Input token ground, border via shared border color, `rounded` from the scale.
- **Focus:** Ring token focus ring + offset (match buttons).
- Prefer bordered fields over underlined-only material inputs.

### Navigation
- Sticky top bar inside the page; brand is the `bllakcn.` Heading link.
- Desktop: text links with small arrow affordance; Command menu as a utility control.
- Mobile: icon trigger → dropdown with the same link list.
- Scroll: subtle bottom border + translucent paper background when past threshold — still flat, no shadow.

### Page Shell (signature)
- Outer body: Studio Charcoal.
- Inner `.page`: Warm Paper, border, `rounded-md`, fine radial dot grid.
- This shell is the brand frame; new screens should compose inside it, not invent a second chrome.

## Do's and Don'ts

### Do:
- **Do** keep content inside the bordered paper page on charcoal chrome.
- **Do** separate surfaces with borders and tonal steps (Warm Paper ↔ Gallery Card).
- **Do** use Outfit Variable exclusively for brand UI type.
- **Do** treat Signal Blue as a rare signal, charcoal as the workhorse.
- **Do** keep controls flat, bordered, and approachable — ink on paper.

### Don't:
- **Don't** use box shadows, soft glows, or floating elevation on resting UI.
- **Don't** go futuristic (neon, glass, cyber gradients, HUD chrome).
- **Don't** invent a second display typeface or ornate serif pairing.
- **Don't** fabricate testimonials, metrics, or proof styling that implies social proof the product does not have.
- **Don't** replace the page-on-desk shell with a full-bleed app canvas without an explicit redesign.
