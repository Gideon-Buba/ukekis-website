export default function FeatureCTA() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 items-center">
        <div className="rounded-xl bg-emerald-100 p-8">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Show up where clients are already looking
          </h2>

          <p className="mb-6 text-gray-700">
            Get listed, get reviewed, and grow your credibility in a trusted
            marketplace.
          </p>

          <button className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-800">
            Get Started
          </button>
        </div>

        <div className="h-72 rounded-xl bg-gray-200" />
      </div>
    </section>
  );
}
