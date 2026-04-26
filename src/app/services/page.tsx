"use client";

import { useRef } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerText } from "@/components/ui/stagger-text";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import AnimatedJobCardDemo from "@/components/ui/animated-card-demo";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomCursor />

      {/* ─── HERO SECITON ──────────────────────── */}
      <section
        ref={containerRef}
        className="relative min-h-[35vh] flex flex-col justify-end pt-20 pb-12 px-6 md:px-12 overflow-hidden section-border"
      >
        <div className="absolute inset-0" style={{ background: "var(--black)" }} />
        <div className="absolute inset-0 grid-bg" style={{ zIndex: 0 }} />
        <div
          className="absolute animate-blob-pulse pointer-events-none"
          style={{
            top: "10%",
            right: "10%",
            width: "40vh",
            height: "40vh",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(165,106,189,0.12) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 w-full md:mt-8">
          <SectionLabel text="What We Do" />

          <div
            className="relative -mx-6 md:-mx-16 mt-4 md:mt-8"
            style={{ height: "clamp(220px, 30vw, 400px)" }}
          >
            <ParticleTextEffect
              words={["BUILD.", "GROW.", "SCALE."]}
              staggerDelay={1200}
            />
          </div>

          <div className="mt-8">
            <StaggerText
              text="We provide comprehensive, end-to-end services focusing purely on impactful results."
              direction="bottom"
              stagger={0.02}
              className="font-poppins font-normal text-lg md:text-xl max-w-2xl text-[var(--muted)] leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* ─── CARDS DEMO SECTION ────────────────── */}
      <section className="relative py-10 md:py-20 px-6 md:px-12 overflow-hidden bg-background">
        <div className="max-w-6xl mx-auto mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <SectionLabel text="Core Expertise" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 tracking-tight">
                Engineering <span className="text-pink-500">Excellence</span>.
              </h2>
              <div className="h-1 w-16 bg-pink-500 rounded-full mb-6" />
              <p className="text-lg text-white/60 leading-relaxed font-light mb-6">
                At ClutchBlue, we don't just build websites; we engineer digital legacies. 
                Our methodology is rooted in the convergence of high-performance logic 
                and cinematic aesthetics, ensuring every pixel serves a purpose.
              </p>
            </div>
            <div className="space-y-4 md:pt-14">
              <p className="text-sm text-white/40 leading-relaxed">
                As a leading technical agency in Kozhikode, we specialize in high-performance 
                <span className="text-white/70 font-semibold"> Next.js development</span>, 
                <span className="text-white/70 font-semibold"> Laravel enterprise solutions</span>, 
                and <span className="text-white/70 font-semibold"> Growth-oriented SEO strategies</span>. 
                Our team delivers scalable, secure, and visually stunning web applications 
                tailored for the modern digital landscape.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Software Solutions", "Cloud Architecture", "UI/UX Design", "Digital Strategy"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatedJobCardDemo />
        
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <p className="text-sm text-white/40 uppercase tracking-[0.3em] font-bold">
            Curated Talent • Cinematic Focus • Impactful Growth
          </p>
        </div>
      </section>
    </>
  );
}
