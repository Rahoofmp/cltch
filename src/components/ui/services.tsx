'use client'

import React from 'react';
import { services } from "@/lib/data/services";
import RevealOnScroll from "./RevealOnScroll";

const ServicesSection = () => {
  // Map icons/data from services but use image pairs for the new design
  // In a real app, these would come from the service data itself.
  const serviceImages = [
    {
      // Digital Marketing
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=512&h=512&fit=crop",
      overlayImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=512&h=512&fit=crop"
    },
    {
      // SEO & Content
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=512&h=512&fit=crop",
      overlayImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?w=512&h=512&fit=crop"
    },
    {
      // Web Development
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=512&h=512&fit=crop",
      overlayImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=512&h=512&fit=crop"
    },
    {
      // Mobile Apps
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=512&h=512&fit=crop",
      overlayImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=512&h=512&fit=crop"
    },
    {
      // Brand & UI/UX
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=512&h=512&fit=crop",
      overlayImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=512&h=512&fit=crop"
    },
    {
      // Automation & AI
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=512&h=512&fit=crop",
      overlayImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?w=512&h=512&fit=crop"
    }
  ];

  return (
    <div className="w-full font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <RevealOnScroll key={service.slug} delay={index * 100}>
            <div
              className="group relative flex flex-col h-[380px] transition-all duration-500 rounded-2xl overflow-hidden border border-[var(--border)]"
              style={{ background: "var(--surface)" }}
            >
              {/* Image Container */}
              <div className="relative flex-grow flex items-center justify-center p-8 mt-4">
                {/* Back Image */}
                <div className="absolute w-48 h-32 rounded-xl overflow-hidden shadow-2xl transform -rotate-12 transition-all duration-500 ease-in-out group-hover:rotate-[-18deg] group-hover:scale-110 opacity-80 border border-white/10">
                  <img
                    src={serviceImages[index]?.image}
                    alt={`${service.title} showcase`}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0"
                  />
                </div>
                {/* Front Image */}
                <div className="absolute w-48 h-32 rounded-xl overflow-hidden shadow-2xl transform rotate-6 transition-all duration-500 ease-in-out group-hover:rotate-[12deg] group-hover:scale-110 z-10 border border-white/20">
                  <img
                    src={serviceImages[index]?.overlayImage}
                    alt={`${service.title} example`}
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
                <p className="text-sm font-normal leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>
              </div>

              {/* Hover Overlay Strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                   style={{ background: "var(--accent)" }} />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
