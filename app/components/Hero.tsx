"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const showcaseImages = [
  "/images/hero-image-1.png",
  "/images/hero-image-2.png",
  "/images/hero-image-3.png",
];

export default function Hero() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 text-center bg-slate-50">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
      >
        Your business is just a click away from more clients
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg px-2"
      >
        Showcase your services, set your schedule, and let clients book in
        real-time.
      </motion.p>

      {/* Horizontal Images */}
      <div className="mt-12 mx-auto max-w-6xl">
        <div className="flex gap-4 overflow-x-auto pb-4 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
          {showcaseImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: "easeOut"
              }}
              className="flex-shrink-0 group relative w-64 h-48 sm:w-80 sm:h-56 lg:w-auto lg:h-64 lg:flex-shrink overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <Image
                src={src}
                alt={`Ukeki showcase ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
