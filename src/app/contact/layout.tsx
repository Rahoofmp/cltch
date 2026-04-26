import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Digital Journey",
  description: "Ready to scale? Contact ClutchBlue for premium software development and digital marketing services. Based in Kozhikode, Kerala.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
