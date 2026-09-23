"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { VerticalCutReveal } from "./vertical-cut-reveal";

const services = [
  {
    id: "software",
    title: "Software",
    subtitle: "Development",
    description: "We build bulletproof software. From enterprise React applications to complex backend architectures, we engineer systems that scale effortlessly.",
    image: "/software_service_bg.png",
    href: "/services/software-solutions",
    icon: <Code2 className="w-8 h-8" />,
    color: "rgba(59, 130, 246, 0.5)", // Blue
    accent: "var(--blue-400)",
  },
  {
    id: "marketing",
    title: "Digital",
    subtitle: "Marketing",
    description: "Results-driven growth. We combine SEO dominance with high-impact motion graphics and lead generation systems that actually move the needle.",
    image: "/marketing_service_bg.png",
    href: "/services/digital-marketing",
    icon: <Megaphone className="w-8 h-8" />,
    color: "rgba(165, 106, 189, 0.5)", // Pink/Purple
    accent: "var(--accent)",
  },
];

export default function DualServiceShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[700px] md:h-[550px] flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10 bg-black">
      {services.map((service, index) => {
        const isHovered = hoveredId === service.id;
        const isOtherHovered = hoveredId !== null && !isHovered;

        return (
          <motion.div
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setHoveredId(hoveredId === service.id ? null : service.id)}
            className={cn(
              "relative h-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer",
              // Mobile flex (vertical)
              hoveredId === null ? "flex-[1]" : isHovered ? "flex-[3.5]" : "flex-[1]",
              // Desktop flex (horizontal)
              "md:flex-grow",
              hoveredId === null ? "md:flex-[1]" : isHovered ? "md:flex-[1.8]" : "md:flex-[0.2]"
            )}
          >
            {/* Background Image */}
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
                filter: isOtherHovered ? "grayscale(1) blur(2px)" : "grayscale(0) blur(0px)",
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 z-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
              }}
            />

            {/* Overlays */}
            <div
              className="absolute inset-0 z-10 transition-opacity duration-700"
              style={{
                background: `linear-gradient(to bottom, transparent, ${isHovered ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.6)'})`,
              }}
            />

            {/* Hover Glow */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color} 0%, transparent 80%)`,
                  }}
                />
              )}
            </AnimatePresence>

            <div className={cn(
              "relative z-30 h-full flex flex-col p-6 md:p-12 transition-all duration-500",
              isHovered ? "justify-center" : "justify-end"
            )}>
              <motion.div
                animate={{ y: isHovered ? (window.innerWidth < 768 ? 0 : -20) : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-white"
                  style={{ color: isHovered ? service.accent : 'white' }}
                >
                  {service.icon}
                </div>

                <div className="">
                  <h3 className="mt-3 font-poppins font-black text-3xl md:text-5xl text-white leading-none tracking-tighter">
                    {service.title}
                  </h3>
                  <h4 className="font-poppins font-light text-xl md:text-2xl text-white/60 leading-none mt-1">
                    {service.subtitle}
                  </h4>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/70 max-w-[90%] md:max-w-sm text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold tracking-tight hover:bg-gray-200 transition-colors"
                      >
                        EXPLORE {service.title.toUpperCase()} <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Divider (only for first card on desktop) */}
            {index === 0 && (
              <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/10 z-40" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
