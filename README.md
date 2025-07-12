# Alexa Biopharma Web App

This repository contains a **Next.js 15** web application written in **TypeScript**. It represents the website for an Indian pharmaceutical company and includes pages for products, franchise opportunities, search and more.

## Project Structure

```
app/          Next.js App Router pages and styles
components/   Reusable React components (layout and UI)
lib/          Static data (product catalog) and utilities
hooks/        Custom React hooks
public/       Static assets such as logos
```

- **`app/layout.tsx`** provides global metadata, loads fonts and wraps every page with the site header and footer.
- **`lib/products-data.ts`** defines product information and helper functions used by the products and search pages.
- **`components/ui/`** contains Shadcn UI components styled with Tailwind CSS.

## Getting Started

1. Install dependencies (using `pnpm`, `npm`, or `yarn`). Example with pnpm:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3000`.

3. Build for production:
   ```bash
   pnpm build
   pnpm start
   ```

The configuration in `next.config.mjs` disables ESLint and TypeScript errors during the build. Images are served unoptimized.

## Environment Variables

This project uses [Supabase](https://supabase.com/) to store contact form submissions. Create a `.env.local` file (or define the variables in Vercel) with the following keys:

```bash
SUPABASE_URL=<your-supabase-url>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
```

These values are required at runtime so be sure to configure them in your Vercel project settings when deploying.

### Deploying with Vercel

1. Create a new project on [Supabase](https://supabase.com/) and set up a table named `contact_messages` to store contact form submissions.
2. Deploy this Next.js app to [Vercel](https://vercel.com/).
3. In the Vercel dashboard, add the `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` environment variables from your Supabase project.
4. Redeploy the application so the variables are available to the serverless functions at runtime.

## Customization

- **Tailwind CSS** is configured in `tailwind.config.ts` and global styles are in `app/globals.css`.
- **Product data** can be edited in `lib/products-data.ts`.
- New pages can be added under the `app/` directory following Next.js App Router conventions.

## Useful Scripts

- `pnpm dev` – Run the app in development mode.
- `pnpm build` – Create an optimized production build.
- `pnpm start` – Start the production server after building.
- `pnpm lint` – Run Next.js ESLint.
- `pnpm test` – Run the Jest test suite.

## License

No license information is provided in this repository.
