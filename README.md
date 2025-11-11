# PaymorzV2 Docs — Vercel-ready

This repository contains a Next.js (App Router) + MDX documentation site for **PaymorzV2**.
It is pre-configured for a clean Trigger.dev-like docs layout, dark/light theme toggle, and includes your logo.

## Local development

1. Install
```bash
npm install
```

2. Run dev server
```bash
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (recommended)

1. Go to https://vercel.com and sign in (create account if needed).
2. Create a new Project -> Import from Git (or you can directly drag & drop a ZIP when creating a new project).
3. If you push this code to GitHub, connect the repository and Vercel will detect Next.js automatically.
4. Set the project name to `paymorzv2-docs` (this will aim for `paymorzv2-docs.vercel.app`).
5. Deploy. Live URL will be shown by Vercel after build.

## Notes

- This starter uses MDX for docs pages in `/app/docs/*.mdx`.
- Logo is in `/public/logo.svg`.
- Theme toggle is implemented in client-side component at `/components/ThemeToggle.tsx`.
