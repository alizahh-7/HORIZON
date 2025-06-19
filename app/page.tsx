"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { CursorRipple } from '@/components/ui/cursor-ripple';
import { Navbar } from '@/components/ui/navbar';
import { FeaturesGrid } from '@/components/ui/features-grid';
import { Testimonials } from '@/components/ui/testimonials';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';

// Dynamically import HorizonHero to prevent SSR issues
const HorizonHero = dynamic(
  () => import('@/components/ui/horizon-hero-section').then(mod => ({ default: mod.Component })),
  { 
    ssr: false,
    loading: () => (
      <div className="h-screen bg-[#030303] flex items-center justify-center">
        <div className="animate-pulse text-white/60">Loading...</div>
      </div>
    )
  }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303] text-white overflow-x-hidden">
      <CursorRipple />
      <Navbar />
      
      {/* Hero Section with Geometric Shapes */}
      <section id="home">
        <HeroGeometric 
          badge="Vibrance UI"
          title1="Elevate Your"
          title2="Digital Vision"
        />
      </section>

      {/* Three.js Horizon Hero */}
      <section>
        <HorizonHero />
      </section>

      {/* Container Scroll Animation */}
      <section className="bg-[#030303]">
        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Unleash the power of{" "}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                  Design Innovation
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Experience the future of web design with our cutting-edge UI kits and components
              </p>
            </div>
          }
        >
          <Image
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Design showcase"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Our Portfolio
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Explore our latest projects and see how we bring visions to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
            ].map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Portfolio item ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">Project {index + 1}</h3>
                  <p className="text-white/70 text-sm">UI/UX Design</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Let's Create Something Amazing
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch and let's discuss your next project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-white/60">hello@vibranceui.com</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-white/60">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Office</h4>
                    <p className="text-white/60">123 Design Street<br />Creative District, CD 12345</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Response Time</h4>
                    <p className="text-white/60">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}