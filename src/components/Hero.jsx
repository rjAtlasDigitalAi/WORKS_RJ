import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-24 md:py-36 text-center overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Subtle Brand Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-6"
        >
          RJ ATLAS DIGITAL AI
        </motion.p>

        {/* Large Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#111827] leading-none mb-10"
        >
          Latest Works
        </motion.h1>

        
      </div>

      {/* Modern minimal line accent */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[#E5E7EB]"
      />
    </section>
  );
}
