/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Everything you are likely to change lives in this one file:
 *  business name, contact details, projects, services and copy.
 * ─────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  /** Short title, set very large. */
  title: string;
  /** Full name or longer title shown under the big title. */
  subtitle?: string;
  /** One-line description of what the site is. */
  summary: string;
  /** Short paragraph shown on the project spread. */
  description: string;
  /** "concept" = independent / self-initiated, "client" = commissioned work. */
  kind: "concept" | "client";
  /** "completed" shows the full project with a link. "in-progress" shows a placeholder, no link. */
  status: "completed" | "in-progress";
  /** Live demo URL. Leave null for in-progress projects. */
  url: string | null;
  sector: string;
  /** What you did on the project. */
  scope: string[];
  /** Images in /public (1600×956 desktop shots, 600×1208 phone shots). Leave out for in-progress projects. */
  images?: {
    desktop: string;
    mobile?: string;
    alt: string;
    /** Extra screenshots shown with the project (two work best). */
    details?: { src: string; alt: string; caption: string }[];
  };
};

export const site = {
  /** Temporary brand. Change this one value when you pick a business name. */
  name: "Digital Experience Designer",
  /** Short form used in tight spaces (navigation, browser tab). */
  shortName: "Digital Experience Designer",
  /** Optional: your own name. Shown in About when set. */
  ownerName: "",
  /** Where you are based. */
  location: "Somaliland",
  /** Live URL (SEO, sitemap, social cards). Set automatically on GitHub Pages; replace the fallback if you use your own domain. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",

  description:
    "Digital experience designer creating modern, high-quality websites for businesses in Somaliland and around the world.",

  contact: {
    /**
     * PLACEHOLDERS. Replace with your real details, then set
     * `isPlaceholder` to false to remove the on-page notice.
     */
    isPlaceholder: false,
    email: "aahmdnassirali@gmail.com",
    /** WhatsApp number in international format, digits only (no +, spaces or dashes). */
    whatsapp: "252634444837",
    /** How the number is displayed on the page. */
    whatsappDisplay: "+252 63 4444837",
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
    /** Each string is one line. Wrap a word in *asterisks* to set it in blue italic. */
    headline: ["Your Business", "Deserves a *Better*", "Website."],
    intro:
      "I design and build modern, high-quality websites that help businesses earn trust, communicate their value, and make a stronger impression online.",
    locationLine: "Based in Somaliland · Working worldwide",
  },

  projects: [
    {
      slug: "qetc",
      title: "QETC",
      subtitle: "QETC Education & Training Consultancy",
      summary: "A study-abroad platform for students from the Middle East and Africa heading to Malaysian universities.",
      description:
        "A full website for an education consultancy. Students search programmes across Malaysian universities, see fees in their own currency, and follow their offer, visa and arrival in one place, with an adviser consultation always close at hand.",
      kind: "client",
      status: "completed",
      url: "https://qetcme.com/",
      sector: "Education",
      scope: ["Website design", "Development", "Responsive build"],
      images: {
        desktop: "/work/qetc-home.webp",
        mobile: "/work/qetc-mobile.webp",
        alt: "QETC website homepage: the headline Your degree in Malaysia, from first search to first lecture, with a programme search bar and a graduate photo.",
        details: [
          {
            src: "/work/qetc-journey.webp",
            alt: "QETC website: the seven-step student journey from application to travel, above an adviser consultation form.",
            caption: "The student journey in seven steps, with an adviser form beside it.",
          },
          {
            src: "/work/qetc-city.webp",
            alt: "QETC website: Kuala Lumpur section with the city skyline at night and a live local clock.",
            caption: "Kuala Lumpur, introduced as the student's new home.",
          },
        ],
      },
    },
    {
      slug: "rssa",
      title: "RSSA",
      subtitle: "Red Sea Service Agency",
      summary: "A logistics website concept for a shipping agency at the Port of Berbera.",
      description:
        "An independent redesign concept. The aim: make a complex service (booking cargo and releasing containers at Berbera) feel clear for importers in Somaliland and Ethiopia, with a quote request one tap away on every screen.",
      kind: "concept",
      status: "completed",
      url: "https://rssa-concept-preview.vercel.app/",
      sector: "Logistics & shipping",
      scope: ["Art direction", "UX & content", "Responsive design", "Development"],
      images: {
        desktop: "/work/rssa-home.webp",
        mobile: "/work/rssa-mobile.webp",
        alt: "RSSA concept website homepage: a container ship at sea with the headline Bringing the world to Somaliland.",
        details: [
          {
            src: "/work/rssa-steps.webp",
            alt: "RSSA concept: a four-step container release guide with a documents checklist.",
            caption: "Container release, explained in four steps.",
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
      title: "Hotel",
      subtitle: "Hospitality website concept",
      summary: "A booking-focused website concept for a hotel.",
      description: "Rooms, atmosphere and a direct enquiry path, designed to turn visitors into guests.",
      kind: "concept",
      status: "in-progress",
      url: null,
      sector: "Hospitality",
      scope: ["Design", "Development"],
    },
  ] as Project[],

  services: [
    {
      title: "Website design",
      body: "Layout, typography and content structure shaped around what your customers need to find and do.",
    },
    {
      title: "Website development",
      body: "Hand-built with modern tools (Next.js, TypeScript). Reliable, secure and simple to keep running.",
    },
    {
      title: "Redesign",
      body: "Your current site, rethought: a clearer message, better structure, and a look that matches the business you are today.",
    },
    {
      title: "Performance & SEO foundations",
      body: "Fast-loading pages that work on mobile data, with the technical groundwork search engines expect.",
    },
    {
      title: "Maintenance",
      body: "Updates, fixes, new pages and content changes after launch, so the site stays accurate and working.",
    },
  ],

  /** Packages shown in the Pricing section. Prices in USD. */
  pricing: {
    /** Name used in the pre-filled WhatsApp message ("Hi Ahmednassir, ..."). */
    greetingName: "Ahmednassir",
    packages: [
      {
        name: "Basic",
        price: 250,
        featured: false,
        features: [
          "1-page website using the client’s own photos",
          "Call and WhatsApp buttons, enquiry form that sends to WhatsApp",
          "Fully mobile-friendly",
        ],
        terms: "1 round of revisions · Delivery in 7 days",
      },
      {
        name: "Standard",
        price: 400,
        featured: true,
        features: [
          "Everything in Basic",
          "Premium animated design with one signature feature",
          "Offers/photo gallery and Google Maps location",
          "Basic Google search setup",
        ],
        terms: "2 rounds of revisions · Delivery in 10 days",
      },
      {
        name: "Premium",
        price: 700,
        featured: false,
        features: [
          "Up to 5 pages (Home, Services, About/Team, Offers, Contact)",
          "Somali + English versions",
          "Google Business profile cleanup",
          "First month of updates free",
        ],
        terms: "3 rounds of revisions · Delivery in 14 days",
      },
    ],
    note: "Optional monthly updates: $30/month. Domain (about $15/year) is registered in the client’s name.",
  },

  about: {
    /** Wrap a phrase in *asterisks* to set it in blue italic. */
    statement:
      "I am a *digital experience* designer who designs and builds websites for businesses in Somaliland and around the world.",
    paragraphs: [
      "You work with me directly, from the first conversation to launch day and after. The person who designs your website is the person who builds it, so nothing gets lost in a hand-off.",
      "Local businesses get someone who understands their customers and how they browse. International clients get a remote partner who communicates clearly and keeps to agreed timelines.",
    ],
    facts: [
      { label: "Based in", value: "Somaliland" },
      { label: "Working with", value: "Local & international businesses" },
      { label: "Built with", value: "Next.js, TypeScript, Tailwind CSS" },
    ],
  },

  process: [
    {
      title: "Discovery",
      body: "We talk about your business, your customers and what the website must achieve. I map the pages and content it needs.",
    },
    {
      title: "Design",
      body: "I design the key pages for desktop and mobile. You review real layouts with your real content, and we refine together.",
    },
    {
      title: "Development",
      body: "I build the site and tune it for speed, accessibility and search, then test it on phones, tablets and desktops.",
    },
    {
      title: "Launch",
      body: "We go live on your domain. I handle the setup and stay available for changes and maintenance afterwards.",
    },
  ],

  contactSection: {
    /** Each string is one line. Wrap a word in *asterisks* to set it in blue italic. */
    headline: ["Let’s Build", "Something *Great*", "Together."],
    body: "Tell me about your business and what you need. Whether you are across town or across the world, the first conversation is free.",
  },
};

export type Site = typeof site;

export const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
export const emailHref = `mailto:${site.contact.email}`;

/** WhatsApp chat link with a message naming the chosen package. */
export const packageHref = (packageName: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    `Hi ${site.pricing.greetingName}, I'm interested in the ${packageName} website package.`,
  )}`;
