"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"

const cardData = [
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
]

const StickyValueCard = ({
  i,
  num,
  title,
  text,
  progress,
  range,
}: {
  i: number
  num: string
  title: string
  text: string
  progress: MotionValue<number>
  range: [number, number, number, number]
}) => {
  const container = useRef<HTMLDivElement>(null)
  
  // Scale stays at 1 while focused, then dips slightly
  const scale = useTransform(progress, range, [1, 1, 1, 0.97])
  // Opacity: stay 1 while focused, fade to 0 as next card covers
  const opacity = useTransform(progress, range, [1, 1, 1, 0])

  return (
    <div ref={container} className="sticky top-[15vh] flex items-center justify-center mb-10 w-full first:mt-0 pointer-events-none">
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(10vh + ${i * 20}px)`,
          border: "1px solid var(--border)",
          background: "var(--surface)",
        }}
        className="w-full relative origin-top py-10 px-8 pointer-events-auto transition-all duration-300 shadow-2xl"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)";
          e.currentTarget.style.background = "rgba(165,106,189,0.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.background = "var(--surface)";
        }}
      >
        <span className="font-poppins font-[900] text-lg" style={{ color: "var(--accent)" }}>{num}</span>
        <h3 className="font-poppins font-bold text-xl mt-2" style={{ color: "var(--white)" }}>{title}</h3>
        <p className="font-poppins font-normal text-sm mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>{text}</p>
      </motion.div>
    </div>
  )
}

export const StickyCardsSection = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={container} className="relative flex flex-col w-full min-h-[250vh] pb-40">
      {cardData.map((card, i) => {
        // More compressed ranges to ensure fade-out happens while next card is visible
        const start = i * 0.2
        const entryEnd = start + 0.1
        const stayEnd = start + 0.15
        const exitEnd = start + 0.25
        
        const range: [number, number, number, number] = [
          Math.max(0, start),
          Math.min(1, entryEnd),
          Math.min(1, stayEnd),
          Math.min(1, exitEnd)
        ]

        return (
          <StickyValueCard
            key={card.num}
            i={i}
            {...card}
            progress={scrollYProgress}
            range={range}
          />
        )
      })}
    </div>
  )
}
