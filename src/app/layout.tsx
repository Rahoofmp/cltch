import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ClutchBlue — Digital Marketing & Software Development Agency",
  description:
    "A full-stack creative agency powering ambitious brands with precision marketing and bulletproof software. Specialized in Web Development, Branding, and Digital Strategy.",
  metadataBase: new URL("https://clutchblue.com"),
  keywords: [
    "digital marketing agency Kerala",
    "software development company India",
    "web development services Kozhikode",
    "Branding agency Kerala",
    "UI/UX design services",
    "SEO services India",
    "ClutchBlue agency",
    "full-stack development Kerala",
  ],
  openGraph: {
    title: "ClutchBlue — Digital Marketing & Software Development Agency",
    description:
      "A full-stack creative agency powering ambitious brands with precision marketing and bulletproof software. Based in Kerala, India.",
    url: "https://clutchblue.com",
    siteName: "ClutchBlue",
    type: "website",
    images: [{ url: "https://clutchblue.com/og-image.jpg" }],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ClutchBlue",
  description:
    "A full-stack creative agency powering ambitious brands with precision marketing and bulletproof software.",
  url: "https://clutchblue.com",
  telephone: "+91XXXXXXXXXX", // User should update with actual contact if needed
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.2588",
    longitude: "75.7804",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  image: "https://clutchblue.com/og-image.jpg",
  sameAs: [
    "https://www.instagram.com/clutchblue/",
    "https://www.linkedin.com/company/clutchblue/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
