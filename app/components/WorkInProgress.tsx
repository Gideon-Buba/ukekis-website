"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { WrenchScrewdriverIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <WrenchScrewdriverIcon className="w-24 h-24 sm:w-32 sm:h-32 text-emerald-600 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Work in Progress
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto"
          >
            We're building something amazing! This page is currently under construction.
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-2 mb-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-emerald-500 rounded-full"
            />
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-sm text-gray-500"
        >
          Thanks for your patience while we craft the perfect experience!
        </motion.p>
      </div>
    </div>
  );
}