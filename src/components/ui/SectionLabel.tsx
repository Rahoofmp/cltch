"use client";

import RevealOnScroll from "./RevealOnScroll";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <RevealOnScroll>
      <span className="inline-block font-poppins font-medium text-[0.75rem] tracking-[0.2em] uppercase text-[var(--accent)]">
        {text}
      </span>
    </RevealOnScroll>
  );
}
