"use client";

import { useRef } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CustomCursor from "@/components/ui/CustomCursor";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { StaggerText } from "@/components/ui/stagger-text";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomCursor />

      {/* ─── 1. HERO ──────────────────────────── */}
      <section
        ref={containerRef}
        className="relative h-auto min-h-0 flex flex-col justify-start pt-24 pb-10 overflow-hidden"
      >
        {/* bg layers */}
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
        {/* noise */}
        <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterAbout">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterAbout)" />
        </svg>

        {/* content */}
        <div className="relative z-10 px-6 md:px-16 md:mt-8">
          <StaggerText
            text="Our Story"
            direction="bottom"
            stagger={0.03}
            className="font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase mt-4"
            style={{ color: "var(--accent)" }}
          />

          <div
            className="relative -mx-6 md:-mx-16"
            style={{ height: "clamp(220px, 30vw, 400px)" }}
          >
            <ParticleTextEffect
              words={["BOLD", "DIGITAL", "VISION."]}
              staggerDelay={1200}
            />
          </div>

          <div
            className="flex flex-col md:flex-row justify-between mt-6 md:mt-0 gap-8 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <StaggerText
              text="We don&apos;t just build websites. We build brands from zero to hero. We offer digital marketing solutions, branding, software development, and websites — everything you need under one roof."
              direction="bottom"
              stagger={0.02}
              className="font-poppins font-normal text-[1rem] md:text-[1.25rem] max-w-[600px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY & PHILOSOPHY ──────────── */}
      <section className="section-border py-20 px-6 md:py-32 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <SectionLabel text="The Philosophy" />
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.03}
              containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-6 leading-tight"
            >
              Technology meets imagination.
            </VerticalCutReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <RevealOnScroll delay={100}>
              <p className="font-poppins text-[1.1rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                It started in Kerala with a simple premise: most marketing agencies didn&apos;t understand the underlying software architecture, and most software development houses didn&apos;t know how to market what they built. We saw the gap and decided to build something different.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="font-poppins text-[1.1rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                Today, <strong style={{ color: "var(--white)" }}>ClutchBlue</strong> operates at the exact intersection of robust engineering and high-conversion marketing. This unified approach prevents the common friction between building a product and actually selling it.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="font-poppins text-[1.1rem] leading-relaxed" style={{ color: "var(--accent-bright)" }}>
                We believe in code that moves fast, design that captures attention instantly, and strategies mapped directly to your bottom line.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE VALUES ──────────────────────── */}
      <section className="section-border py-20 px-6 md:py-32 md:px-16 relative overflow-hidden">
        {/* Subtle background element */}
        <div
          className="absolute right-0 top-0 pointer-events-none"
          style={{
            width: "50%",
            height: "100%",
            background: "radial-gradient(ellipse at 100% 50%, rgba(165,106,189,0.06), transparent 70%)",
          }}
        />

        <div className="mb-16 md:mb-24 relative z-10 text-center flex flex-col items-center">
          <SectionLabel text="What Drives Us" />
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.05}
            containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-4 max-w-2xl text-center"
            style={{ color: "var(--white)" }}
          >
            Our Core Principles.
          </VerticalCutReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          {[
            {
              num: "01",
              title: "Excellence",
              text: "Good isn&apos;t enough. We obsess over the details because the final 10% makes 90% of the impact.",
            },
            {
              num: "02",
              title: "Transparency",
              text: "No black boxes. We communicate openly, explaining the &apos;why&apos; behind every strategy and line of code.",
            },
            {
              num: "03",
              title: "Adaptability",
              text: "The digital landscape shifts rapidly. We build flexible systems ready to evolve with new market demands.",
            },
            {
              num: "04",
              title: "Impact First",
              text: "Vanity metrics don&apos;t pay the bills. Every action we take is targeted towards generating measurable growth.",
            },
          ].map((value, i) => (
            <RevealOnScroll key={value.num} delay={i * 100}>
              <div
                className="p-8 h-full transition-all duration-300 group"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)";
                  e.currentTarget.style.background = "rgba(165,106,189,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-poppins font-[900] text-xl opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>{value.num}</span>
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3 text-white">
                  {value.title}
                </h3>
                <p className="font-poppins font-normal text-[0.95rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {value.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ─── 4. STATS ROW ────────────────────────── */}
      <section className="section-border py-16 px-6 md:py-24 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-5xl mx-auto">
          <RevealOnScroll delay={0}>
            <AnimatedCounter target={5} suffix="+" label="Years in Business" delay={0} />
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <AnimatedCounter target={120} suffix="+" label="Projects Delivered" delay={150} />
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <AnimatedCounter target={15} suffix="" label="Talented Minds" delay={300} />
          </RevealOnScroll>
          <RevealOnScroll delay={450}>
            <AnimatedCounter target={98} suffix="%" label="Client Retention" delay={450} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 5. CTA BAND ─────────────────────────── */}
      <section className="section-border relative py-12 md:py-20 px-6 md:px-16 text-center overflow-hidden">
        <div className="relative z-0 flex flex-col items-center gap-2 md:gap-4 py-8 md:py-16">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            containerClassName="font-poppins font-[900] text-[clamp(2.5rem,8vw,7rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--white)" }}
          >
            LET&apos;S
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            staggerFrom="center"
            containerClassName="font-poppins font-[900] text-[clamp(2rem,7vw,6.5rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--accent)" }}
          >
            COLLABORATE
          </VerticalCutReveal>
        </div>

        <div className="relative z-10 mt-4 md:mt-8">
          <SectionLabel text="Your Turn" />

          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
              <Link
                href="/contact"
                className="font-poppins font-bold text-[0.9rem] tracking-[0.06em] px-10 py-4 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--accent)", color: "var(--white)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >
                START A PROJECT →
              </Link>
              <Link
                href="/"
                className="font-poppins font-bold text-[0.9rem] tracking-[0.06em] px-10 py-4 transition-colors duration-200"
                style={{
                  border: "1px solid rgba(165,106,189,0.3)",
                  color: "var(--white)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)")}
              >
                BACK TO HOME
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
