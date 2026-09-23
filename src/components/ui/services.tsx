'use client'

import React from 'react';
import { services } from "@/lib/data/services";
import { StaggerText } from "@/components/ui/stagger-text";


const ServicesSection = () => {
  // Map icons/data from services but use image pairs for the new design
  // In a real app, these would come from the service data itself.
  const serviceImages = [
    {
      image: "/no 1 software development company in malappuram.webp",
      overlayImage: "/software development and digital marketing agency.webp",
      alt: "Professional developers building custom systems at the leading software development company in malappuram.",
      overlayAlt: "High-quality source code for robust digital solutions."
    },
    {
      image: "/best Digital marketing agency in malappuram.webp",
      overlayImage: "/best smm agency in malappuram.webp",
      alt: "Expert team executing growth strategies at the best digital marketing agency in malappuram.",
      overlayAlt: "Data-driven marketing performance metrics."
    },
    {
      image: "/branding agency in malappuram.webp",
      overlayImage: "/trusted digital marketing and software company in malappuram.webp",
      alt: "Creative designers crafting visual identities at our premier branding agency in malappuram.",
      overlayAlt: "Professional branding and design workspace."
    },
    {
      image: "/no 1 digital marketing and software development company in malappuram.webp",
      overlayImage: "/digital marketing and software development company in malappuram.webp",
      alt: "Comprehensive business growth managed by the no 1 digital marketing and software development company in malappuram.",
      overlayAlt: "Strategic digital management and planning."
    },
  ];

  return (
    <div className="w-full font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
        {services.map((service, index) => (
          <div
            key={service.slug}
            className="group relative flex flex-col h-[380px] transition-all duration-500 rounded-2xl overflow-hidden border border-[var(--border)]"
            style={{ background: "var(--surface)" }}
          >
            {/* Image Container */}
            <div className="relative flex-grow flex items-center justify-center p-8 mt-4">
              {/* Back Image */}
              <div className="absolute w-48 h-32 rounded-xl overflow-hidden shadow-2xl transform -rotate-12 transition-all duration-500 ease-in-out group-hover:rotate-[-18deg] group-hover:scale-110 opacity-80 border border-white/10">
                <img
                  src={serviceImages[index]?.image}
                  alt={serviceImages[index]?.alt}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
              {/* Front Image */}
              <div className="absolute w-48 h-32 rounded-xl overflow-hidden shadow-2xl transform rotate-6 transition-all duration-500 ease-in-out group-hover:rotate-[12deg] group-hover:scale-110 z-10 border border-white/20">
                <img
                  src={serviceImages[index]?.overlayImage}
                  alt={serviceImages[index]?.overlayAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(165,106,189,0.1) 0%, transparent 70%)" }} />
            </div>

            {/* Content area */}
            <div className="p-8 pt-0 relative z-20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[0.7rem] font-[900] tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                  {service.number}
                </span>
                <div className="h-[1px] w-8 translate-y-[1px]" style={{ background: "var(--border)" }} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2" style={{ color: "var(--white)" }}>
                {service.title}
              </h3>
              <StaggerText
                text={service.description}
                direction="right"
                stagger={0.02}
                className="text-sm font-normal leading-relaxed"
                style={{ color: "var(--muted)" }}
              />
            </div>

            {/* Hover Overlay Strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: "var(--accent)" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
