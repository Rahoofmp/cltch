"use client";

import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerText } from "@/components/ui/stagger-text";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function JournalPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ─── HERO SECTION ──────────────────────── */}
      <section
        ref={containerRef}
        className="relative h-auto min-h-0 flex flex-col justify-start pt-24 pb-10 overflow-hidden"
      >
        <div className="absolute inset-0" style={{ background: "var(--black)" }} />
        <div className="absolute inset-0 grid-bg" style={{ zIndex: 0 }} />

        <div
          className="absolute animate-blob-pulse pointer-events-none"
          style={{
            top: "-20%",
            left: "-10%",
            width: "60vh",
            height: "60vh",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(165,106,189,0.15) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 px-6 md:px-16">
          <div
            className="relative -mx-6 md:-mx-16"
            style={{ height: "clamp(220px, 30vw, 400px)" }}
          >
            <ParticleTextEffect
              words={["ART.", "CODE.", "SOUL."]}
              staggerDelay={1200}
            />
          </div>

          <div
            className="flex flex-col md:flex-row justify-between md:mt-0 gap-8 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <StaggerText
              text="A curated archive of our digital experiments, industry insights, and the technical obsession behind our best work."
              direction="right"
              stagger={0.02}
              className="font-poppins font-normal text-[1rem] max-w-[600px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
          </div>
        </div>
      </section>

      {/* ─── CONTENT TRANSITION ────────────────── */}
      <section className="section-border px-6 py-4  md:px-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <div className="mb-4">
              <SectionLabel text="The Archive" />
            </div>

            <div
              className="font-poppins font-[800] mt-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--white)" }}
            >
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.015}
                staggerFrom="first"
                containerClassName="font-poppins font-[800] leading-tight mb-2"
              >
                {`Stories of craft.`}
              </VerticalCutReveal>
            </div>

            <div className="mt-4">
              <StaggerText
                text="Our Work & Thoughts, Unified."
                direction="right"
                stagger={0.03}
                once={false}
                className="font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--accent)" }}
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 md:pt-14">
            <RevealOnScroll delay={100}>
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 w-fit">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                  Coming Soon: The Full Archive
                </span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="font-poppins text-[1.1rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                We are consolidating our project showcases and technical insights into a single, immersive stream. This is where the divide between strategy and execution disappears.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="font-poppins text-[1.1rem] leading-relaxed mb-4" style={{ color: "var(--accent-bright)" }}>
                Stay tuned as we reveal the underlying processes, challenges, and victories that shape our digital experiences.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
