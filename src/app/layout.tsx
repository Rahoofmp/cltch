import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CustomCursor from "@/components/ui/CustomCursor";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A trusted digital marketing and software development company in Malappuram | Kerala",
  description:
    "Digital marketing and software development company in Malappuram offering SEO, web design,software development, branding, and business growth solutions.",
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
    title: "A trusted digital marketing and software development company in Malappuram | Kerala",
    description:
      "Digital marketing and software development company in Malappuram offering SEO, web design,software development, branding, and business growth solutions.",
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
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.ico", color: "#a56abd" },
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
  telephone: "+917356357436", // User should update with actual contact if needed
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KP0QR784NC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KP0QR784NC');
          `}
        </Script>

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
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
