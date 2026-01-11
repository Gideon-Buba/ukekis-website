"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 py-24 text-center bg-slate-50">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-4xl md:text-6xl font-semibold text-gray-900"
      >
        Your business is just a click away from more clients
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg"
      >
        Showcase your services, set your schedule, and let clients book in
        real-time.
      </motion.p>
    </section>
  );
}
