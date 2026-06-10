import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111827]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-[#6B7280] font-medium tracking-wide uppercase">
            {subtitle}
          </p>
        )}
        <div className="mt-4 w-12 h-[2px] bg-[#2563EB]" />
      </motion.div>
    </div>
  );
}
