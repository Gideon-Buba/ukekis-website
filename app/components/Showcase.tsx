"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const showcaseImages = [
  "/images/hero-image-1.png",
  "/images/hero-image-2.png",
  "/images/hero-image-3.png",
];

export default function Showcase() {
  return (
    <section className="bg-slate-50 px-6 pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {showcaseImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="
              group relative h-64 overflow-hidden rounded-2xl
              bg-white shadow-md
              transition-all duration-300 ease-out
            "
          >
            {/* Image */}
            <Image
              src={src}
              alt={`Ukeki showcase ${index + 1}`}
              fill
              className="
                object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
              priority={index === 0}
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/0
                transition-colors duration-300
                group-hover:bg-black/10
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
