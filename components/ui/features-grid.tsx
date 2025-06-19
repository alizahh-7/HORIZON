"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Palette, Code, Smartphone, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with modern web technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Stunning visual aesthetics that captivate and engage your audience.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code following industry standards.',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Perfect experience across all devices and screen sizes.',
  },
  {
    icon: Globe,
    title: 'Global Ready',
    description: 'Internationalization support and cross-browser compatibility.',
  },
  {
    icon: Users,
    title: 'User Focused',
    description: 'Intuitive interfaces designed with user experience in mind.',
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              Why Choose Us
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional design to deliver
            experiences that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-indigo-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};