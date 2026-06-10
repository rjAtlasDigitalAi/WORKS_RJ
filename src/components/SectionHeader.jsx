import React, { memo } from "react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0, 12px, 0)",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SectionHeader = memo(function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10 md:mb-14">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="
          flex flex-col
          motion-reduce:transform-none motion-reduce:transition-none
        "
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#6B7280]">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-4 h-[2px] w-12 bg-[#2563EB]" />
      </motion.div>
    </div>
  );
});

export default SectionHeader;
