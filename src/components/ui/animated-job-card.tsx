"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// --- PROPS INTERFACE ---
export interface JobCardProps {
  companyLogo: React.ReactNode;
  companyName: string;
  jobTitle: string;
  salary: string;
  tags: string[];
  postedDate: string;
  variant?: "pink" | "yellow" | "blue" | "purple";
  className?: string;
  onClick?: () => void;
  image?: string;
  href?: string;
  // Stacking props for demo
  baseRotation?: number;
  baseX?: number | string;
  baseY?: number | string;
  isCenter?: boolean;
}

// --- BORDER VARIANT STYLES ---
const variantClasses = {
  pink: "border-t-pink-500",
  yellow: "border-t-yellow-500",
  blue: "border-t-blue-500",
  purple: "border-t-purple-500",
};

/**
 * A responsive, premium job card with a 3D tilt effect on hover and smooth stacking transitions.
 */
export const AnimatedJobCard = ({
  companyLogo,
  companyName,
  jobTitle,
  salary,
  tags,
  postedDate,
  variant = "purple",
  className,
  onClick,
  image,
  href,
  baseRotation = 0,
  baseX = 0,
  baseY = 0,
  isCenter = false,
}: JobCardProps) => {
  const router = useRouter();

  // --- TILT ANIMATION LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isCenter && href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  // Transform mouse position into a 3D rotation
  // Tilt sensitivity is higher when at center
  const tiltRange = isCenter ? 15 : 5;
  const rotateX = useTransform(mouseY, [-200, 200], [tiltRange, -tiltRange]);
  const rotateY = useTransform(mouseX, [-200, 200], [-tiltRange, tiltRange]);

  // Apply spring physics for smooth return and stacking transitions
  const springConfig = { stiffness: 200, damping: 20, mass: 1 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <motion.div
      layout
      onClick={handleClick}
      initial={false}
      animate={{
        rotate: baseRotation,
        x: baseX,
        y: baseY,
        scale: isCenter ? 1.05 : 0.95,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        layout: { duration: 0.3 }
      }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full max-w-sm shrink-0 cursor-pointer overflow-hidden rounded-2xl p-5 md:p-6 shadow-xl transition-shadow duration-300",
        "bg-[#111] border border-white/10",
        "border-t-4",
        variantClasses[variant],
        isCenter ? "z-30 shadow-2xl" : "z-10 opacity-80",
        className
      )}
      aria-label={`Job opening: ${jobTitle} at ${companyName}`}
      tabIndex={0}
    >
      {/* Background Image with Dark Overlay */}
      {image && (
        <>
          <div 
            className="absolute inset-0 z-0 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
        </>
      )}

      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0" />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 space-y-4 md:space-y-5">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/5 text-white p-2">
            {companyLogo}
          </div>
          <span className="text-xs md:text-sm font-medium text-white/50">{companyName}</span>
        </div>

        {/* Job Details */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">{jobTitle}</h3>
          <p className="text-xs md:text-sm text-pink-400 mt-1 font-semibold">{salary}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-white/5 px-2 py-0.5 md:px-2.5 md:py-1 text-[9px] md:text-[10px] uppercase font-bold tracking-wider text-white/60 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-1 md:pt-2 flex items-center justify-between">
          <div className="h-[1px] flex-grow bg-white/5 mr-4" />
          <span className="text-[9px] md:text-[10px] font-medium text-white/30 uppercase tracking-widest whitespace-nowrap">
            {postedDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
