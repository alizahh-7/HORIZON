"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RippleEffect {
  id: number;
  x: number;
  y: number;
}

export const CursorRipple = () => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed w-4 h-4 bg-white/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease',
        }}
      />
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{
            width: 0,
            height: 0,
            opacity: 0.6,
          }}
          animate={{
            width: 100,
            height: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-white/30 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      ))}
    </>
  );
};