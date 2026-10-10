import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE = "https://www.hostelplate.live";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F3D3A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F3D3A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),

  title: {
    default:
      "Hostel Meal Prep Ideas: Budget Recipes and Plans for Students | HostelPlate",
    template: "%s | HostelPlate",
  },

  description:
    "Cheap, high-protein hostel meal prep ideas for Indian students. Weekly plans, kettle, induction and no-cook recipes with rupee prices and protein per meal.",

  keywords: [
    "hostel meal prep",
    "budget meals for students India",
    "high protein vegetarian meals under 100 rupees",
    "kettle recipes hostel",
    "no cook meals hostel",
    "hostel food ideas",
    "cheap healthy meals India",
    "student meal plan India",
    "soya chunks recipes",
    "hostel cooking without kitchen",
  ],

  authors: [{ name: "HostelPlate", url: BASE }],

  creator: "HostelPlate",
  publisher: "HostelPlate",

  category: "Food & Health",

  alternates: {
    canonical: `${BASE}/`,
    languages: {
      "en-IN": `${BASE}/`,
      "x-default": `${BASE}/`,
    },
  },

  openGraph: {
    siteName: "HostelPlate",
    locale: "en_IN",
    type: "website",
    url: `${BASE}/`,
    title:
      "Hostel Meal Prep Ideas: Budget Recipes and Plans for Students | HostelPlate",
    description:
      "Cheap, high-protein hostel meal prep ideas for Indian students. Weekly plans, kettle, induction and no-cook recipes with rupee prices and protein per meal.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HostelPlate — Budget meal prep for hostel students",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@hostelplate",
    creator: "@hostelplate",
    title:
      "Hostel Meal Prep Ideas: Budget Recipes and Plans for Students | HostelPlate",
    description:
      "Cheap, high-protein hostel meal prep ideas for Indian students. Weekly plans, kettle and no-cook recipes with rupee prices.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },

  manifest: "/manifest.webmanifest",

  // Uncomment and add verification codes when you have them:
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   bing: "your-bing-verification-code",
  // },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#org`,
      name: "HostelPlate",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/favicon.svg`,
        contentUrl: `${BASE}/favicon.svg`,
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#site`,
      url: BASE,
      name: "HostelPlate",
      description:
        "Cheap, high-protein hostel meal prep ideas for Indian students.",
      inLanguage: "en-IN",
      publisher: { "@id": `${BASE}/#org` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..60,500;12..60,700;12..60,800&family=Figtree:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical assets */}
        <link rel="preload" href="/og-image.png" as="image" />

        {/* Global JSON-LD: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
