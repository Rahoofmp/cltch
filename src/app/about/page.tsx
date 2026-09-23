"use client";

import { useRef } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { StaggerText } from "@/components/ui/stagger-text";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
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
        <div className="relative z-10 px-6 md:px-16 ">
          {/* <StaggerText
            text="Our Story"
            direction="bottom"
            stagger={0.03}
            className="font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase mt-4"
            style={{ color: "var(--accent)" }}
          /> */}

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
            className="flex flex-col md:flex-row justify-between md:mt-0 gap-8 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <StaggerText
              text="We don&apos;t just build websites. We build brands from zero to hero. We offer digital marketing solutions, branding, software development, and websites — everything you need under one roof."
              direction="right"
              stagger={0.02}
              className="font-poppins font-normal text-[1rem] max-w-[600px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY & PHILOSOPHY ──────────── */}
      <section className="section-border px-6 py-4  md:pb-2 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="mb-4">
              <SectionLabel text="The Philosophy" />
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
                {`Technology meets imagination.`}
              </VerticalCutReveal>
            </div>

            <div className="">
              <StaggerText
                text="Big ideas. Smart marketing. Solid software. We help ambitious brands scale without limits."
                direction="right"
                stagger={0.03}
                once={false}
                className="font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--accent)" }}
              />
            </div>



          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <RevealOnScroll delay={100}>
              <p className="font-poppins text-[1.1rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                It all started in Kerala with a simple observation: most marketing agencies didn&apos;t really understand how the technology behind a product works, and most software teams didn&apos;t know how to effectively market what they built. That gap made things harder for businesses than it needed to be.
              </p>
              <p className="font-poppins text-[1.1rem] leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
                So, we decided to do things differently.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="font-poppins text-[1.1rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                Today, <strong style={{ color: "var(--white)" }}>ClutchBlue</strong> works right at the intersection of strong engineering and smart, high-converting marketing. By bringing both under one roof, we remove the usual disconnect between building a product and actually getting it in front of the right people.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="font-poppins text-[1.1rem] leading-relaxed mb-4" style={{ color: "var(--accent-bright)" }}>
                We focus on building fast, creating designs that grab attention, and crafting strategies that are directly tied to real business growth — not just numbers that look good on paper.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE VALUES ──────────────────────── */}
      <section className="section-border px-6 py-6 md:px-16 relative overflow-hidden">
        {/* Subtle background element */}
        <div
          className="absolute right-0 top-0 pointer-events-none"
          style={{
            width: "50%",
            height: "100%",
            background: "radial-gradient(ellipse at 100% 50%, rgba(165,106,189,0.06), transparent 70%)",
          }}
        />

        <div className="mb-8 md:mb-14 relative z-10 text-center flex flex-col items-center">
          <SectionLabel text="What Drives Us" />
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.015}
            staggerFrom="first"
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
              text: "We don&apos;t settle for &quot;good enough.&quot; It&apos;s the small details that make the biggest difference, and we make sure every part of our work reflects that.",
            },
            {
              num: "02",
              title: "Transparency",
              text: "We believe in being open and honest. You&apos;ll always know what we&apos;re doing, why we&apos;re doing it, and how it helps your business grow.",
            },
            {
              num: "03",
              title: "Adaptability",
              text: "Things change fast in the digital world, and we&apos;re built for that. We stay flexible, adjust quickly, and make sure your business keeps moving forward.",
            },
            {
              num: "04",
              title: "Impact First",
              text: "We focus on what actually matters — real results. Everything we do is aimed at helping your business grow, not just showing numbers that look impressive.",
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
                <div
                  className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-lg font-bold transition-all duration-500 group-hover:scale-110 font-poppins"
                  style={{ background: "rgba(165,106,189,0.1)", color: "var(--accent)" }}
                >
                  {i + 1}
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
      <section className="section-border py-8 px-6 md:py-16 md:px-16 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-5xl mx-auto pr-[80px]">
          <RevealOnScroll delay={0}>
            <AnimatedCounter target={2} suffix="+" label="Years in Business" delay={0} />
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <AnimatedCounter target={10} suffix="+" label="Projects Delivered" delay={150} />
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <AnimatedCounter target={5} suffix="" label="Talented Minds" delay={300} />
          </RevealOnScroll>
          <RevealOnScroll delay={450}>
            <AnimatedCounter target={100} suffix="%" label="Client Satisfaction" delay={450} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 5. CTA BAND ─────────────────────────── */}
      <section className="section-border relative py-12 md:py-8 px-6 md:px-16 text-center overflow-hidden">
        {/* Stacked text reveal */}
        <div className="relative z-0 flex flex-col items-center gap-2 md:gap-4">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            containerClassName="font-poppins font-[900] text-[clamp(3rem,10vw,8rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--white)" }}
          >
            LET&apos;S
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            staggerFrom="center"
            containerClassName="font-poppins font-[900] text-[clamp(2.5rem,8vw,6.5rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--accent)" }}
          >
            BUILD
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            staggerFrom="last"
            reverse={true}
            containerClassName="font-poppins font-[900] text-[clamp(3rem,10vw,8rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--accent-bright)" }}
          >
            TOGETHER.
          </VerticalCutReveal>
        </div>

        {/* CTA buttons overlaid below the canvas */}
        <div className="relative z-10 mt-8">
          <SectionLabel text="Your Turn" />

          <RevealOnScroll delay={200}>
            <StaggerText
              text="Ready to take your business to the next level? Whether you need a fresh brand identity, a high-performance website, or a complete scale-up strategy—we&apos;re building the future together."
              direction="right"
              stagger={0.02}
              className="font-poppins font-normal text-[1rem] mt-4 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
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
