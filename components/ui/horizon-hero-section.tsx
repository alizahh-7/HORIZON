"use client";
import React, { useEffect, useRef, useState } from 'react';

// Component placeholder for Three.js hero section
// Note: Full Three.js implementation would require additional setup
export const Component = () => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-[#030303] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-rose-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              HORIZON
            </span>
          </h1>
          
          <div className="space-y-4 text-white/60 text-lg md:text-xl max-w-2xl mx-auto px-4">
            <p>Where vision meets reality,</p>
            <p>we shape the future of tomorrow</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 text-sm tracking-widest">
        <div className="flex flex-col items-center space-y-4">
          <span>SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </div>
  );
};