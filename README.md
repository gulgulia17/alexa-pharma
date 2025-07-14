# Alexa Biopharma Web App

This repository now contains a **React** web application built with **Vite** and **TypeScript**. It represents the website for an Indian pharmaceutical company and includes pages for products, franchise opportunities, search and more.

## Project Structure

```
src/          Application source code
├─ components/ UI components (layout and Shadcn UI)
├─ hooks/      Custom React hooks
├─ lib/        Data utilities and helpers
├─ pages/      React Router pages
└─ styles/     Global styles
public/       Static assets such as logos
```

- **`src/components/layout`** provides the site header and footer used on all pages.
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
   The site will be available at `http://localhost:5173`.

3. Build for production:
   ```bash
   pnpm build
   pnpm preview
   ```

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

### Running Tests

Install dependencies and run:

```bash
pnpm test
```

This executes the full Jest suite including DOM and API tests.

## License

No license information is provided in this repository.
