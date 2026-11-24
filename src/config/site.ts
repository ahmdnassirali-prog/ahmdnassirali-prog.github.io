/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Everything you are likely to change lives in this one file:
 *  business name, contact details, projects, services and copy.
 * ─────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  title: string;
  /** One-line description of what the site is. */
  summary: string;
  /** Short paragraph shown on the project spread. */
  description: string;
  /** "concept" = self-initiated, "client" = commissioned work. */
  kind: "concept" | "client";
  /** "live" shows a clickable link. "in-progress" shows a placeholder, no link. */
  status: "live" | "in-progress";
  /** Live demo URL. Leave null for in-progress projects. */
  url: string | null;
  sector: string;
  year?: string;
  /** What you did on the project. */
  scope: string[];
  /** Images in /public. Leave empty for in-progress projects. */
  images?: {
    desktop: string;
    mobile?: string;
    alt: string;
    /** Extra screenshots shown under the project (two work best). */
    details?: { src: string; alt: string; caption: string }[];
  };
};

export const site = {
  /** Temporary brand. Change this one value when you pick a business name. */
  name: "Independent Web Designer & Developer",
  /** Short form used in tight spaces (folio, browser tab). */
  shortName: "Independent Web Studio",
  /** Optional: your own name. Shown in About when set. */
  ownerName: "",
  /** Where you are based. */
  location: "Somaliland",
  /** Production URL. Update after you deploy (used for SEO, sitemap and social cards). */
  url: "https://example.com",

  description:
    "Independent web designer and developer creating fast, considered websites for businesses in Somaliland and around the world.",

  contact: {
    /**
     * PLACEHOLDERS. Replace with your real details, then set
     * `isPlaceholder` to false to remove the on-page notice.
     */
    isPlaceholder: true,
    email: "hello@example.com",
    /** WhatsApp number in international format, digits only (no +, spaces or dashes). */
    whatsapp: "252630000000",
    /** How the number is displayed on the page. */
    whatsappDisplay: "+252 63 000 0000",
    /** Prefilled WhatsApp message. */
    whatsappMessage: "Hello, I found your portfolio and would like to talk about a website.",
    /**
     * Optional form backend (for example a Formspree endpoint such as
     * "https://formspree.io/f/xxxxxxx"). When empty, the contact form opens
     * the visitor's email app with their message filled in.
     */
    formEndpoint: "",
    /** Typical reply time. Keep it honest. */
    responseTime: "I usually reply within one working day.",
  },

  hero: {
    headline: ["Websites that earn", "trust before", "the first call."],
    intro:
      "I design and build fast, considered websites for businesses in Somaliland and around the world.",
  },

  projects: [
    {
      slug: "rssa",
      title: "RSSA",
      summary: "Logistics website concept for a shipping agency at the Port of Berbera.",
      description:
        "A self-initiated redesign concept for Red Sea Service Agency. The aim: make a complex service (booking cargo and releasing containers at Berbera) feel clear for importers in Somaliland and Ethiopia, with a quote request one tap away on every screen.",
      kind: "concept",
      status: "live",
      url: "https://rssa-concept-preview.vercel.app/",
      sector: "Logistics & shipping",
      scope: ["Art direction", "UX & content structure", "Responsive design", "Front-end development"],
      images: {
        desktop: "/work/rssa-home.webp",
        mobile: "/work/rssa-mobile.webp",
        alt: "RSSA concept website homepage: a container ship at sea with the headline Bringing the world to Somaliland.",
        details: [
          {
            src: "/work/rssa-steps.webp",
            alt: "RSSA concept: a four-step container release guide with a documents checklist.",
            caption: "Container release explained in four steps, with the documents checklist beside it.",
          },
          {
            src: "/work/rssa-brand.webp",
            alt: "RSSA concept: brand moment set on shipping container doors with the line Your cargo. Our port.",
            caption: "A brand moment built from the container itself.",
          },
        ],
      },
    },
    {
      slug: "hotel",
      title: "Hotel website",
      summary: "A booking-focused website concept for a hotel.",
      description:
        "Rooms, photography and a direct enquiry path, designed to turn visitors into guests. Demo in progress.",
      kind: "concept",
      status: "in-progress",
      url: null,
      sector: "Hospitality",
      scope: ["Design", "Development"],
    },
    {
      slug: "education",
      title: "Education consultancy",
      summary: "A website concept for a study-abroad and education consultancy.",
      description:
        "Clear programme pages and a simple consultation request for students and parents. Demo in progress.",
      kind: "concept",
      status: "in-progress",
      url: null,
      sector: "Education",
      scope: ["Design", "Development"],
    },
  ] as Project[],

  services: [
    {
      title: "Website design",
      body: "Layout, typography, colour and content structure shaped around what your customers need to find and do.",
    },
    {
      title: "Website development",
      body: "Hand-built with modern tools (Next.js, TypeScript). Fast to load, easy to find on Google, simple to keep running.",
    },
    {
      title: "Redesigns",
      body: "Your current site, rethought. Clearer message, better structure, and a design that matches the business you are today.",
    },
    {
      title: "Responsive, mobile-first websites",
      body: "Most visitors arrive on a phone, often on mobile data. Every page is designed for the small screen first and kept light.",
    },
    {
      title: "Maintenance",
      body: "Updates, fixes, new pages and content changes after launch, so the site stays accurate and working.",
    },
  ],

  about: {
    lead: "One person, start to finish.",
    paragraphs: [
      "I am an independent web designer and developer. I work directly with each client, from the first conversation to launch day and after, so nothing is lost between a designer, a developer and an account manager.",
      "I build for businesses here in Somaliland and for clients abroad. Local businesses get someone who understands their customers and how they browse. International clients get a remote partner who communicates clearly and delivers on time.",
    ],
    principles: [
      { title: "Clarity first", body: "Visitors should understand what you do within seconds." },
      { title: "Built to load fast", body: "Light pages that respect slow connections and small data plans." },
      { title: "Honest work", body: "Clear scope, clear pricing, and you own your website." },
    ],
  },

  process: [
    {
      title: "Discovery",
      body: "We talk about your business, your customers and what the website must achieve. I map the pages and content it needs.",
    },
    {
      title: "Design",
      body: "I design the key pages, desktop and mobile. You review real layouts with your real content, and we refine together.",
    },
    {
      title: "Development",
      body: "I build the site, tune it for speed, accessibility and search, and test it on phones, tablets and desktops.",
    },
    {
      title: "Launch",
      body: "We go live on your domain. I handle the setup and stay on hand for changes and maintenance afterwards.",
    },
  ],

  contactSection: {
    headline: ["Have a project", "in mind?"],
    body: "Tell me about your business and what you need. Whether you are across town or across the world, the first conversation is free.",
  },
};

export type Site = typeof site;

export const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
export const emailHref = `mailto:${site.contact.email}`;
