import Image from "next/image";

const features = [
  {
    title: "Smart Recommendations",
    description:
      "Get personalized service suggestions based on your preferences.",
    image: "/images/smart-recommendations.png",
    layout: "vertical",
    colSpan: "md:col-span-1",
    imageProps: {
      width: 420,
      height: 420,
      className: "w-full max-w-[420px]",
    },
  },
  {
    title: "In-app Messaging",
    description:
      "Communicate directly, share files, and clarify service details.",
    image: "/images/messaging.png",
    colSpan: "md:col-span-2",
    imageProps: {
      width: 355,
      height: 355,
      className: "w-[160px] md:w-[200px]",
    },
  },
  {
    title: "Integrated Booking",
    description:
      "Schedule appointments seamlessly with built-in calendar support.",
    image: "/images/booking.png",
    colSpan: "md:col-span-1",
    flushImage: true,
    imageProps: {
      width: 480,
      height: 480,
      className: "w-[180px] md:w-[220px] lg:w-[260px]",
    },
  },
  {
    title: "Business Dashboard",
    description:
      "Track bookings, income, and performance metrics in one place.",
    image: "/images/dashboard.png",
    colSpan: "md:col-span-1",
    imageProps: {
      width: 260,
      height: 260,
      className: "w-[180px]",
    },
  },
  {
    title: "Secure Payments",
    description: "Make and receive payments safely with multiple options.",
    image: "/images/payments.png",
    colSpan: "md:col-span-2",
    imageProps: {
      width: 300,
      height: 300,
      className: "w-[220px]",
    },
  },
  {
    title: "Real-time Notifications",
    description: "Stay updated with instant alerts and appointment reminders.",
    image: "/images/notification.png",
    colSpan: "md:col-span-1",
    imageProps: {
      width: 240,
      height: 240,
      className: "w-[140px]",
    },
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-gray-900">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 auto-rows-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex rounded-3xl bg-[#C8DAD3]
                ${
                  feature.layout === "vertical" || feature.flushImage
                    ? "p-0"
                    : "p-8"
                }
                ${feature.colSpan || "md:col-span-1"}
                ${
                  feature.layout === "vertical"
                    ? "md:row-span-2 flex-col justify-between"
                    : "flex-col justify-between"
                }
              `}
            >
              {/* SMART RECOMMENDATIONS */}
              {feature.layout === "vertical" ? (
                <>
                  <div className="relative w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={feature.imageProps.width}
                      height={feature.imageProps.height}
                      className={`object-contain ${feature.imageProps.className}`}
                      priority
                    />
                  </div>

                  <div className="p-8 text-center">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </>
              ) : feature.flushImage ? (
                /* INTEGRATED BOOKING — BIG IMAGE, EDGE-TOUCHING */
                <>
                  <div className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>

                  <div className="relative mt-auto overflow-hidden rounded-b-3xl flex justify-end pr-2">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={feature.imageProps.width}
                      height={feature.imageProps.height}
                      className={`object-contain ${feature.imageProps.className}`}
                    />
                  </div>
                </>
              ) : (
                /* ALL OTHER CARDS */
                <>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-auto flex justify-end">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={feature.imageProps.width}
                      height={feature.imageProps.height}
                      className={`object-contain ${feature.imageProps.className}`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
