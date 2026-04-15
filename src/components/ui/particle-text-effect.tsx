"use client"

import { useEffect, useRef } from "react"

/* ───────────────────────── Types ───────────────────────── */

interface Vector2D {
  x: number
  y: number
}

/* ───────────────────────── Particle ───────────────────────── */

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }

  closeEnoughTarget = 100
  maxSpeed = 1.0
  maxForce = 0.1
  particleSize = 3
  isKilled = false

  startColor = { r: 0, g: 0, b: 0 }
  targetColor = { r: 0, g: 0, b: 0 }
  colorWeight = 0
  colorBlendRate = 0.01

  move() {
    let proximityMult = 1
    const dx = this.pos.x - this.target.x
    const dy = this.pos.y - this.target.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget
    }

    const toTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    }

    const mag = Math.sqrt(toTarget.x * toTarget.x + toTarget.y * toTarget.y)
    if (mag > 0) {
      toTarget.x = (toTarget.x / mag) * this.maxSpeed * proximityMult
      toTarget.y = (toTarget.y / mag) * this.maxSpeed * proximityMult
    }

    const steer = {
      x: toTarget.x - this.vel.x,
      y: toTarget.y - this.vel.y,
    }

    const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
    if (steerMag > 0) {
      steer.x = (steer.x / steerMag) * this.maxForce
      steer.y = (steer.y / steerMag) * this.maxForce
    }

    this.acc.x += steer.x
    this.acc.y += steer.y

    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    }

    const r = Math.round(
      this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight
    )
    const g = Math.round(
      this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight
    )
    const b = Math.round(
      this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight
    )

    ctx.fillStyle = `rgb(${r},${g},${b})`
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
  }
}

/* ──────────── Spawn position generators (3 styles) ──────────── */

function spawnSpiral(cx: number, cy: number, i: number, total: number): Vector2D {
  const angle = (i / total) * Math.PI * 8 + Math.random() * 0.4
  const radius = 500 + Math.random() * 250
  return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }
}

function spawnBurst(cx: number, cy: number): Vector2D {
  const angle = Math.random() * Math.PI * 2
  const r = Math.random() * 20
  return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r }
}

function spawnCascade(canvasW: number): Vector2D {
  return { x: Math.random() * canvasW, y: -(Math.random() * 400 + 60) }
}

/* ──────────── Color palette per line ──────────── */

const LINE_COLORS = [
  { r: 192, g: 132, b: 216 }, // soft lavender   — START
  { r: 165, g: 106, b: 189 }, // brand purple     — SOMETHING
  { r: 140, g: 80, b: 170 },  // deep magenta     — GREAT.
]

/* ──────────── Component ──────────── */

interface ParticleTextEffectProps {
  words?: string[]
  staggerDelay?: number
  className?: string
}

