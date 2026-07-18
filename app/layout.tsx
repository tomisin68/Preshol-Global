import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import IconSprite from "@/components/IconSprite";
import { ngoSchema, founderSchema } from "@/lib/structured-data";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.presholGlobal.org"),
  title: "Preshol Global | Healing Hearts. Empowering Minds. Opening Doors Beyond Borders.",
  description:
    "Preshol Global is a non-profit founded by David Ademide Adebanjo, transforming lives through community mission interventions, mental health advocacy, and global opportunity guidance across 7 countries in Africa and beyond.",
  keywords: [
    "Preshol Global",
    "David Ademide Adebanjo",
    "David Adebanjo",
    "Preshol Global founder",
    "non-profit Africa",
    "mental health advocacy Nigeria",
    "community outreach Africa",
    "youth empowerment",
    "mission interventions",
    "global pathway guidance",
    "NGO Africa",
    "UN SDG Ambassador Nigeria",
    "Youth Creative Consortium",
  ],
  authors: [{ name: "David Ademide Adebanjo" }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.presholGlobal.org/",
    title: "Preshol Global | Healing Hearts. Empowering Minds. Opening Doors.",
    description:
      "Founded by David Ademide Adebanjo, Preshol Global is transforming lives across 7 countries through non-profit mission interventions, mental health advocacy, and global opportunity guidance.",
    images: [
      {
        url: "/images/hero/preshol-hero1.jpeg",
        width: 1280,
        height: 853,
        alt: "Preshol Global — community outreach across Africa",
      },
    ],
    locale: "en_NG",
    siteName: "Preshol Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preshol Global | Healing Hearts. Empowering Minds. Opening Doors.",
    description:
      "Non-profit transforming lives across Africa through outreach, mental health & global guidance.",
    images: ["/images/hero/preshol-hero1.jpeg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
