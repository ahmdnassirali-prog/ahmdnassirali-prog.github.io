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
    /** Extra screenshots. The first one is used as the back layer of the hero showcase. */
    details?: { src: string; alt: string; caption: string }[];
  };
};

export const site = {
  /** Temporary brand. Change this one value when you pick a business name. */
  name: "Digital Experience Designer",
  /** Short form used in tight spaces (navigation, browser tab). */
  shortName: "Digital Experience Designer",
  /** Optional: your own name. Shown in About when set. */
  ownerName: "Ahmednassir Ali",
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
    greeting: ["Hello, I’m", "*Ahmednassir*."],
    role: "Web designer & developer",
    intro: "I’m a digital experience designer. I create new websites and refresh outdated ones for businesses that want to stand out online.",
    locationLine: "Based in Somaliland · Working worldwide",
    /** Your portrait, shown exactly as supplied (no cut-out, no retouching). */
    photo: {
      src: "/ahmednassir-portrait.webp",
      width: 1121,
      height: 1403,
      alt: "Ahmednassir Ali, web designer and developer, in a navy suit and red patterned tie.",
    },
    /** Short tags floating around the portrait. Keep them true. */
    tags: ["Website design", "Development", "Redesigns", "Somali + English"],
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

  /** Skills listed under About in the hero. */
  skills: {
    development: [
      "Website design (UI/UX)",
      "Mobile-first responsive builds",
      "Next.js & React",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp & enquiry form integration",
    ],
    seo: [
      "On-page SEO (titles, descriptions, headings)",
      "Technical SEO (sitemap, structured data)",
      "Page speed optimisation",
      "Google Search Console setup",
      "Google Business Profile",
      "Google Maps",
    ],
  },

  /** "3 things every website needs" section. */
  essentials: [
    { title: "Fast loading", body: "Pages open quickly, even on mobile data." },
    { title: "Modern design", body: "A clean, current look that earns trust at first glance." },
    { title: "SEO optimised", body: "Built so customers can find you on Google." },
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
      "Every site is fast, mobile-first and SEO-optimised, so customers find you on Google and reach you in one tap. You work with me directly, from the first idea to launch day.",
    ],
    facts: [
      { label: "Delivery", value: "7–14 days, depending on package" },
      { label: "Working with", value: "Local & international businesses" },
      { label: "Built with", value: "Next.js, React, TypeScript, Tailwind CSS, Vercel" },
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
    headline: ["If They Can’t Find You", "Online, They’ll Find", "*Your Competitor*."],
    body: "A professional website puts your business in front of customers searching on Google, day and night. Tell me what you need. The first conversation is free.",
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