export function ParticleTextEffect({
  words = ["START", "SOMETHING", "GREAT."],
  staggerDelay = 1200,
  className = "",
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const lineParticlesRef = useRef<Particle[][]>([])
  const revealedRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0, isOver: false })

  const pixelSteps = 5

  const revealLine = (lineIndex: number, canvas: HTMLCanvasElement) => {
    const offscreen = document.createElement("canvas")
    offscreen.width = canvas.width
    offscreen.height = canvas.height
    const ctx = offscreen.getContext("2d")!

    const fontSize = Math.min(canvas.width * 0.14, 130)
    const lineHeight = fontSize * 1.15
    const totalTextH = lineHeight * words.length
    const startY = (canvas.height - totalTextH) / 2 + lineHeight / 2

    ctx.fillStyle = "white"
    ctx.font = `900 ${fontSize}px "Poppins", "Inter", Arial, sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(words[lineIndex], canvas.width / 2, startY + lineIndex * lineHeight)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data

    const color = LINE_COLORS[lineIndex % LINE_COLORS.length]
    const jitteredColor = {
      r: Math.min(255, Math.max(0, color.r + Math.floor(Math.random() * 30 - 15))),
      g: Math.min(255, Math.max(0, color.g + Math.floor(Math.random() * 30 - 15))),
      b: Math.min(255, Math.max(0, color.b + Math.floor(Math.random() * 30 - 15))),
    }

    const coords: number[] = []
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      if (pixels[i + 3] > 0) coords.push(i)
    }

    for (let i = coords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[coords[i], coords[j]] = [coords[j], coords[i]]
    }

    const cx = canvas.width / 2
    const cy = canvas.height / 2
    const particles: Particle[] = []

    for (let ci = 0; ci < coords.length; ci++) {
      const idx = coords[ci]
      const tx = (idx / 4) % canvas.width
      const ty = Math.floor(idx / 4 / canvas.width)

      const p = new Particle()
      let spawn: Vector2D
      switch (lineIndex % 3) {
        case 0: spawn = spawnSpiral(cx, cy, ci, coords.length); p.maxSpeed = Math.random() * 4 + 3; p.maxForce = p.maxSpeed * 0.04; break
        case 1: spawn = spawnBurst(cx, cy); p.maxSpeed = Math.random() * 7 + 5; p.maxForce = p.maxSpeed * 0.055; break
        case 2: spawn = spawnCascade(canvas.width); p.maxSpeed = Math.random() * 5 + 4; p.maxForce = p.maxSpeed * 0.045; break
        default: spawn = { x: cx, y: cy }; p.maxSpeed = 5; p.maxForce = 0.25
      }

      p.pos.x = spawn.x; p.pos.y = spawn.y; p.target.x = tx; p.target.y = ty
      p.particleSize = Math.random() * 3 + 2
      p.colorBlendRate = Math.random() * 0.02 + 0.004
      p.targetColor = jitteredColor
      particles.push(p)
    }

    lineParticlesRef.current[lineIndex] = particles
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = canvas?.parentElement
    if (!canvas || !wrapper) return

    let isVisible = false
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    }, { threshold: 0.1 })
    observer.observe(wrapper)

    const setCanvasSize = () => {
      const rect = wrapper.getBoundingClientRect()
      if (!rect) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setCanvasSize()
    lineParticlesRef.current = []
    revealedRef.current = 0

    let hasTriggered = false
    const timers: ReturnType<typeof setTimeout>[] = []

    const animate = () => {
      if (isVisible) {
        const ctx = canvas.getContext("2d")!
        ctx.save()
        ctx.globalCompositeOperation = "destination-out"
        ctx.fillStyle = "rgba(255, 255, 255, 0.16)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.globalCompositeOperation = "source-over"

        for (let li = 0; li < revealedRef.current; li++) {
          const particles = lineParticlesRef.current[li]
          if (!particles) continue
          for (const p of particles) {
            p.move()
            p.draw(ctx)
          }
        }

        if (mouseRef.current.isOver) {
          const { x: mx, y: my } = mouseRef.current
          for (let li = 0; li < revealedRef.current; li++) {
            const particles = lineParticlesRef.current[li]
            if (!particles) continue
            for (const p of particles) {
              const dx = p.pos.x - mx
              const dy = p.pos.y - my
              const dist = Math.sqrt(dx * dx + dy * dy)
              if (dist < 80 && dist > 0) {
                const force = (80 - dist) / 80
                p.vel.x += (dx / dist) * force * 3.5
                p.vel.y += (dy / dist) * force * 3.5
              }
            }
          }
        }
        ctx.restore()
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    const startReveal = () => {
      if (hasTriggered) return
      hasTriggered = true
      for (let i = 0; i < words.length; i++) {
        timers.push(setTimeout(() => {
          revealLine(i, canvas)
          revealedRef.current = i + 1
        }, i * staggerDelay))
      }
      animate()
    }

    const revealObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startReveal()
        revealObserver.disconnect()
      }
    }, { threshold: 0.25 })
    revealObserver.observe(wrapper)

    const handleResize = () => {
      setCanvasSize()
      if (hasTriggered) {
        for (let i = 0; i < words.length; i++) revealLine(i, canvas)
      }
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      mouseRef.current.x = (e.clientX - rect.left) * dpr
      mouseRef.current.y = (e.clientY - rect.top) * dpr
    }

    const handlePointerEnter = () => mouseRef.current.isOver = true
    const handlePointerLeave = () => mouseRef.current.isOver = false

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerenter", handlePointerEnter)
    canvas.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      observer.disconnect()
      revealObserver.disconnect()
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      timers.forEach(clearTimeout)
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerenter", handlePointerEnter)
      canvas.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [words, staggerDelay])

  return (
    <div className={`relative w-full ${className}`} style={{ minHeight: "clamp(320px, 45vw, 520px)" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
