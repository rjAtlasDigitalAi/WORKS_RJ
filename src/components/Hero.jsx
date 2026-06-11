import React from "react";
import { motion } from "framer-motion";

const fadeUpSmall = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0, 10px, 0)",
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

const fadeUpLarge = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0, 18px, 0)",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
    transition: {
      duration: 0.55,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariant = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.65,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white py-20 text-center sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Subtle Brand Tagline */}
        <motion.p
  variants={fadeUpSmall}
  initial="hidden"
  animate="visible"
  className="
    mb-5 text-xs font-semibold uppercase
    tracking-[0.2em]
    bg-gradient-to-r from-[#00eaff] to-[#ff1493]
    bg-clip-text text-transparent
    motion-reduce:transform-none motion-reduce:transition-none
  "
>
  RJ ATLAS DIGITAL AI
</motion.p>

        {/* Large Heading */}
        <motion.h1
          variants={fadeUpLarge}
          initial="hidden"
          animate="visible"
          className="
            mb-8 text-5xl font-black leading-none
            tracking-tight text-[#111827]
            md:text-7xl lg:text-8xl
            motion-reduce:transform-none motion-reduce:transition-none
          "
        >
          Latest Works
        </motion.h1>
      </div>

      {/* Modern Minimal Line Accent */}
      <motion.div
        variants={lineVariant}
        initial="hidden"
        animate="visible"
        className="
          absolute bottom-0 left-1/2 h-10 w-px
          origin-bottom -translate-x-1/2 bg-[#E5E7EB]
          md:h-12
          motion-reduce:hidden
        "
      />
    </section>
  );
}