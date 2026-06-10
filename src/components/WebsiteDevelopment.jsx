import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { websiteDevelopmentWorks } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const itemVariants = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0, 18px, 0)",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WebsiteCard = memo(function WebsiteCard({ work }) {
  return (
    <motion.article
      variants={itemVariants}
      className="
        group overflow-hidden rounded-2xl
        border border-[#E5E7EB] bg-white
        transition-shadow duration-300 hover:shadow-md
      "
    >
      <a
        href={work.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${work.title}`}
        className="block"
      >
        {/* Thumbnail Container */}
        <div className="aspect-[16/10] w-full overflow-hidden border-b border-[#E5E7EB] bg-[#F9FAFB]">
          <img
            src={work.image}
            alt={work.title}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            draggable="false"
            className="
              h-full w-full object-cover object-center
              transition-transform duration-500 ease-out
              group-hover:scale-[1.015]
              motion-reduce:transition-none motion-reduce:transform-none
            "
          />
        </div>

        {/* Details & Button */}
        <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
          <h3 className="line-clamp-1 text-base font-bold text-[#111827] sm:text-lg">
            {work.title}
          </h3>

          <span
            className="
              inline-flex shrink-0 items-center gap-2
              text-xs font-semibold uppercase tracking-wider
              text-[#2563EB] transition-colors group-hover:text-[#1d4ed8]
            "
          >
            Visit Website
            <ExternalLink size={14} aria-hidden="true" />
          </span>
        </div>
      </a>
    </motion.article>
  );
});

export default function WebsiteDevelopment() {
  const works = useMemo(() => websiteDevelopmentWorks, []);

  return (
    <section
      id="websites"
      className="border-t border-[#E5E7EB] bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          title="Website Development"
          subtitle="Interactive Web Platforms"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            staggerChildren: 0.06,
          }}
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8"
        >
          {works.map((work) => (
            <WebsiteCard key={work.id} work={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}