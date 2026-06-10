import React from 'react';
import { motion } from 'framer-motion';
import { digitalMarketingWorks } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function DigitalMarketing() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="marketing" className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title="Digital Marketing" subtitle="Campaigns & Graphics" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {digitalMarketingWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-sm hover:shadow-lg border border-[#E5E7EB]/50 transition-shadow duration-500"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#F9FAFB]">
                <img
                  src={work.image}
                  alt={work.alt || 'Digital Marketing Poster'}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
