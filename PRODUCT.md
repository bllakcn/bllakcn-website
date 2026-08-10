# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are recruiters and employers evaluating Ahmet Bilal Akcan for web development roles. Secondary visitors are potential clients assessing fit for a build. Both arrive to judge credibility, career background, and demonstrated knowledge.

## Product Purpose

Personal portfolio site that establishes credibility and showcases career background and knowledge. Success means a visitor can quickly form a clear, trustworthy picture of who Bilal is as a developer and what he has done — enough to continue a hiring or engagement conversation.

## Positioning

A first-person personal site for a self-taught web developer with an architecture background, based in the Netherlands. Credibility comes from real biography, timeline, projects, bilingual CV/resume artifacts, and writing — not from invented social proof.

## Operating Context

Visitors browse the public site (home/about, blog, resume) and may download language-specific CV PDFs. Content is maintained by the owner: structured CV data (EN/NL), MDX blog posts, and project timeline on the about surface. Deployed as a static-facing web app on Cloudflare Workers.

## Capabilities and Constraints

- Public surfaces: home/about, blog, resume, and an elements/demo page.
- Structured CV data is the source of truth for the resume page and generated CV PDFs (`cv.json`, `cv.nl.json`); EN and NL variants exist.
- CV PDFs are generated artifacts served as static files (`public/cv.pdf`, `public/cv.nl.pdf`).
- Stack (existing): TanStack Start + Router, Tailwind CSS v4, content-collections/MDX, Cloudflare Workers.
- Undecided: no product-specific accessibility standard beyond general web good practice was set during init.

## Brand Commitments

- Site identity: **bllakcn.** / Ahmet Bilal Akcan.
- Voice in existing copy is first-person, direct, and personal (developer in the Netherlands; UI craft; full-stack comfort).
- Do not invent testimonials, customer logos, metrics, or press.

## Evidence on Hand

- Home intro and about timeline: `src/routes/index.tsx`, `src/components/site/About/About.tsx`
- CV data (EN/NL): `src/routes/resume-assets/cv.json`, `src/routes/resume-assets/cv.nl.json`
- CV PDFs: `public/cv.pdf`, `public/cv.nl.pdf`
- Blog posts: `content/`
- Linked profiles referenced in CV data (LinkedIn, GitHub, portfolio URL)
- Absences future work must not fabricate: testimonials, case-study metrics, client quotes, awards not already on the site

## Product Principles

1. Credibility over polish theater — every claim traces to real bio, work, or writing.
2. Hiring- and client-readable in one pass — background and knowledge should scan without hunting.
3. One source of truth for resume content — web resume and CV PDFs stay aligned with structured CV data.
4. Personal voice, not corporate brochure — first-person identity stays intact.
5. Do not invent proof — if evidence is missing, leave it missing.
