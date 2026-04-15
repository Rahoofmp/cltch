"use client";

import { useRef } from "react";
import Link from "next/link";
import HeroHeadline from "@/components/ui/HeroHeadline";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import MarqueeBar from "@/components/ui/MarqueeBar";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CustomCursor from "@/components/ui/CustomCursor";
import ServicesSection from "@/components/ui/services";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { SimpleTree } from "@/components/ui/SimpleTree";
import { Gallery6 } from "@/components/ui/gallery6";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { StaggerText } from "@/components/ui/stagger-text";
import { MorphingTextReveal } from "@/components/ui/morphing-text-reveal";
import { projects } from "@/lib/data/work";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomCursor />

      {/* ─── 1.1 HERO ──────────────────────────── */}
      <section
        ref={containerRef}
        className="relative h-auto min-h-0 md:min-h-[100dvh] flex flex-col justify-start md:justify-center pt-[11vh] pb-6 md:pt-32 md:pb-2 overflow-hidden"
      >
        {/* bg layers */}
        <div className="absolute inset-0" style={{ background: "var(--black)" }} />
        <div className="absolute inset-0 grid-bg" style={{ zIndex: 0 }} />
        <div
          className="absolute animate-blob-pulse pointer-events-none"
          style={{
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(165,106,189,0.12) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
        {/* noise */}
        <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* content */}
        <div className="relative z-10 pb-10 pl-6 pr-6 md:pl-16 md:pr-16">
          <StaggerText
            text="Digital Marketing · Software Development · Kerala"
            direction="bottom"
            stagger={0.03}
            className="font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase"
            style={{ color: "var(--accent)" }}
          />

          <HeroHeadline />

          <div
            className="flex flex-col md:flex-row md:items-end justify-between mt-10 gap-8 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <StaggerText
              text="A full-stack creative agency powering ambitious brands with precision marketing and bulletproof software."
              direction="bottom"
              stagger={0.02}
              className="font-poppins font-normal text-[1rem] max-w-[360px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            />

            <div className="flex items-center gap-4">
              <div className="h-[1px] animate-line-grow" style={{ background: "var(--muted)" }} />
              <StaggerText
                text="Scroll to explore"
                direction="right"
                stagger={0.04}
                className="font-poppins font-normal text-[0.75rem] tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ color: "var(--muted)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1.2 MARQUEE BAR ───────────────────── */}
      <MarqueeBar />

      {/* ─── 1.3 ABOUT TEASER ──────────────────── */}
      <section className="section-border py-20 px-6 md:py-32 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT */}
          <div>
            <SectionLabel text="Who We Are" />
            <div
              className="font-poppins font-[800] mt-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--white)" }}
            >
              <MorphingTextReveal
                text="We make the internet"
                morphSpeed={55}
                glitchOnHover={true}
                className="font-poppins font-[800] leading-tight"
                style={{ fontSize: "inherit", color: "inherit" }}
              />
              <div className="flex items-baseline gap-[0.3em]">
                <MorphingTextReveal
                  text="work"
                  morphSpeed={50}
                  glitchOnHover={true}
                  className="font-poppins font-[800] leading-tight"
                  style={{ fontSize: "inherit", color: "inherit" }}
                />
                <MorphingTextReveal
                  text="harder"
                  morphSpeed={45}
                  glitchOnHover={true}
                  className="font-poppins font-[800] leading-tight italic"
                  style={{ fontSize: "inherit", color: "var(--accent)" }}
                />
              </div>
              <MorphingTextReveal
                text="for your business."
                morphSpeed={60}
                glitchOnHover={true}
                className="font-poppins font-[800] leading-tight"
                style={{ fontSize: "inherit", color: "inherit" }}
              />
            </div>
            <StaggerText
              text="We're a lean, obsessive team of strategists, developers, and marketers. We don't sell packages — we build growth systems."
              direction="bottom"
              stagger={0.02}
              className="font-poppins font-normal mt-8 max-w-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
            <StaggerText
              text="From a startup in Kerala to clients across India and beyond, we combine creative fire with technical depth."
              direction="left"
              stagger={0.02}
              className="font-poppins font-normal mt-4 max-w-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            />

            <RevealOnScroll delay={300}>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <AnimatedCounter target={50} suffix="+" label="Clients served" delay={0} />
                <AnimatedCounter target={98} suffix="%" label="Client retention" delay={150} />
                <AnimatedCounter target={4} suffix="x" label="Avg. ROI delivered" delay={300} />
                <AnimatedCounter target={3} suffix="yrs" label="Of focused craft" delay={450} />
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT — value-prop cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                num: "01",
                title: "Strategy First, Always",
                text: "Every project starts with a deep diagnostic. We research, map, and plan before a single pixel or line of code.",
              },
              {
                num: "02",
                title: "Built to Convert",
                text: "Beautiful is table stakes. We build digital experiences optimized for real-world outcomes: leads, sales, and retention.",
              },
              {
                num: "03",
                title: "Full-Stack Capability",
                text: "Marketing without tech is noise. Tech without marketing is invisible. We deliver both — under one roof.",
              },
            ].map((card, i) => (
              <RevealOnScroll key={card.num} delay={i * 120}>
                <div
                  className="p-8 transition-all duration-300"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)";
                    e.currentTarget.style.background = "rgba(165,106,189,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                >
                  <span className="block font-poppins font-[900] text-lg" style={{ color: "var(--accent)" }}>{card.num}</span>
                  <MorphingTextReveal
                    text={card.title}
                    morphSpeed={50}
                    glitchOnHover={true}
                    className="font-poppins font-bold text-xl mt-2"
                    style={{ color: "var(--white)" }}
                  />
                  <StaggerText
                    text={card.text}
                    direction="bottom"
                    stagger={0.015}
                    className="font-poppins font-normal text-sm mt-3 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 1.4 SERVICES PREVIEW ──────────────── */}
      <section className="section-border py-20 px-6 md:py-32 md:px-16">
        {/* header row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <div>
            <SectionLabel text="What We Do" />
            <MorphingTextReveal
              text="Six ways we accelerate growth."
              morphSpeed={50}
              glitchOnHover={true}
              className="font-poppins font-[800] text-3xl md:text-5xl mt-4"
              style={{ color: "var(--white)" }}
            />
          </div>
          <StaggerText
            text="End-to-end digital services, from strategy to software to scale."
            direction="right"
            stagger={0.03}
            className="font-poppins font-normal text-sm md:max-w-[260px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          />
        </div>

        {/* Services Grid */}
        <ServicesSection />
      </section>

      {/* ─── 1.5 WORK SHOWCASE ─────────────────── */}
      <section className="section-border relative py-20 px-6 md:py-32 md:px-16 overflow-hidden">
        {/* Generative Background */}
        <SimpleTree />

        {/* Background Shade for visibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(165,106,189,0.08) 0%, transparent 70%)"
          }}
        />

        <div className="relative z-10">
          <SectionLabel text="Selected Work" />
          <Gallery6
            heading="Results that speak."
            items={projects}
          />
        </div>
      </section>

      {/* ─── 1.6 TESTIMONIALS ──────────────────── */}
      <section className="section-border py-12 px-6 md:py-16 md:px-16 overflow-hidden">
        <div className="mb-12 text-center">
          <SectionLabel text="Wall of Trust" />
          <MorphingTextReveal
            text="The words of our partners."
            morphSpeed={50}
            glitchOnHover={true}
            className="font-poppins font-[800] text-3xl md:text-5xl mt-4"
            style={{ color: "var(--white)" }}
          />
        </div>

        <div className="relative -mx-6 md:-mx-16">
          <StaggerTestimonials />
        </div>
      </section>

      {/* ─── 1.7 CTA BAND ─────────────────────── */}
      <section className="section-border relative py-12 md:py-20 px-6 md:px-16 text-center overflow-hidden">
        {/* Particle text canvas background */}
        <div className="relative z-0">
          <ParticleTextEffect
            words={["START", "SOMETHING", "GREAT."]}
            staggerDelay={1200}
          />
        </div>

        {/* CTA buttons overlaid below the canvas */}
        <div className="relative z-10 mt-8">
          <SectionLabel text="Ready When You Are" />

          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
              <Link
                href="/contact"
                className="font-poppins font-bold text-[0.9rem] tracking-[0.06em] px-10 py-4 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--accent)", color: "var(--white)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >
                BOOK A FREE CALL →
              </Link>
              <Link
                href="/work"
                className="font-poppins font-bold text-[0.9rem] tracking-[0.06em] px-10 py-4 transition-colors duration-200"
                style={{
                  border: "1px solid rgba(165,106,189,0.3)",
                  color: "var(--white)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)")}
              >
                SEE OUR WORK
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
