## 🚀 Task: Convert Next.js App to React (Vite)

This task involves converting the existing **Next.js (App Router)** project into a **pure React app** built with **Vite**.

The goal is to remove the Next.js dependency while keeping:

* ✅ All current UI (Tailwind, Shadcn UI)
* ✅ All functionality (search, grid/list toggle, API interactions)
* ✅ Static export capability for deployment as HTML/CSS/JS

---

## 📦 Current Repo Overview

### Structure

```
├── app/                 # Next.js routes
├── components/          # UI components (Shadcn)
├── lib/                 # Data utilities (products-data.ts, supabase.ts)
├── public/              # Static assets
├── styles/              # globals.css (Tailwind)
├── hooks/               # Custom React hooks
├── jest.config.js       # Tests
├── next.config.mjs      # Next.js config
├── tsconfig.json        # TypeScript config
```

### Features

* App Router (`app/` directory)
* Client interactivity (`useParams`, search, toggle)
* API routes (`app/api/contact/route.ts`)
* Tailwind + Shadcn UI
* Supabase integration

---

## 🎯 Conversion Goals

| From               | To                            |
| ------------------ | ----------------------------- |
| Next.js App Router | React Router DOM              |
| `next/image`       | `<img>`                       |
| `next/link`        | `react-router-dom`’s `<Link>` |
| API Routes         | Fetch in `lib/` or external   |
| Next.js config     | Vite config                   |

---

## 🔥 Steps

### 1️⃣ Set Up Vite React App

* Scaffold app with Vite + React + TypeScript:

  ```bash
  pnpm create vite@latest my-app --template react-ts
  ```
* Move existing `components/`, `lib/`, `hooks/`, and `styles/` into `src/`

### 2️⃣ Replace Next.js Routing

* Replace Next.js routes (`app/`) with React Router routes:

  * `/about` → `src/pages/About.tsx`
  * `/products/[category]` → `src/pages/Category.tsx`
* Set up `react-router-dom` in `App.tsx`:

  ```tsx
  import { BrowserRouter, Routes, Route } from "react-router-dom"
  ```

### 3️⃣ Update Imports

* Replace `next/link` → `react-router-dom`’s `<Link>`
* Replace `next/image` → standard `<img>`
* Replace `useParams` from Next.js with `react-router-dom`’s `useParams`

### 4️⃣ Migrate API Routes

* Move `app/api/contact/route.ts` logic into `lib/contact.ts`
* Replace API calls to local fetch where required

### 5️⃣ Update Tailwind & PostCSS

* Copy `tailwind.config.ts` and `postcss.config.mjs` into the new Vite project
* Ensure `globals.css` is loaded in `src/main.tsx`

### 6️⃣ Remove Next.js Artifacts

Delete:

* `next.config.mjs`
* `next-env.d.ts`
* `pages/`
* `.next/`
* API routes (`app/api`)

---

## ⚡ Tech Stack After Conversion

| Library          | Purpose             |
| ---------------- | ------------------- |
| React            | UI framework        |
| Vite             | Build tool          |
| React Router DOM | Client-side routing |
| Tailwind CSS     | Styling             |
| Shadcn UI        | UI components       |
| Supabase         | Backend (if needed) |

---

## 📂 Example New Structure

```
src/
├── components/
├── hooks/
├── lib/
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Products.tsx
│   └── Category.tsx
├── router/
│   └── AppRouter.tsx
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
public/
```

---

## ✅ Deliverables

* Full React + Vite app (TypeScript)
* All routes functional with React Router DOM
* Fully static build ready for deployment
* Feature parity with current Next.js app:

  * Search
  * Grid/List toggle
  * CTA section
  * Supabase integration (if used)
* No Next.js-specific files or dependencies

---

## 📌 Notes

* Keep all Shadcn UI components as-is
* Preserve Tailwind configuration
* Make sure all dynamic data (products, categories) is fetched or imported from `lib/`
* API calls should now use `fetch` instead of Next.js API routes

---

## 📤 Deployment

The output folder (`dist/`) after `vite build` is static and can be deployed to:

* Netlify
* Vercel
* GitHub Pages
* S3 / Cloudflare Pages
