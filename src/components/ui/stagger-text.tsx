"use client"

import * as React from "react"
import { HTMLMotionProps, Transition, motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"
export type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"
export const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
})

interface WordProps {
  word: string
  transition?: Transition
  direction?: TransformDirectionType
}
const transitionConfig: Transition = { ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], duration: 0.5 }
function Word({
  word,
  transition = transitionConfig,
  direction = "bottom",
}: WordProps) {
  const characters = word.split("")
  return (
    <span className="inline-block text-nowrap align-top">
      {characters.map((char, index) => (
        <span key={index} className="inline-block">
          <motion.span
            className="inline-block"
            variants={transformVariants(direction)}
            transition={transition}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

interface staggerTextProps extends HTMLMotionProps<"div"> {
  text: string
  stagger?: number
  transition?: Transition
  direction?: TransformDirectionType
  className?: string
  once?: boolean
}
function StaggerText({
  text,
  stagger = 0.05,
  transition,
  direction,
  className,
  once = true,
  ...props
}: staggerTextProps) {
  const words = text.split(" ")
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: once,
    amount: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      transition={{ staggerChildren: stagger }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("relative", className)}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <Word transition={transition} direction={direction} word={word} />
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.div>
  )
}

export { StaggerText }
