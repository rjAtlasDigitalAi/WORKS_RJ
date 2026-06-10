import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { digitalMarketingWorks } from "../data/portfolio";
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

const MarketingCard = memo(function MarketingCard({ work }) {
  return (
    <motion.article
      variants={itemVariants}
      className="
        group relative overflow-hidden rounded-2xl
        border border-[#E5E7EB]/60 bg-white shadow-sm
        transition-shadow duration-300 hover:shadow-md
      "
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-[#F9FAFB]">
        <img
          src={work.image}
          alt={work.alt || "Digital Marketing Poster"}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable="false"
          className="
            h-full w-full object-cover object-center
            transition-transform duration-500 ease-out
            group-hover:scale-[1.025]
            motion-reduce:transition-none motion-reduce:transform-none
          "
        />
      </div>
    </motion.article>
  );
});

export default function DigitalMarketing() {
  const works = useMemo(() => digitalMarketingWorks, []);

  return (
    <section
      id="marketing"
      className="py-16 sm:py-20 bg-white border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          title="Digital Marketing"
          subtitle="Campaigns & Graphics"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            staggerChildren: 0.05,
          }}
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2 sm:gap-6
            lg:grid-cols-4 lg:gap-8
          "
        >
          {works.map((work) => (
            <MarketingCard key={work.id} work={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
