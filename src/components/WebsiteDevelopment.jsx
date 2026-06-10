import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { websiteDevelopmentWorks } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function WebsiteDevelopment() {
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
    <section id="websites" className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title="Website Development" subtitle="Interactive Web Platforms" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {websiteDevelopmentWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] hover:shadow-md transition-shadow duration-300"
            >
              {/* Thumbnail Container */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Details & Button */}
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#111827]">
                  {work.title}
                </h3>
                <a
                  href={work.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
