import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Allison } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import Motion from "@/components/Motion";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

/** Hand-written signature above the footer wordmark. */
const signature = Allison({ variable: "--font-signature", subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  // Origin only: Next adds the base path itself to file-based images like the share image.
  metadataBase: new URL(new URL(site.url).origin),
  title: {
    default: `${site.name} · Web design & development, Somaliland and worldwide`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "web designer Somaliland",
    "web developer Somaliland",
    "website design Somaliland",
    "freelance web designer",
    "Next.js developer",
    "responsive website design",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: "en",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  areaServed: [{ "@type": "Country", name: "Somaliland" }, "Worldwide"],
  serviceType: site.services.map((s) => s.title),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable} ${signature.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-ink-0"
        >
          Skip to content
        </a>
        {children}
        <Motion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
