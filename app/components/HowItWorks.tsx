"use client";
import {
  PencilIcon,
  UserCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const cards = [
  {
    icon: PencilIcon,
    title: "Set Up Your Service",
    description: "Join for free, create your service listing, and showcase your skills to a wide audience.",
    bgColor: "bg-[#19796B]/30",
    iconColor: "text-[#19796B]"
  },
  {
    icon: UserCircleIcon,
    title: "Do What You Do Best",
    description: "Get notified when someone books you. Chat with clients, manage details, and deliver outstanding service.",
    bgColor: "bg-[#19796B]/20",
    iconColor: "text-[#19796B]"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Get Paid Fast",
    description: "Receive secure payments on time—ready for withdrawal as soon as they're cleared.",
    bgColor: "bg-[#F9EDD3]",
    iconColor: "text-gray-800"
  }
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header aligned with cards */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-semibold text-gray-900"
        >
          How It Works?
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col rounded-xl ${card.bgColor} p-6 w-86.5 h-66.75 cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className={`h-10 w-10 mb-4 ${card.iconColor}`} />
                </motion.div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}