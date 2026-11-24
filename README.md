# Portfolio: Independent Web Designer & Developer

A single-page portfolio built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**. Fully static, no backend, no tracking.

## Edit your details (one file)

Everything you are likely to change lives in **`src/config/site.ts`**:

| What | Field |
|---|---|
| Business name (temporary: "Independent Web Designer & Developer") | `name`, `shortName` |
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

- `kind: "concept"` labels it "Concept · Self-initiated". Use `"client"` only for commissioned work.
- `status: "live"` with a `url` and `images` makes it a full clickable feature. `status: "in-progress"` shows a placeholder card with no link.
- Put screenshots in `public/work/` (WebP, about 1600px wide). Desktop screenshots should be 1600×956 to match the layout; if yours differ, update the `width`/`height` in `src/components/Work.tsx`.

When the hotel and education demos are ready, change their `status` to `"live"` and add `url` and `images`.

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

## Deploy

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New → Project** → import the repository.
3. Keep the defaults (framework: Next.js) and click **Deploy**.
4. Add your domain under **Project → Settings → Domains**, then update `url` in `src/config/site.ts` and push again.

Or from the terminal:

```bash
npx vercel
```

### Other hosts (Netlify, Cloudflare, your own server)

Any host that runs Next.js works. For a plain Node server: `npm run build`, then `npm run start` (port 3000 by default; set `PORT` to change it).

## What's in the project

```
src/
  config/site.ts          ← all content and contact details
  app/
    layout.tsx            fonts, SEO metadata, structured data
    page.tsx              section order
    globals.css           colours, type, motion primitives
    opengraph-image.tsx   social share image (generated)
    sitemap.ts, robots.ts, icon.svg
  components/
    Hero, Work, Services, About, Process, Contact, ContactForm
    Folio                 floating chapter index
    Motion                one small scroll/reveal runtime
public/work/              project screenshots
```

## Design notes

- **Palette:** bone paper, forest green and amber, with a dark/light hard cut between chapters.
- **Type:** Bricolage Grotesque (display) and Geist (text), self-hosted by `next/font`.
- **Signature moment:** the Process chapter pins on large screens. As you scroll, one browser frame goes from sitemap (Discovery) to wireframe (Design), wipes into the real RSSA page (Development), and its address bar goes live (Launch). Phones and reduced-motion users get a stacked version showing each stage.
- **Motion** uses only `transform`, `opacity` and `clip-path`, and respects `prefers-reduced-motion`. Content stays visible if JavaScript is off.
- **Honesty:** no invented clients, testimonials or numbers. RSSA is labelled as a self-initiated concept everywhere it appears.
