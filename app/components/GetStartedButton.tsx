"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface GetStartedButtonProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function GetStartedButton({ size = "sm", className = "" }: GetStartedButtonProps) {
  const baseClasses = "rounded-md bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors";
  const sizeClasses = size === "lg" 
    ? "px-6 py-3 text-sm" 
    : "px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm";

  return (
    <Link href="/get-started">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${sizeClasses} ${className}`}
      >
        Get Started
      </motion.button>
    </Link>
  );
}