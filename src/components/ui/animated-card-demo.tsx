"use client";
import React, { useState } from "react";
import { AnimatedJobCard, JobCardProps } from "@/components/ui/animated-job-card";
import { Code2, Megaphone, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

// --- INITIAL DEMO DATA ---
const initialJobs: JobCardProps[] = [
  {
    companyLogo: <Megaphone className="w-8 h-8 text-pink-400" />,
    companyName: "ClutchBlue Marketing",
    jobTitle: "Digital Marketing",
    salary: "Growth & SEO Focus",
    tags: ["SEO", "Ads", "Content"],
    postedDate: "Explore Service",
    variant: "pink",
    image: "/marketing_bg.png",
    href: "/services/digital-marketing",
  },
  {
    companyLogo: <Code2 className="w-8 h-8 text-blue-400" />,
    companyName: "ClutchBlue Engineering",
    jobTitle: "Software Solution",
    salary: "Web & Mobile Dev",
    tags: ["Next.js", "Laravel", "APIs"],
    postedDate: "Explore Service",
    variant: "blue",
    image: "/tech_bg.png",
    href: "/services/software-solutions",
  },
  {
    companyLogo: <Palette className="w-8 h-8 text-yellow-400" />,
    companyName: "ClutchBlue Design",
    jobTitle: "UI/UX & Branding",
    salary: "Visual Identity",
    tags: ["Design", "Motion", "UX"],
    postedDate: "Explore Service",
    variant: "yellow",
    image: "/design_bg.png",
    href: "/services/software-solutions", // Design is often part of software solutions
  },
];

// --- DEMO COMPONENT ---
export default function AnimatedJobCardDemo() {
  const [cards, setCards] = useState(initialJobs);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define stacking parameters based on array index and screen size
  const getStackProps = (index: number) => {
    const xOffset = isMobile ? "25%" : "60%";
    const yOffset = isMobile ? 20 : 40;
    const rotation = isMobile ? 8 : 12;

    switch (index) {
      case 0: // Left card
        return { baseRotation: -rotation, baseX: `-${xOffset}`, baseY: yOffset, isCenter: false };
      case 1: // Center card
        return { baseRotation: 0, baseX: "0%", baseY: 0, isCenter: true };
      case 2: // Right card
        return { baseRotation: rotation, baseX: xOffset, baseY: yOffset, isCenter: false };
      default:
        return { baseRotation: 0, baseX: 0, baseY: 0, isCenter: false };
    }
  };

  const handleCardClick = (index: number) => {
    if (index === 1) return; // Already at center

    const newCards = [...cards];
    const clickedCard = newCards[index];
    const centerCard = newCards[1];

    // Swap clicked card with center card
    newCards[index] = centerCard;
    newCards[1] = clickedCard;

    setCards(newCards);
  };

  return (
    <div className="relative flex h-[450px] md:h-[550px] w-full items-center justify-center p-4 bg-background overflow-hidden">
      <div className="relative h-[510px] w-full max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
        {cards.map((job, index) => {
          const stackProps = getStackProps(index);
          return (
            <AnimatedJobCard
              key={`${job.companyName}-${job.jobTitle}`}
              {...job}
              {...stackProps}
              onClick={() => handleCardClick(index)}
              className="absolute left-0 right-0 top-1/4 mx-auto w-[85%] max-w-[320px] md:w-96 md:max-w-none"
            />
          );
        })}
      </div>
    </div>
  );
}
