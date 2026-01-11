"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GetStartedButton from "./GetStartedButton";

export default function FeatureCTA() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-4">
        {/* TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 rounded-xl bg-emerald-100 p-6 sm:p-8 lg:h-[484px] lg:w-[585px] flex order-2 lg:order-1"
        >
          {/* CONTENT WRAPPER */}
          <div className="flex flex-col justify-center text-left w-full max-w-md mx-auto lg:mx-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4 text-2xl sm:text-3xl font-semibold text-gray-900"
            >
              Show up where clients are already looking
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6 text-gray-700 text-base"
            >
              Get listed, get reviewed, and grow your credibility in a trusted
              marketplace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GetStartedButton size="lg" className="w-fit" />
            </motion.div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-64 sm:h-80 lg:h-[484px] lg:w-[585px] lg:-ml-12 overflow-hidden rounded-xl order-1 lg:order-2"
        >
          <Image
            src="/images/show-up.png"
            alt="Feature illustration"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
