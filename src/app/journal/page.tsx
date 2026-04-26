"use client";

import { useRef } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerText } from "@/components/ui/stagger-text";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function JournalPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomCursor />

      {/* ─── HERO SECTION ──────────────────────── */}
      <section
        ref={containerRef}
        className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-20 px-6 md:px-16 overflow-hidden"
      >
        <div className="absolute inset-0" style={{ background: "var(--black)" }} />
        <div className="absolute inset-0 grid-bg opacity-40" style={{ zIndex: 0 }} />
        
        {/* Generative ambient glow */}
        <div
          className="absolute animate-blob-pulse pointer-events-none"
          style={{
            top: "10%",
            right: "-5%",
            width: "50vh",
            height: "50vh",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(165,106,189,0.1) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 w-full">
          <SectionLabel text="The Journal" />

          <div
            className="relative -mx-6 md:-mx-16 mt-6 mb-10"
            style={{ height: "clamp(250px, 40vw, 550px)" }}
          >
            <ParticleTextEffect
              words={["ART.", "CODE.", "SOUL."]}
              staggerDelay={1200}
            />
          </div>

          <div className="max-w-3xl">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.02}
              containerClassName="font-poppins font-[900] text-4xl md:text-7xl leading-tight tracking-tighter text-white"
            >
              STORIES OF CRAFT.
            </VerticalCutReveal>
            
            <div className="mt-8">
              <StaggerText
                text="A curated archive of our digital experiments, industry insights, and the technical obsession behind our best work."
                direction="bottom"
                stagger={0.02}
                className="font-poppins font-normal text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTENT TRANSITION ────────────────── */}
      <section className="section-border py-24 px-6 md:px-16 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll delay={200}>
                <div className="inline-block px-4 py-1 rounded-full border border-white/10 mb-8 bg-white/5">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                        Coming Soon: The Full Archive
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Our Work & Thoughts, <span className="text-accent">Unified</span>.
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-light mb-10">
                    We are consolidating our project showcases and technical insights into a single, 
                    immersive stream. This is where the divide between strategy and execution disappears.
                </p>
                <div className="h-[1px] w-24 bg-accent mx-auto" />
            </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
