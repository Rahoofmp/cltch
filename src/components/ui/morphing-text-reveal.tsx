"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

interface MorphingTextRevealProps {
  /** Single text to reveal with morph effect on scroll */
  text: string
  className?: string
  /** Speed of each character morph step in ms */
  morphSpeed?: number
  /** Trigger glitch scramble on hover */
  glitchOnHover?: boolean
  /** Custom inline style */
  style?: React.CSSProperties
}

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*░▒▓█"

function getRandomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

export function MorphingTextReveal({
  text,
  className,
  morphSpeed = 60,
  glitchOnHover = true,
  style,
}: MorphingTextRevealProps) {
  const [displayText, setDisplayText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasRevealed, setHasRevealed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /** Morph from scrambled characters to the target text */
  const morphReveal = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)

    const target = text
    const len = target.length

    // Start with fully scrambled text
    let step = 0
    const totalSteps = len

    const tick = () => {
      if (step <= totalSteps) {
        let result = ""
        for (let i = 0; i < len; i++) {
          if (i < step) {
            result += target[i] // resolved character
          } else {
            // Still scrambling — mix of random chars
            result += Math.random() > 0.4 ? getRandomChar() : target[i]
          }
        }
        setDisplayText(result)
        step++
        animFrameRef.current = setTimeout(tick, morphSpeed)
      } else {
        setDisplayText(target)
        setIsAnimating(false)
        setHasRevealed(true)
      }
    }

    tick()
  }, [text, morphSpeed, isAnimating])

  /** Reset to hidden state */
  const resetState = useCallback(() => {
    if (animFrameRef.current) clearTimeout(animFrameRef.current)
    setDisplayText("")
    setIsAnimating(false)
    setHasRevealed(false)
  }, [])

  /** Scroll-triggered reveal via IntersectionObserver */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          morphReveal()
        } else {
          resetState()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (animFrameRef.current) clearTimeout(animFrameRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** Hover glitch effect */
  const handleMouseEnter = () => {
    if (!glitchOnHover || !hasRevealed) return
    setIsHovered(true)

    // Quick glitch scramble then settle
    const target = text
    let glitchSteps = 0
    const maxGlitchSteps = 4

    const glitchTick = () => {
      if (glitchSteps < maxGlitchSteps) {
        let result = ""
        for (let i = 0; i < target.length; i++) {
          result += Math.random() > 0.6 ? getRandomChar() : target[i]
        }
        setDisplayText(result)
        glitchSteps++
        setTimeout(glitchTick, 50)
      } else {
        setDisplayText(target)
        setIsHovered(false)
      }
    }

    glitchTick()
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block select-none", className)}
      style={style}
      onMouseEnter={handleMouseEnter}
    >
      <span
        className={cn(
          "transition-all duration-200",
          isHovered && "glitch-effect",
        )}
      >
        {(() => {
          const words = (displayText || "").split(" ")
          let charIdx = 0
          return words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((char) => {
                const idx = charIdx++
                return (
                  <span
                    key={`${idx}-${char}`}
                    className={cn("inline-block", isAnimating && "morph-char")}
                    style={{ animationDelay: `${idx * 30}ms` }}
                  >
                    {char}
                  </span>
                )
              })}
              {wi < words.length - 1 && <span className="inline-block">{"\u00A0"}</span>}
              {(() => { charIdx++; return null })()}
            </span>
          ))
        })()}
      </span>

      {/* Typing cursor — visible during morph */}
      {isAnimating && (
        <span
          className="inline-block w-[2px] h-[0.85em] ml-0.5 align-middle"
          style={{
            background: "var(--accent)",
            animation: "pulse 0.6s ease-in-out infinite",
          }}
        />
      )}
    </div>
  )
}
