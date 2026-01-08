export default function Community() {
  return (
    <section className="px-6 py-20 bg-slate-50">
      <h2 className="mb-12 text-center text-3xl font-semibold text-gray-900">
        Join Our Business Community
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="aspect-square rounded-xl bg-gray-200" />
        ))}
      </div>
    </section>
  );
}
