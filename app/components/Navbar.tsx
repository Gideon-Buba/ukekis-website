"use client";
import { motion } from "framer-motion";
import GetStartedButton from "./GetStartedButton";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-white shadow-sm"
    >
      <div className="font-bold text-lg sm:text-xl text-gray-900">
        UKEKI&#39;S
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <GetStartedButton />
      </div>
    </motion.nav>
  );
}
