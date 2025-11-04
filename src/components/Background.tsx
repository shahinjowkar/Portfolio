'use client';

import { ReactNode, useState, useEffect, useRef } from 'react';
import Overlay from './Overlay';

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateDistance = (dotIndex: number, gridCols: number, gridRows: number) => {
    const col = dotIndex % gridCols;
    const row = Math.floor(dotIndex / gridCols);
    
    if (!containerRef.current) return Infinity;
    
    const rect = containerRef.current.getBoundingClientRect();
    const cellWidth = rect.width / gridCols;
    const cellHeight = rect.height / gridRows;
    
    const dotX = col * cellWidth + cellWidth / 2;
    const dotY = row * cellHeight + cellHeight / 2;
    
    const dx = mousePosition.x - dotX;
    const dy = mousePosition.y - dotY;
    
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getDotStyle = (dotIndex: number) => {
    const distance = calculateDistance(dotIndex, 30, 30);
    const maxDistance = 150; // Maximum distance for effect
    const proximity = Math.max(0, 1 - distance / maxDistance);
    
    const opacity = 0.3 + proximity * 0.7; // From 0.3 to 1.0
    const scale = 1 ; // From 1x to 3x
    const glow = proximity * 5; // Glow intensity
    
    return {
      opacity,
      transform: `scale(${scale})`,
      boxShadow: `0 0 ${glow}px ${glow}px rgba(0, 255, 65, ${proximity * 0.8})`,
      transition: 'opacity 0.1s ease-out, transform 0.1s ease-out, box-shadow 0.1s ease-out',
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-30 grid-rows-30">
        {Array.from({ length: 30*30 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <div 
              className="w-1 h-1 bg-[#00ff41] rounded-full"
              style={getDotStyle(index)}
            />
          </div>
        ))}
      </div>
      {/* Overlay - transparent black panel in the middle */}
      {/* <Overlay /> */}
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

