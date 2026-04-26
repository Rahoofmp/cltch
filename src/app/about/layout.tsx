import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ClutchBlue | Our Story & Philosophy",
  description: "Learn about ClutchBlue, a full-stack agency based in Kerala. We bridge the gap between engineering excellence and high-conversion marketing.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
