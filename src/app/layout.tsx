import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/ui/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grow N Co — Global Performance Marketing Agency",
    template: "%s | Grow N Co",
  },
  description:
    "Grow N Co is a global performance marketing agency with divisions in E-Commerce Marketing, Traditional Brand Marketing, and Talent Management.",
  keywords: [
    "performance marketing",
    "e-commerce marketing",
    "brand marketing",
    "talent management",
    "digital agency",
    "Africa",
    "Europe",
    "Americas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grownco.uk",
    siteName: "Grow N Co",
    title: "Grow N Co — Global Performance Marketing Agency",
    description:
      "A global performance marketing agency with three divisions: E-Commerce Marketing, Traditional Brand Marketing, and Talent Management.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow N Co — Global Performance Marketing Agency",
    description:
      "A global performance marketing agency operating across Africa, Europe, and the Americas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${dmMono.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
