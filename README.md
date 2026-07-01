# Surendaran Soundarrajan — Portfolio (Phase 1: React Frontend)

A premium, recruiter-focused portfolio built with React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Design Identity
- **Palette**: Ink navy (`#0B1120`) / Bone cream (`#F4F1E9`) backgrounds, Signal amber (`#F4A825`) + Cipher teal (`#5EEAD4`) accents
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/code)
- **Signature element**: the hero name "decrypts" letter-by-letter from scrambled cipher characters — a direct callback to the AES-256 encryption built in the TalkEasy project, not a generic effect

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Before Going Live — 3 Things to Do

1. **Add your photo** → drop a real photo at `public/surendaran.jpg`
2. **Add your resume** → drop your PDF at `public/resume.pdf`
3. **Wire up Contact form (EmailJS)** → in `src/pages/Contact.tsx`, replace:
   - `SERVICE_ID` with your EmailJS Service ID
   - `TEMPLATE_ID` with your EmailJS Template ID
   - `PUBLIC_KEY` is already set to your key

## Project Structure

```
src/
  components/     Reusable UI (Navbar, Footer, ProjectCard, SkillBar, Reveal, ThemeToggle)
  context/        ThemeContext (dark/light mode, persisted to localStorage)
  data/           content.ts — single source of truth for all portfolio content
  hooks/          useDecryptText — the signature hero animation
  pages/          Home, About, Skills, Projects, Resume, Contact
```

All your content (name, projects, skills, experience) lives in **one file**:
`src/data/content.ts` — edit that file to update anything across the whole site.

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```
Or connect the GitHub repo directly in the Vercel dashboard — it auto-detects Vite.

## What's Next (Phase 2+)

This is Phase 1 (frontend only) of the full spec. Future phases:
- Phase 2: Django REST backend (Profile/Projects/Contact/Certificates APIs, PostgreSQL)
- Phase 3: Blog system with CRUD, markdown, admin dashboard
- Phase 4: GitHub/LeetCode API integration, visitor analytics, Docker, CI/CD

## Tech Stack
React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · React Icons · EmailJS
