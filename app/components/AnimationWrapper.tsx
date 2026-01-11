"use client";
import { motion } from "framer-motion";

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}