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
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { projects } from "@/lib/data/work";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomCursor />

      {/* ─── 1.1 HERO ──────────────────────────── */}
      <section
        ref={containerRef}
        className="relative h-auto min-h-0 flex flex-col justify-start pt-[11vh] pb-6 md:pt-32 md:pb-2 overflow-hidden"
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
        {/* noise overlay */}
        <svg className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ zIndex: 1 }}>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* content */}
        <div className="relative z-10  pl-6 pr-6 md:pl-16 md:pr-16 mt-4">
          <StaggerText
            text="Big ideas. Smart marketing. Solid software. We help ambitious brands scale without limits."
            direction="right"
            stagger={0.03}
            once={false}
            className="font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          />

          <div
            className="relative -mx-6 md:-mx-16"
            style={{ height: "clamp(120px, 25vw, 280px)" }}
          >
            <ParticleTextEffect
              words={["WE BUILD", "BRANDS", "THAT MOVE."]}
              staggerDelay={1200}
            />
          </div>

          <div
            className="flex flex-col md:flex-row md:items-end justify-between mt-4 gap-8 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <StaggerText
              text="We’re a full-stack creative agency helping ambitious brands grow through smart marketing and reliable, high-performance software."
              direction="right"
              stagger={0.02}
              once={false}
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
      <section className="section-border py-8 px-6 md:py-14 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT */}
          <div>
            <SectionLabel text="Who We Are" />
            <div
              className="font-poppins font-[800] mt-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--white)" }}
            >
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.015}
                staggerFrom="first"
                containerClassName="font-poppins font-[800] leading-tight"
              >
                {`We make the internet
work better
for your business.`}
              </VerticalCutReveal>
            </div>
            <StaggerText
              text="We’re a focused team of strategists, developers, and marketers who genuinely care about what we build. Instead of selling pre-made packages, we create tailored growth systems designed around your goals."
              direction="right"
              stagger={0.02}
              className="font-poppins font-normal mt-8 max-w-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
            <StaggerText
              text="What started as a small team in Kerala has grown into partnerships with clients across India and beyond. We blend creative thinking with strong technical expertise to build solutions that actually make an impact."
              direction="right"
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
                title: "We think before we build",
                text: "Every project starts with understanding your business, not jumping into execution.",
              },
              {
                num: "02",
                title: "Everything works together",
                text: "Your marketing, website, and software aren’t separate—they’re built as one connected system.",
              },
              {
                num: "03",
                title: "Focused on real results",
                text: "We don’t chase vanity metrics. We focus on leads, growth, and long-term impact.",
              },
              {
                num: "04",
                title: "Simple and transparent",
                text: "No unnecessary complexity. No confusing processes. Just clear communication and consistent progress.",
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
                  <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.015}
                    containerClassName="block font-poppins font-[900] text-lg"
                    style={{ color: "var(--accent)" }}
                  >
                    {card.num}
                  </VerticalCutReveal>
                  <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.015}
                    containerClassName="font-poppins font-bold text-xl mt-2"
                    style={{ color: "var(--white)" }}
                  >
                    {card.title}
                  </VerticalCutReveal>
                  <StaggerText
                    text={card.text}
                    direction="right"
                    stagger={0.02}
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
      <section className="section-border py-3 px-6 md:py-14 md:px-16">
        {/* header row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <div>
            <SectionLabel text="What We Do" />
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.015}
              containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-4"
              style={{ color: "var(--white)" }}
            >
              Everything you need. All in one place.
            </VerticalCutReveal>
          </div>
          <StaggerText
            text="We don’t offer random services we build complete digital systems that work together."
            direction="right"
            stagger={0.03}
            className="font-poppins font-normal text-sm md:max-w-[260px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          />
        </div>

        {/* Services Grid */}
        <ServicesSection />
      </section>

      {/* ─── 1.5 WHY CHOOSE US ─────────────────── */}
      <section className="section-border py-14 px-6 md:px-16 overflow-hidden">
        <div className="mb-16">
          <SectionLabel text="Why Choose Us" />
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.015}
            containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-4"
            style={{ color: "var(--white)" }}
          >
            Why businesses choose to work with us
          </VerticalCutReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "We think before we build",
              text: "Every project starts with understanding your business, not jumping into execution.",
              type: "stagger"
            },
            {
              title: "Everything works together",
              text: "Your website, your marketing, your software they shouldn't feel like three separate things stitched together. We build them as one connected system, so each part makes the others stronger.",
              type: "stagger"
            },
            {
              title: "We care about real results",
              text: "Likes and impressions are nice. But what actually matters is whether your business is growing. We focus on the numbers that move your business forward which is leads, revenue, retention.",
              type: "vertical"
            },
            {
              title: "Simple is always better",
              text: "We believe the best solutions are the ones that are easy to understand and easy to use. No fluff, no unnecessary complexity just clear communication and work that makes sense.",
              type: "stagger"
            },
            {
              title: "We take ownership",
              text: "When we take on a project, it becomes ours too. We don't clock out at 5 and forget about it. We think about your business, we check in, and we care about getting it right.",
              type: "vertical"
            },
            {
              title: "Big ambitions are welcome here",
              text: "It doesn't matter if you're just starting out or already scaling we're built for brands that want more. We've grown from a small team in Kerala to working with clients across India and beyond, and we bring that same hunger to every partnership.",
              type: "vertical"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 h-full transition-all duration-500 rounded-2xl border border-[var(--border)] hover:border-[rgba(165,106,189,0.3)]"
              style={{ background: "var(--surface)" }}
            >
              <div
                className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-lg font-bold transition-all duration-500 group-hover:scale-110"
                style={{ background: "rgba(165,106,189,0.1)", color: "var(--accent)" }}
              >
                {i + 1}
              </div>
              {item.type === "vertical" ? (
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.015}
                  containerClassName="text-xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors duration-300"
                  style={{ color: "var(--white)" }}
                >
                  {item.title}
                </VerticalCutReveal>
              ) : (
                <StaggerText
                  text={item.title}
                  direction="right"
                  stagger={0.02}
                  className="text-xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors duration-300 block"
                  style={{ color: "var(--white)" }}
                />
              )}

              <StaggerText
                text={item.text}
                direction="right"
                stagger={0.02}
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── 1.6 WORK SHOWCASE ─────────────────── */}
      <section className="section-border relative py-8 px-6 md:py-14 md:px-16 overflow-hidden">
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
      <section className="section-border px-6 md:py-16 md:px-16 overflow-hidden">
        <div className=" text-center">
          <SectionLabel text="Wall of Trust" />
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.015}
            containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-4 w-full justify-center"
            style={{ color: "var(--white)" }}
          >
            The words of our partners.
          </VerticalCutReveal>
        </div>

        <div className="relative -mx-6 md:-mx-16">
          <StaggerTestimonials />
        </div>
      </section>

      {/* ─── 1.7 CTA BAND ─────────────────────── */}
      <section className="section-border relative py-12 md:py-8 px-6 md:px-16 text-center overflow-hidden">
        {/* Stacked text reveal */}
        <div className="relative z-0 flex flex-col items-center gap-2 md:gap-4">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            containerClassName="font-poppins font-[900] text-[clamp(3rem,10vw,8rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--white)" }}
          >
            BUILD
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            staggerFrom="center"
            containerClassName="font-poppins font-[900] text-[clamp(2.5rem,8vw,6.5rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--accent)" }}
          >
            SOMETHING
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            staggerFrom="last"
            reverse={true}
            containerClassName="font-poppins font-[900] text-[clamp(3rem,10vw,8rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--accent-bright)" }}
          >
            THAT GROWS.
          </VerticalCutReveal>
        </div>

        {/* CTA buttons overlaid below the canvas */}
        <div className="relative z-10 mt-8">
          <SectionLabel text="Let’s build something that actually grows your business." />

          <RevealOnScroll delay={200}>
            <StaggerText
              text="Whether you need a website, marketing, or a complete digital system—we’re here to make it simple and effective."
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
