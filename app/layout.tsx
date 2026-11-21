import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Footer } from "@/components/editorial";
import { Navigation } from "@/components/navigation";
import { siteUrl, studio } from "@/lib/studio";
import "./globals.css";
import "./home-opening.css";

const bodyFont = localFont({
  src: "../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
  variable: "--body-type",
  display: "swap",
});

const editorialFont = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-normal.woff2", weight: "300 700", style: "normal" },
    { path: "../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--editorial-type",
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  metadataBase: siteUrl(),
  title: { default: "Studio Point Zero | Interior Design in Ahmedabad", template: "%s | Studio Point Zero" },
  description: studio.description,
  openGraph: { siteName: studio.name, type: "website", locale: "en_IN", description: studio.description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${bodyFont.variable} ${editorialFont.variable}`}>
      <body>
        <a href="#content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
