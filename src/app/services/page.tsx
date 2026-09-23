"use client";

import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerText } from "@/components/ui/stagger-text";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import DualServiceShowcase from "@/components/ui/DualServiceShowcase";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ─── HERO SECITON ──────────────────────── */}
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
              words={["BUILD.", "GROW.", "SCALE."]}
              staggerDelay={1200}
            />
          </div>

          <div
            className="flex flex-col md:flex-row justify-between md:mt-0 gap-8 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <StaggerText
              text="We provide comprehensive, end-to-end services focusing purely on impactful results."
              direction="right"
              stagger={0.02}
              className="font-poppins font-normal text-[1rem] max-w-[600px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
          </div>
        </div>
      </section>

      {/* ─── NEW SERVICE SHOWCASE SECTION ──────────── */}
      <section className="section-border relative py-3 px-6 md:px-16 overflow-hidden bg-black">
        <div className="mb-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <SectionLabel text="Our Core Pillars" />
              <h2 className="text-4xl md:text-6xl font-[900] text-white mt-4 tracking-tighter uppercase">
                Expertise <span className="text-[var(--accent)]">Refined</span>.
              </h2>
            </div>
            <div className="lg:col-span-6 md:pt-14">
              <p className="text-lg text-white/50 leading-relaxed font-light">
                We specialize in two core domains where technology meets growth.
                Whether you're looking for bulletproof engineering or aggressive digital scaling,
                we deliver solutions that are built for impact.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <DualServiceShowcase />
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center relative z-20">
          <p className="text-[0.7rem] text-white/30 uppercase tracking-[0.4em] font-bold">
            Software Solutions • Digital Marketing • Scalable Growth
          </p>
        </div>
      </section>
    </>
  );
}
