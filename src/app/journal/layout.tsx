import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal | Digital Experiments & Insights",
  description: "A curated archive of digital experiments, industry insights, and the technical obsession behind ClutchBlue's craft.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
