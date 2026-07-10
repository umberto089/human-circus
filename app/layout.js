import { Cormorant_Garamond, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}`, template: `%s — ${site.name}` },
  description: site.description,
  keywords: ["fotografo", "videomaker", "street photography", "ritratti", "Napoli", "Italia", "Human Circus"],
  authors: [{ name: site.author }],
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
