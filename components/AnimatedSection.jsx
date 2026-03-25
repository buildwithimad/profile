"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // 🔥 only once
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}