"use client";

import { useRef } from "react";
import Link from "next/link";
import MarqueeBar from "@/components/ui/MarqueeBar";
import ServicesSection from "@/components/ui/services";
import { SimpleTree } from "@/components/ui/SimpleTree";
import { Gallery6 } from "@/components/ui/gallery6";
import { projects } from "@/lib/data/work";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import SectionLabel from "@/components/ui/SectionLabel";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { StaggerText } from "@/components/ui/stagger-text";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ─── 1.1 HERO ──────────────────────────── */}
      <section
        ref={containerRef}
        className="relative h-auto min-h-0 flex flex-col justify-start pt-[6rem] pb-6 md:pt-[6rem] md:pb-2 overflow-hidden"
      >
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
        <svg className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ zIndex: 1 }}>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <div className="relative z-10 w-full">
          <ParticleTextEffect words={["WE BUILD", "BRANDS", "THAT MOVE."]} className="w-full" />
        </div>

        {/* Buttons Group - Centered under headline */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 mb-16 md:-mt-[95px]">
          <Link
            href="/contact"
            className="font-poppins font-bold text-[0.8rem] tracking-[0.1em] px-10 py-4 transition-all duration-300 hover:scale-105"
            style={{ background: "var(--accent)", color: "var(--white)" }}
          >
            GET STARTED →
          </Link>
          <Link
            href="/contact"
            className="font-poppins font-bold text-[0.8rem] tracking-[0.1em] px-10 py-4 transition-all duration-300 border border-white/20 hover:bg-white/5"
            style={{ color: "var(--white)" }}
          >
            LET'S TALK
          </Link>
        </div>

        <div className="relative z-10 px-6 md:px-16 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-0">
            {/* Marketing Column */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--accent)] font-bold mb-3">
                MARKETING
              </div>
              <div className="font-poppins font-normal text-[0.95rem] leading-relaxed max-w-[480px]" style={{ color: "var(--muted)" }}>
                We are a <h1 className="inline text-[0.95rem] font-normal leading-relaxed m-0 p-0" style={{ color: "inherit", fontSize: "inherit" }}>digital marketing and software development company in Malappuram</h1> and we value the brands we work with a lot. We don’t just get things done, we partner with growing companies to create clarity, build confidence and move forward with intention.
              </div>
            </div>

            {/* Software Column */}
            <div className="flex flex-col items-start text-left">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--accent)] font-bold mb-3">
                SOFTWARE
              </div>
              <StaggerText
                text="We’re dedicated to making a big, positive difference from writing marketing that resonates with audiences to creating software that just works."
                direction="bottom"
                stagger={0.01}
                splitBy="words"
                className="font-poppins font-normal text-[0.95rem] leading-relaxed max-w-[480px]"
                style={{ color: "var(--muted)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1.2 MARQUEE BAR ───────────────────── */}
      <MarqueeBar />

      {/* ─── 1.3 ABOUT TEASER ──────────────────── */}
      <section className="section-border py-2 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 py-10">
          {/* LEFT */}
          <div>
            <SectionLabel text="Who We Are" />
            <div
              className="font-poppins font-[800] mt-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--white)" }}
            >
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.01}
                containerClassName="font-poppins font-[800] leading-tight"
              >
                {`We make the internet
work better
for your business.`}
              </VerticalCutReveal>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="flex flex-col justify-center gap-2">
            <StaggerText
              text="We are the best digital marketing and software development company in Malappuram where a dedicated team of strategists, developers and marketers really care about what we create. We don’t sell pre-made packages, but create growth systems tailored around your goals."
              direction="right"
              stagger={0.005}
              splitBy="words"
              className="relative font-poppins font-normal max-w-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            />
            <StaggerText
              text="What began as a small team in Kerala has grown into a partnership with clients in India and abroad. A Malappuram based best digital marketing and software development company that combines creative thinking with strong technical expertise to build solutions that make a real impact."
              direction="right"
              stagger={0.005}
              splitBy="words"
              className="relative font-poppins font-normal mt-2 max-w-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            />

            <div className="grid grid-cols-2 gap-8 mt-10 pr-[80px]">
              <AnimatedCounter target={10} suffix="+" label="Clients served" />
              <AnimatedCounter target={100} suffix="%" label="Dedication" />
            </div>
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
              staggerDuration={0.01}
              containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-4"
              style={{ color: "var(--white)" }}
            >
              What Makes Us a Go-To Digital Marketing & Software Development Company in Malappuram
            </VerticalCutReveal>
          </div>
          <StaggerText
            text="As a trusted digital marketing and software development company in Malappuram, we build complete digital systems instead of offering random solutions."
            direction="right"
            stagger={0.01}
            splitBy="words"
            className="relative font-poppins font-normal text-sm md:max-w-[320px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          />
        </div>

        {/* Services Grid */}
        <ServicesSection />
      </section>

      {/* ─── 1.5 WHY CHOOSE US ─────────────────── */}
      <section className="section-border py-12 px-6 md:px-16 overflow-hidden">
        <div className="mb-8">
          <SectionLabel text="Why Choose Us" />
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.01}
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
              text: "As a leading digital marketing and software development company in Malappuram, we start every project by deeply understanding your business goals, target audience, before a single line of code is written or a campaign goes live.",
            },
            {
              title: "Everything works together",
              text: "When your website, ads, and software don't connect, you lose time, money, and customers. We build them as one system so they work together. As a digital marketing and software development company in Malappuram, we've seen how much difference this makes for local businesses trying to grow.",
            },
            {
              title: "We care about real results",
              text: "Likes and impressions are nice. But what actually matters is whether your business is growing. We focus on the numbers that move your business forward which is leads, revenue, retention.",
            },
            {
              title: "Simple is always better",
              text: "We believe the best solutions are the ones that are easy to understand and easy to use. No fluff, no unnecessary complexity just clear communication and work that makes sense.",
            },
            {
              title: "We take ownership",
              text: "When we take on a project, it becomes ours too. We don't clock out at 5 and forget about it. We think about your business, we check in, and we care about getting it right.",
            },
            {
              title: "Big ambitions are welcome here",
              text: "It doesn't matter if you're just starting out or already scaling we're built for brands that want more. We've grown from a small team in Kerala to working with clients across India and beyond, and we bring that same hunger to every partnership.",
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
              <div className="relative text-xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors duration-300 block" style={{ color: "var(--white)" }}>
                {item.title}
              </div>
              <div className="relative text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 1.6 WORK SHOWCASE (HIDDEN) ─────────────────── */}
      {/* 
      <section className="section-border relative py-8 px-6 md:py-14 md:px-16 overflow-hidden">
        <SimpleTree />
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
      */}

      {/* ─── 1.6 TESTIMONIALS (HIDDEN) ──────────────────── */}
      {/* 
      <section className="section-border px-6 md:py-16 md:px-16 overflow-hidden">
        <div className=" text-center">
          <SectionLabel text="Wall of Trust" />
          <span className="flex flex-wrap whitespace-pre-wrap font-poppins font-[800] text-3xl md:text-5xl mt-4 w-full justify-center" style={{ color: "var(--white)" }}>
            The words of our partners.
          </span>
        </div>

        <div className="relative -mx-6 md:-mx-16">
          <StaggerTestimonials />
        </div>
      </section>
      */}

      {/* ─── 1.7 CTA BAND ─────────────────────── */}
      <section className="section-border relative py-12 md:py-8 px-6 md:px-16 text-center overflow-hidden">
        {/* Stacked text reveal */}
        <div className="relative z-0 flex flex-col items-center gap-2 md:gap-4">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            containerClassName="font-poppins font-[900] text-[clamp(3rem,10vw,8rem)] leading-[1] tracking-tighter justify-center"
            style={{ color: "var(--white)" }}
          >
            BUILD
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            containerClassName="font-poppins font-[900] text-[clamp(2.5rem,8vw,6.5rem)] leading-[1] tracking-tighter justify-center"
            style={{ color: "var(--accent)" }}
          >
            SOMETHING
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            containerClassName="font-poppins font-[900] text-[clamp(3rem,10vw,8rem)] leading-[1] tracking-tighter justify-center"
            style={{ color: "var(--accent-bright)" }}
          >
            THAT GROWS.
          </VerticalCutReveal>
        </div>

        {/* CTA buttons overlaid below the canvas */}
        <div className="relative z-10 mt-8">
          <SectionLabel text="Let’s build something that actually grows your business." />

          <StaggerText
            text="Whether you need a website, marketing, or a complete digital system—we’re here to make it simple and effective."
            direction="right"
            stagger={0.02}
            splitBy="words"
            className="relative font-poppins font-normal text-[1rem] mt-4 mb-8 max-w-2xl mx-auto leading-relaxed"
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
              href="/journal"
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
        </div>
      </section>
    </>
  );
}
