import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Software Solutions & Digital Marketing",
  description: "Explore ClutchBlue's core expertise: Next.js development, Laravel solutions, UI/UX design, and growth-oriented SEO strategies in Kozhikode.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
