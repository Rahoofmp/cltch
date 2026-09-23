"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { ReactLenis } from "@studio-freight/react-lenis"
import { useRef } from "react"

const projects = [
  {
    title: "Project 1",
    src: "/nophoto.png",
  },
  {
    title: "Project 2",
    src: "/nophoto.png",
  },
  {
    title: "Project 3",
    src: "/nophoto.png",
  },
  {
    title: "Project 4",
    src: "/nophoto.png",
  },
  {
    title: "Project 5",
    src: "/nophoto.png",
  },
]

const StickyCard = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  src: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15 + 200}px)`,
        }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-4xl relative -top-1/4 flex origin-top flex-col overflow-hidden
                   h-[200px] w-[280px] 
                   sm:h-[240px] sm:w-[360px] 
                   md:h-[280px] md:w-[420px] 
                   lg:h-[300px] lg:w-[500px]"
      >
        <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover shadow-2xl" />
      </motion.div>
    </div>
  )
}

const ImagesScrollingAnimation = ({ items = projects }: { items?: typeof projects }) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div
      ref={container}
      className="relative flex w-full flex-col items-center justify-center 
                                   pb-[30vh] pt-[5vh] 
                                   sm:pb-[40vh] sm:pt-[8vh] 
                                   lg:pb-[50vh] lg:pt-[10vh]"
    >
      {items.map((project, i) => {
        const targetScale = Math.max(0.6, 1 - (items.length - i - 1) * 0.08)
        return (
          <StickyCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}

export { ImagesScrollingAnimation, ReactLenis }
