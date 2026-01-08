import Image from "next/image";

const features = [
  {
    title: "Smart Recommendations",
    description:
      "Get personalized service suggestions based on your preferences.",
    image: "/images/thumbs-up.png", // replace with your actual image
    colSpan: "md:col-span-1",
  },
  {
    title: "In-app Messaging",
    description:
      "Communicate directly, share files, and clarify service details.",
    image: "/images/chat.png",
    colSpan: "md:col-span-2",
  },
  {
    title: "Integrated Booking",
    description:
      "Schedule appointments seamlessly with built-in calendar support.",
    image: "/images/calendar.png",
    colSpan: "md:col-span-1",
  },
  {
    title: "Business Dashboard",
    description:
      "Track bookings, income, and performance metrics in one place.",
    image: "/images/dashboard.png",
    colSpan: "md:col-span-1",
  },
  {
    title: "Secure Payments",
    description: "Make and receive payments safely with multiple options.",
    image: "/images/credit-cards.png",
    colSpan: "md:col-span-2",
  },
  {
    title: "Real-time Notifications",
    description: "Stay updated with instant alerts and appointment reminders.",
    image: "/images/bell.png",
    colSpan: "md:col-span-1",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 md:auto-rows-fr">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl bg-[#D6E3E2] p-6 ${feature.colSpan}`}
            >
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
              <div className="mt-auto flex justify-end">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
