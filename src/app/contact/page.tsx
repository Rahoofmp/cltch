"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionLabel from "@/components/ui/SectionLabel";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { StaggerText } from "@/components/ui/stagger-text";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Note: Credentials will be updated by user later
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_USER_ID"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <>
      <CustomCursor />

      {/* ─── HERO SECTION ──────────────────────── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-16 overflow-hidden text-center">
        <div className="absolute inset-0" style={{ background: "var(--black)" }} />
        <div className="absolute inset-0 grid-bg opacity-30" style={{ zIndex: 0 }} />

        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          <SectionLabel text="Start a Conversation" />

          <div
            className="relative -mx-6 md:-mx-16 mt-4 md:mt-8 mb-4 md:mb-10 w-[100vw] max-w-[100vw]"
            style={{ height: "clamp(180px, 40vw, 400px)" }}
          >
            <ParticleTextEffect
              words={["LET'S", "TALK", "GROWTH."]}
              staggerDelay={1000}
            />
          </div>



          <div className="mt-6 md:mt-8 flex justify-center">
            <StaggerText
              text="Have a vision? We have the engineering and marketing expertise to bring it to life. Fill out the form below or reach out via WhatsApp."
              direction="bottom"
              stagger={0.015}
              className="font-poppins font-normal text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-2xl text-center"
            />
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM SECTION ──────────────── */}
      <section className="section-border py-20 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6">Direct Channels</h3>
              <div className="space-y-8">
                <RevealOnScroll delay={100}>
                  <div className="group cursor-pointer">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Email us</p>
                    <a href="mailto:clutchbluelimited@gmail.com" className="text-1xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      clutchbluelimited@gmail.com
                    </a>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                  <div className="group cursor-pointer">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Call / WhatsApp</p>
                    <a href="tel:+919400847436" className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      +91 9400 847 436
                    </a>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                  <div className="group cursor-pointer">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold text-white leading-tight">
                      Kozhikode, Kerala,<br />India
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6">Social Connection</h3>
              <div className="flex gap-6">
                {["Instagram", "Twitter", "LinkedIn", "GitHub"].map((social, i) => (
                  <a key={social} href="#" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm shadow-2xl">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Project Interest</label>
                  <select
                    name="project_type"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors [&>option]:bg-black"
                  >
                    <option value="software">Software Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="design">UI/UX & Branding</option>
                    <option value="both">Full Digital Stack</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full mt-8 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-50 group overflow-hidden relative"
                >
                  <span className="relative z-10">
                    {status === "sending" ? "Sending Obsession..." : "Dispatch Inquiry →"}
                  </span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                {status === "success" && (
                  <p className="text-green-500 text-sm font-medium mt-4 animate-fade-up">
                    Thank you. We've received your inquiry and will reach out shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium mt-4 animate-fade-up">
                    Something went wrong. Please try again or reach out via WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
