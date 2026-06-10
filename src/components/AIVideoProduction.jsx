import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { aiVideoWorks } from "../data/portfolio";
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

const VideoCard = memo(function VideoCard({ work }) {
  return (
    <motion.article
      variants={itemVariants}
      className="
        group overflow-hidden rounded-2xl border border-[#E5E7EB]
        bg-white transition-shadow duration-300 hover:shadow-md
      "
    >
      <a
        href={work.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${work.title}`}
        className="block"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F9FAFB] border-b border-[#E5E7EB]">
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

          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-[#111827]/30 opacity-70
              transition-opacity duration-300 group-hover:opacity-85
              motion-reduce:transition-none
            "
          >
            <div
              className="
                flex h-14 w-14 items-center justify-center rounded-full
                bg-white/95 text-[#111827] shadow-md
                transition-transform duration-300 group-hover:scale-105
                motion-reduce:transition-none motion-reduce:transform-none
              "
            >
              <Play fill="#111827" size={22} className="ml-1" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
          <h3 className="line-clamp-1 text-base sm:text-lg font-bold text-[#111827]">
            {work.title}
          </h3>

          <span
            className="
              inline-flex shrink-0 items-center gap-2
              text-xs font-semibold uppercase tracking-wider
              text-[#2563EB] transition-colors group-hover:text-[#1d4ed8]
            "
          >
            Watch Video
            <Play size={12} fill="currentColor" />
          </span>
        </div>
      </a>
    </motion.article>
  );
});

export default function AIVideoProduction() {
  const works = useMemo(() => aiVideoWorks, []);

  return (
    <section
      id="video"
      className="py-16 sm:py-20 bg-white border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          title="AI Video Production"
          subtitle="Cinematic AI Generation"
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
            <VideoCard key={work.id} work={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
