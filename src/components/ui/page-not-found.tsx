"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Combined component for 404 page
export default function NotFoundPage() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden flex justify-center items-center relative">
      <MessageDisplay />
      <CircleAnimation />
    </div>
  );
}

// 1. Message Display Component
function MessageDisplay() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute top-24 bottom-0 left-0 right-0 flex flex-col justify-center items-center px-4 z-40">
      <div 
        className={`flex flex-col items-center transition-opacity duration-1000 p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-[24px] md:text-[35px] font-semibold text-white/90 m-[1%]">
          Page Not Found
        </div>
        <div className="text-[60px] md:text-[120px] font-black text-white m-[1%] leading-none tracking-tighter">
          404
        </div>
        <div className="text-[14px] md:text-[16px] w-full max-w-md text-center text-white/60 m-[1%] px-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => router.back()}
            className="text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-500 ease-out px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Go Back
          </button>
          <Link
            href="/"
            className="bg-white text-black hover:bg-white/90 transition-all duration-500 ease-out px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:scale-110"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

// 3. Circle Animation Component
interface Circulo {
  x: number;
  y: number;
  size: number;
}

function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>();
  const timerRef = useRef(0);
  const circulosRef = useRef<Circulo[]>([]);

  // Initialize circles array
  const initArr = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    circulosRef.current = [];
    
    for (let index = 0; index < 300; index++) {
      const randomX = Math.floor(
        Math.random() * ((canvas.width * 3) - (canvas.width * 1.2) + 1)
      ) + (canvas.width * 1.2);
      
      const randomY = Math.floor(
        Math.random() * ((canvas.height) - (canvas.height * (-0.2) + 1))
      ) + (canvas.height * (-0.2));
      
      const size = canvas.width / 1000;
      
      circulosRef.current.push({ x: randomX, y: randomY, size });
    }
  };

  // Drawing function
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    timerRef.current++;
    context.setTransform(1, 0, 0, 1, 0, 0);
    
    const distanceX = canvas.width / 80;
    const growthRate = canvas.width / 1000;
    
    context.fillStyle = 'rgba(165,106,189,0.3)'; // Use project accent color
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    circulosRef.current.forEach((circulo) => {
      context.beginPath();
      
      if (timerRef.current < 65) {
        circulo.x = circulo.x - distanceX;
        circulo.size = circulo.size + growthRate;
      }
      
      if (timerRef.current > 65 && timerRef.current < 500) {
        circulo.x = circulo.x - (distanceX * 0.02);
        circulo.size = circulo.size + (growthRate * 0.2);
      }
      
      context.arc(circulo.x, circulo.y, circulo.size, 0, Math.PI * 2);
      context.fill();
    });
    
    if (timerRef.current > 500) {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      return;
    }
    
    requestIdRef.current = requestAnimationFrame(draw);
  };

  // Initialize canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions
    const updateDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      timerRef.current = 0;
      initArr();
    };

    updateDimensions();
    draw();
    
    window.addEventListener('resize', updateDimensions);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />;
}
