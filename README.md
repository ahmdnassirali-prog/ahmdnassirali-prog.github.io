# Portfolio: Digital Experience Designer

A single-page portfolio built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**. Fully static, no backend, no tracking.

## Edit your details (one file)

Everything you are likely to change lives in **`src/config/site.ts`**:

| What | Field |
|---|---|
| Business name / title ("Digital Experience Designer") | `name`, `shortName` |
| Your own name (optional, shown in About) | `ownerName` |
| Live website address (used for SEO and social cards) | `url` |
| Email, WhatsApp number, prefilled WhatsApp message | `contact.*` |
| Hero headline and intro | `hero` |
| Projects, links, images, concept/client label | `projects` |
| Services, About text, Process steps, Contact text | `services`, `about`, `process`, `contactSection` |

**Before going live:**

1. Replace `contact.email`, `contact.whatsapp` (digits only, international format, e.g. `25263xxxxxxx`) and `contact.whatsappDisplay`.
2. Set `contact.isPlaceholder` to `false`. This removes the "placeholder details" note from the Contact section.
3. Set `url` to your real domain.

### The contact form

The form works without any server:

- **Default:** it opens the visitor's email app with their message already written, addressed to `contact.email`.
- **Optional:** to receive messages directly, create a free form endpoint (for example at formspree.io) and paste its URL into `contact.formEndpoint`. The form then sends in the background and shows a confirmation.

### Adding a project

Add an entry to `projects`:

- `kind: "concept"` labels it "Independent concept". Use `"client"` only for commissioned work (QETC is the example).
- `status: "completed"` with a `url` and `images` makes it a full clickable feature (consecutive projects alternate their layout automatically). `status: "in-progress"` shows a placeholder card with no link.
- Put screenshots in `public/work/` (WebP, about 1600px wide). Desktop screenshots should be 1600×956 to match the layout; if yours differ, update the `width`/`height` in `src/components/Work.tsx`.

When the hotel demo is ready, change its `status` to `"completed"` and add `url` and `images`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

To test the production build locally:

```bash
npm run build && npm run start
```

## Deploy (GitHub Pages)

The site deploys itself: every push to `main` runs `.github/workflows/deploy.yml`, which builds a static export and publishes it to GitHub Pages.

- Repo named **`<username>.github.io`** → live at `https://<username>.github.io/`
- Any other repo name, e.g. `portfolio` → live at `https://<username>.github.io/portfolio/`

The workflow detects which one it is and sets the base path and site URL automatically.

**One-time setup** (in the repo on github.com): **Settings → Pages → Build and deployment → Source: GitHub Actions**.

To publish changes later, just commit and push:

```bash
git add -A && git commit -m "Update portfolio" && git push
```

To test the GitHub Pages build locally:

```bash
GITHUB_PAGES=true npm run build
```

Notes:
- The social-share image is a fixed file, `src/app/opengraph-image.png`. Replace it if you change the headline or name.
- To use your own domain later, add it under Settings → Pages → Custom domain, and set `url` in `src/config/site.ts`.
- Vercel also works with no changes: import the repo at vercel.com.

## What's in the project

```
src/
  config/site.ts          ← all content and contact details
  app/
    layout.tsx            fonts, SEO metadata, structured data
    page.tsx              section order
    globals.css           design tokens, type, motion primitives
    opengraph-image.png   social share image
    sitemap.ts, robots.ts, icon.svg
  components/
    Nav                   fixed header, mobile menu
    Hero, Work, Services, About, Process, Contact, ContactForm
    SectionHead, Emph     oversized section titles, *blue italic* emphasis
    Motion                one small scroll/reveal runtime
public/work/              project screenshots
```

## Design notes

- **Art direction:** a dark editorial "night edition". Near-black tonal grounds (`--ink-0` to `--ink-3`), warm off-white type (`--bone`), and one restrained electric blue (`--blue`) used for italic emphasis, numerals and live states. All tokens are at the top of `globals.css`.
- **Type:** Instrument Serif for oversized display headings, Geist for text, Geist Mono for small labels. All self-hosted by `next/font`.
- **Blue emphasis:** in `site.ts`, wrap a word in asterisks (`"Deserves a *Better*"`) to set it in blue italic.
- **Hero:** the real RSSA work is staged as layered planes in perspective (second screen, browser, phone) that move at different rates on scroll.
- **Signature moment:** the Process section pins on large screens. One browser frame goes from sitemap (Discovery) to wireframe (Design), wipes into the real RSSA page (Development), and its address bar goes live (Launch). Phones and reduced-motion users get a stacked version.
- **Motion** uses only `transform`, `opacity` and `clip-path`, and respects `prefers-reduced-motion`. Content stays visible if JavaScript is off.
- **Honesty:** no invented clients, testimonials or numbers. RSSA is labelled as a completed independent concept (not commissioned); QETC as completed client work. The hotel concept is marked "In development. No live demo yet."
