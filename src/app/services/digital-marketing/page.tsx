"use client";

import { useRef } from "react";
import Link from "next/link";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionLabel from "@/components/ui/SectionLabel";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { StaggerText } from "@/components/ui/stagger-text";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function DigitalMarketingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      num: "01",
      title: "Data-Driven SEO",
      text: "We don't just chase keywords. We build search engine dominance through technical optimization, content architecture, and authoritative link building."
    },
    {
      num: "02",
      title: "Conversion Advertising",
      text: "Aggressive, highly targeted campaigns across Meta, Google, and LinkedIn engineered exclusively for maximum ROI and cost-per-acquisition efficiency."
    },
    {
      num: "03",
      title: "Brand Identity",
      text: "Visual systems and messaging that position you as the premium choice in your market, transforming cold traffic into loyal brand advocates."
    },
    {
      num: "04",
      title: "Social Media Systems",
      text: "We automate and scale organic social presence. Creating viral, authentic content that builds trust and captures attention."
    }
  ];

  return (
    <>
      <CustomCursor />

      {/* ─── SPECIALIZED HERO SECITON ──────────────── */}
      <section
        ref={containerRef}
        className="relative h-auto md:min-h-[55dvh] flex flex-col justify-center pt-32 pb-16 overflow-hidden section-border"
      >
        <div className="absolute inset-0" style={{ background: "var(--black)" }} />
        <div className="absolute inset-0 grid-bg" style={{ zIndex: 0 }} />
        <div
          className="absolute animate-blob-pulse pointer-events-none"
          style={{
            top: "10%",
            right: "20%",
            width: "50vh",
            height: "50vh",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(165,106,189,0.15) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />
        
        <div className="relative z-10 px-6 md:px-16 mx-auto text-center w-full max-w-5xl">
          <SectionLabel text="Service details" />
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.04}
            containerClassName="font-poppins font-[900] text-3xl md:text-6xl mt-4 leading-tight justify-center text-[var(--white)]"
            style={{ color: "var(--white)" }}
          >
            Digital Marketing.
          </VerticalCutReveal>
          
          <div className="mt-8 mx-auto flex flex-col items-center justify-center">
            <StaggerText
              text="Metrics that matter. Growth systems that scale. We engineer the exact marketing infrastructure necessary to take your brand from obscurity to market dominance."
              direction="bottom"
              stagger={0.02}
              className="font-poppins font-normal text-lg md:text-xl max-w-3xl text-[var(--muted)] leading-relaxed text-center"
            />
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES GRID ─────────────────────── */}
      <section className="section-border py-20 px-6 md:py-32 md:px-16 relative overflow-hidden" style={{ background: "var(--black)" }}>
         {/* Subtle background element */}
         <div
          className="absolute left-0 bottom-0 pointer-events-none"
          style={{
            width: "50%",
            height: "100%",
            background: "radial-gradient(ellipse at 0% 100%, rgba(165,106,189,0.06), transparent 70%)",
          }}
        />

        <div className="mb-16 md:mb-24 relative z-10">
            <SectionLabel text="What's Included" />
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.05}
              containerClassName="font-poppins font-[800] text-3xl md:text-5xl mt-4 max-w-2xl"
              style={{ color: "var(--white)" }}
            >
              Our Growth Stack.
            </VerticalCutReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10 max-w-7xl mx-auto">
            {capabilities.map((item, i) => (
              <RevealOnScroll key={item.num} delay={i * 100}>
                <div
                  className="p-10 h-full transition-all duration-300 group"
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
                    <span className="font-poppins font-[900] text-2xl opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>{item.num}</span>
                  </div>
                  <h3 className="font-poppins font-bold text-2xl mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="font-poppins font-normal text-[1.05rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
        </div>
      </section>

      {/* ─── CTA BAND ─────────────────────────── */}
      <section className="section-border relative py-12 md:py-20 px-6 md:px-16 text-center overflow-hidden" style={{ background: "var(--black)" }}>
        <div className="relative z-0 flex flex-col items-center gap-2 md:gap-4 py-8 md:py-16">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            staggerFrom="center"
            containerClassName="font-poppins font-[900] text-[clamp(2.5rem,8vw,7rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--accent)" }}
          >
            DOMINATE
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            containerClassName="font-poppins font-[900] text-[clamp(2.5rem,8vw,6.5rem)] leading-[1] tracking-tighter"
            style={{ color: "var(--white)" }}
          >
            YOUR MARKET.
          </VerticalCutReveal>
        </div>

        <div className="relative z-10 mt-4 md:mt-8">
          <SectionLabel text="Next Steps" />

          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
              <Link
                href="/contact"
                className="font-poppins font-bold text-[0.9rem] tracking-[0.06em] px-10 py-4 transition-all duration-200 hover:opacity-90 rounded-full"
                style={{ background: "var(--accent)", color: "var(--white)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >
                REQUEST AUDIT →
              </Link>
              <Link
                href="/services"
                className="font-poppins font-bold text-[0.9rem] tracking-[0.06em] px-10 py-4 transition-colors duration-200 rounded-full"
                style={{
                  border: "1px solid rgba(165,106,189,0.3)",
                  color: "var(--white)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)")}
              >
                ALL SERVICES
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
