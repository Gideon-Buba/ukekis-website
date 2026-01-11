"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-white shadow-sm"
    >
      <div className="font-bold text-lg sm:text-xl text-gray-900">UKEKI'S</div>

      <div className="flex items-center gap-2 sm:gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm bg-[#19796B] text-white rounded-md font-medium hover:bg-[#147a6b] transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}