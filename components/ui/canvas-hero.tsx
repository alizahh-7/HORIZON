"use client";

import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas";
import { Plus, Shapes, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CanvasHero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="canvas-hero" className="relative min-h-screen bg-[#030303] text-white overflow-hidden">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20 relative z-10">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs leading-6 text-white/60">
            <Shapes className="h-5 p-1" /> Introducing Canvas Effects.
            <a
              href="#features"
              rel="noreferrer"
              className="hover:text-indigo-400 ml-1 flex items-center font-semibold transition-colors"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Explore{" "}
              <span aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="relative mx-auto h-full max-w-7xl border border-white/10 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <Plus
                  strokeWidth={4}
                  className="text-indigo-400 absolute -left-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-rose-400 absolute -bottom-5 -left-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-teal-400 absolute -right-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-amber-400 absolute -bottom-5 -right-5 h-10 w-10"
                />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
                  Your complete platform for Design.
                </span>
              </h1>
              <div className="flex items-center justify-center gap-1 mt-4">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to our creative playground! We&#39;re{" "}
            <span className="text-indigo-400 font-bold">Vibrance UI</span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-white/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            We craft enchanting visuals for brands, and conjure design resources
            to empower others with cutting-edge interactive experiences.
          </p>
          <div className="flex justify-center gap-2">
            <Link href="#contact">
              <Button variant="default" size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                Start Project
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
}