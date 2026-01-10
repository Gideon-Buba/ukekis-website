import Image from "next/image";

export default function FeatureCTA() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-4">
        {/* TEXT CARD */}
        <div
          className="relative z-10 rounded-xl bg-emerald-100
                        md:h-[484px] md:w-[585px] p-8 flex"
        >
          {/* CONTENT WRAPPER */}
          <div className="flex flex-col justify-center text-left max-w-md">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Show up where clients are already looking
            </h2>

            <p className="mb-6 text-gray-700">
              Get listed, get reviewed, and grow your credibility in a trusted
              marketplace.
            </p>

            <button className="w-fit rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-800">
              Get Started
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="relative md:-ml-12
                        md:h-[484px] md:w-[585px] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/show-up.png"
            alt="Feature illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
