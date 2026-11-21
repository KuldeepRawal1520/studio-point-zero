"use client";

import { motion, MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <motion.div initial={false} animate={reduced ? undefined : { opacity: [0.75, 1] }} transition={{ duration: 0.32 }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ y: [8, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.48, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
