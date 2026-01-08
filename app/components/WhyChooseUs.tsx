import { ShieldCheck, Lock, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 items-center">
        {/* Left visual block */}
        <div className="relative rounded-2xl bg-amber-50 p-8 h-80 flex items-center justify-center">
          <div className="rounded-xl bg-white px-8 py-6 shadow-md">
            <span className="text-emerald-700 font-semibold text-lg">
              Ukeki’s
            </span>{" "}
            <span className="text-gray-900 font-medium text-lg">
              here for you
            </span>
          </div>

          {/* Fake magnifying glass placeholder */}
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border-8 border-gray-400 bg-transparent" />
        </div>

        {/* Right content */}
        <div>
          <h2 className="mb-8 text-3xl font-semibold text-gray-900">
            Why Choose Us?
          </h2>

          <ul className="space-y-6">
            <li className="flex gap-4">
              <ShieldCheck className="h-6 w-6 text-gray-900" />
              <div>
                <p className="font-medium text-gray-900">
                  Enjoy peace of mind with our verified service providers
                </p>
                <p className="text-sm text-gray-600">
                  All service providers are thoroughly vetted to ensure quality
                  and trust.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <Lock className="h-6 w-6 text-gray-900" />
              <div>
                <p className="font-medium text-gray-900">
                  Make secure transactions with trusted payment options
                </p>
                <p className="text-sm text-gray-600">
                  We prioritize your security with encrypted payment methods.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <Sparkles className="h-6 w-6 text-gray-900" />
              <div>
                <p className="font-medium text-gray-900">
                  Explore powerful features built for convenience
                </p>
                <p className="text-sm text-gray-600">
                  Enjoy a simplified and efficient service booking experience.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
