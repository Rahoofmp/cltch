"use client"

import { useRef, useEffect, useCallback } from "react"

interface Vector2D {
  x: number
  y: number
}

interface Branch {
  position: Vector2D
  stw: number // strokeWidth
  gen: number // generation
  alive: boolean
  age: number
  angle: number
  speed: Vector2D
  index: number
  maxlife: number
  proba1: number
  proba2: number
  proba3: number
  proba4: number
  deviation: number
}

interface Tree {
  branches: Branch[]
  start: Vector2D
  coeff: number
  teinte: number // base hue
  index: number
  proba1: number
  proba2: number
  proba3: number
  proba4: number
}

export function SimpleTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const treeRef = useRef<Tree | null>(null)

  const maxlife = 18 

  const createVector = (x: number, y: number): Vector2D => ({ x, y })

  const random = (min?: number, max?: number): number => {
    if (min === undefined) return Math.random()
    if (max === undefined) return Math.random() * min
    return min + Math.random() * (max - min)
  }

  const createTree = (width: number, height: number): Tree => {
    const x = width / 2
    const y = height * 0.9 // Adjusted for section background
    const start = createVector(x, y)

    const tree: Tree = {
      branches: [],
      start,
      coeff: start.y / (height - 100),
      teinte: random(260, 280), // Purple/Magenta hues for Clutch Blue
      index: 0,
      proba1: random(0.75, 0.95),
      proba2: random(0.75, 0.95),
      proba3: random(0.45, 0.65),
      proba4: random(0.45, 0.65),
    }

    const trunk: Branch = {
      position: { ...start },
      stw: 25 * Math.sqrt(start.y / height),
      gen: 1,
      alive: true,
      age: 0,
      angle: 0,
      speed: createVector(0, -3.2),
      index: 0,
      maxlife: maxlife * random(0.7, 1.2),
      proba1: tree.proba1,
      proba2: tree.proba2,
      proba3: tree.proba3,
      proba4: tree.proba4,
      deviation: random(0.5, 0.8),
    }

    tree.branches.push(trunk)
    return tree
  }

  const createBranch = (
    start: Vector2D,
    stw: number,
    angle: number,
    gen: number,
    index: number,
    tree: Tree,
  ): Branch => ({
    position: { ...start },
    stw,
    gen,
    alive: true,
    age: 0,
    angle,
    speed: createVector(0, -3.2),
    index,
    maxlife: maxlife * random(0.5, 1.0),
    proba1: tree.proba1,
    proba2: tree.proba2,
    proba3: tree.proba3,
    proba4: tree.proba4,
    deviation: random(0.5, 0.8),
  })

  const hsbToRgb = (h: number, s: number, b: number, a = 1): string => {
    h = Math.max(0, Math.min(360, h)) / 360
    s = Math.max(0, Math.min(255, s)) / 255
    b = Math.max(0, Math.min(255, b)) / 255

    const c = b * s
    const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
    const m = b - c

    let r = 0, g = 0, bl = 0

    if (0 <= h && h < 1 / 6) { r = c; g = x; bl = 0 }
    else if (1 / 6 <= h && h < 2 / 6) { r = x; g = c; bl = 0 }
    else if (2 / 6 <= h && h < 3 / 6) { r = 0; g = c; bl = x }
    else if (3 / 6 <= h && h < 4 / 6) { r = 0; g = x; bl = c }
    else if (4 / 6 <= h && h < 5 / 6) { r = x; g = 0; bl = c }
    else if (5 / 6 <= h && h < 1) { r = c; g = 0; bl = x }

    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    bl = Math.round((bl + m) * 255)

    return `rgba(${r}, ${g}, ${bl}, ${a})`
  }

  const growBranch = (branch: Branch, tree: Tree) => {
    if (!branch.alive) return
    branch.age++
    if (branch.age >= Math.floor(branch.maxlife / branch.gen) || random(1) < 0.025 * branch.gen) {
      branch.alive = false
      if (branch.stw > 0.4 && branch.gen < 5) {
        const brs = tree.branches
        const pos = createVector(branch.position.x, branch.position.y)
        if (random(1) < branch.proba1 / Math.pow(branch.gen, 0.9)) {
          brs.push(createBranch(pos, branch.stw * random(0.5, 0.75), branch.angle + random(0.6, 1.0) * branch.deviation, branch.gen + 0.2, branch.index, tree))
        }
        if (random(1) < branch.proba2 / Math.pow(branch.gen, 0.9)) {
          brs.push(createBranch(pos, branch.stw * random(0.5, 0.75), branch.angle - random(0.6, 1.0) * branch.deviation, branch.gen + 0.2, branch.index, tree))
        }
      }
    } else {
      branch.speed.x += random(-0.15, 0.15)
    }
  }

  const displayBranch = (branch: Branch, tree: Tree, ctx: CanvasRenderingContext2D) => {
    const c = tree.coeff
    const x0 = branch.position.x
    const y0 = branch.position.y

    branch.position.x += -branch.speed.x * Math.cos(branch.angle) + branch.speed.y * Math.sin(branch.angle)
    branch.position.y += branch.speed.x * Math.sin(branch.angle) + branch.speed.y * Math.cos(branch.angle)

    const mainHue = tree.teinte + branch.age + 15 * branch.gen
    const mainSat = Math.min(180, 100 * c + 15 * branch.gen)
    const mainBright = Math.min(150, 70 + 12 * branch.gen)
    const mainColor = hsbToRgb(mainHue, mainSat, mainBright, (15 * c) / 100) // Lower opacity for background feel
    ctx.strokeStyle = mainColor
    const mainWidth = branch.stw - (branch.age / branch.maxlife) * (branch.stw * 0.4)
    ctx.lineWidth = Math.max(0.2, mainWidth)

    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(branch.position.x, branch.position.y)
    ctx.stroke()
  }

  const setup = useCallback(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    treeRef.current = createTree(canvas.width, canvas.height)
  }, [])

  const draw = useCallback(() => {
    if (!canvasRef.current || !treeRef.current) return
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return
    const tree = treeRef.current
    let hasAliveBranches = false
    tree.branches.forEach((branch) => {
      if (branch.alive) {
        hasAliveBranches = true
        growBranch(branch, tree)
        displayBranch(branch, tree, ctx)
      }
    })
    if (hasAliveBranches) {
      animationRef.current = requestAnimationFrame(draw)
    }
  }, [])

  useEffect(() => {
    setup()
    
    let isVisible = false
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    }, { threshold: 0.1 })
    
    if (canvasRef.current?.parentElement) {
      observer.observe(canvasRef.current.parentElement)
    }

    const runDraw = () => {
      if (isVisible) {
        draw()
      } else {
        animationRef.current = requestAnimationFrame(runDraw)
      }
    }
    
    runDraw()

    return () => {
      observer.disconnect()
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [setup, draw])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
      style={{ filter: "blur(2px)" }}
    />
  )
}
