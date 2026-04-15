"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { testimonials as projectTestimonials } from '@/lib/data/testimonials';

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialCardProps {
  position: number;
  testimonial: typeof projectTestimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  // Calculate depth to manage z-index and opacity
  const depth = Math.abs(position);
  
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-700 font-poppins will-change-transform",
        isCenter 
          ? "text-white border-[var(--accent)]" 
          : "text-[var(--muted)] border-[var(--border)] hover:border-[var(--accent)]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        background: isCenter ? "var(--accent)" : "var(--surface)",
        zIndex: 10 - depth,
        opacity: depth > 3 ? 0 : 1 - depth * 0.2, // Fade out distant cards
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize * 0.75) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${1 - depth * 0.05})
        `,
        boxShadow: isCenter ? "0px 15px 40px rgba(165,106,189,0.4)" : "none",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 1,
          background: "var(--border)"
        }}
      />
      
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="h-12 w-12 flex items-center justify-center font-black text-lg border border-[var(--border)]"
          style={{ 
            background: isCenter ? "rgba(255,255,255,0.1)" : "var(--black)",
            color: isCenter ? "white" : "var(--accent)"
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <h4 className={cn("text-xs font-bold uppercase tracking-widest leading-tight", isCenter ? "text-white" : "text-[var(--white)]")}>
            {testimonial.name}
          </h4>
          <p className={cn("text-[0.65rem] uppercase tracking-wider", isCenter ? "text-white/80" : "text-[var(--muted)]")}>
            {testimonial.role}
          </p>
        </div>
      </div>

      <h3 className={cn(
        "text-[1rem] sm:text-[1.1rem] font-semibold leading-relaxed",
        isCenter ? "text-white" : "text-[var(--white)]"
      )}>
        &ldquo;{testimonial.quote}&rdquo;
      </h3>
      
      <div className={cn(
        "absolute bottom-8 left-8 right-8 flex gap-2 flex-wrap",
        isCenter ? "text-white/60" : "text-[var(--muted)]"
      )}>
        {testimonial.metrics.slice(0, 2).map(m => (
          <span key={m} className="text-[0.6rem] border border-current px-2 py-0.5 rounded-full uppercase tracking-tighter">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  // Give each item a unique stable ID for keying
  const [testimonialsList, setTestimonialsList] = useState(() => 
    [...projectTestimonials, ...projectTestimonials].map((t, i) => ({ ...t, id: `${t.name}-${i}` }))
  );

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        const item = newList.shift();
        if (item) newList.push(item);
      }
    } else {
      for (let i = 0; i < Math.abs(steps); i++) {
        const item = newList.pop();
        if (item) newList.unshift(item);
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600, background: "var(--black)" }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg" />

      {testimonialsList.map((testimonial, index) => {
        // Find the "center" index (we have 10 items total, let's say index 2 is center)
        // More robust: define center relative to current array position
        const position = index - 2; 
        
        // Only render visible range
        if (position < -3 || position > 3) return null;

        return (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-6 z-30">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--white)] transition-all hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--white)] transition-all hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
