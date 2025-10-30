# HackPrinceton Event Landing Page Template

![HackPrinceton Logo](/images/logos/hackprinceton_logo_primary.png)

This is a responsive, customizable landing page template for HackPrinceton hackathons, built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Radix UI](https://www.radix-ui.com/).

The template is pre-configured with a gray dark mode theme and includes several common sections:

- Hero
- About
- Tracks & Prizes
- Contributors/Sponsors (with dynamic tiers)
- FAQ
- Resources
- Footer

---

## Features

- **Next.js 14:** Built with the App Router.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Radix UI:** For unstyled, accessible UI primitives.
- **Framer Motion:** Used for simple page animations.
- **Responsive Design:** Looks great on mobile, tablet, and desktop.
- **Themed & Customizable:** The font and color palette are defined in `tailwind.config.ts` for easy customization.
- **Dynamic Components:** Many sections, like the `FAQ` and `Contributors` section, are dynamically generated from an array, with visual tiers.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## How to Customize

This template is designed to be quickly customized for your event.

1.  **Global Styles & Theme:**

    - Change your event's color palette in `tailwind.config.ts` under `theme.extend.colors`.

2.  **Page Content:**

    - Edit `app/page.tsx` to add or remove sections.
    - All components are located in `app/components/`.

3.  **Key Components to Edit:**

    - `app/components/hero.tsx`: Update your event name, tagline, and date.
    - `app/components/navbar/navbar.tsx`: Update the logo and navigation links.
    - `app/components/about.tsx`: Update the "About Us" text and image.
    - `app/components/tracks.tsx`: Define your event's tracks and prizes.
    - `app/components/contributors.tsx`: Update the `contributorsList` array with your sponsor tiers, names, and logos.
    - `app/components/faq.tsx`: Update the `faqData` array with your event's questions.

4.  **Metadata & Fonts:**

    - Change the site title, description, and fonts in `app/layout.tsx`.

5.  **Images & SVGs:**

    - Replace placeholder logos and images in the `public/` directory. (e.g., `public/images/placeholders/contributor.svg`).

---

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

```
