'use client'

import { AnimatedText } from "@/components/ui/animated-text"

export default function HeroHeadline() {
  return (
    <div className="flex flex-col items-start gap-0">
      <AnimatedText
        text="WE BUILD"
        as="h1"
        duration={0.12}
        delay={0.1}
        className="items-start"
        textClassName="text-[clamp(3.8rem,10vw,11.5rem)] leading-[0.92] tracking-tighter text-[#F5EBFA]"
        underlineGradient="from-transparent to-transparent"
        underlineHeight="h-0"
        underlineOffset="-bottom-0"
      />
      <AnimatedText
        text="BRANDS"
        as="h1"
        duration={0.12}
        delay={1.4}
        className="items-start"
        textClassName="text-[clamp(4.5rem,12vw,13rem)] leading-[0.92] tracking-tighter"
        textStyle={{ WebkitTextStroke: '1px rgba(245,235,250,0.25)', color: 'rgba(245,235,250,0.15)' }}
        underlineGradient="from-transparent to-transparent"
        underlineHeight="h-0"
        underlineOffset="-bottom-0"
      />
      <AnimatedText
        text="THAT MOVE."
        as="h1"
        duration={0.12}
        delay={2.8}
        className="items-start"
        textClassName="text-[clamp(3.8rem,10vw,11.5rem)] leading-[0.92] tracking-tighter text-[#A56ABD]"
        underlineGradient="from-[#A56ABD] via-[#C084D8] to-[#6E3482]"
        underlineHeight="h-[2px] sm:h-[3px]"
        underlineOffset="-bottom-2 sm:-bottom-3"
      />
    </div>
  )
}
