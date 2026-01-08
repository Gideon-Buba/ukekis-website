export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <h1 className="mb-8 text-4xl font-bold text-[#19796B] text-center">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-8 text-gray-700 text-lg leading-relaxed text-center">
          Your privacy matters to us. This page explains how Ukeki collects,
          uses, and protects your personal information.
        </p>

        {/* Sections */}
        <section className="mb-8 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-[#19796B]">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information like your name, email address,
            payment details, and usage data when you interact with our services.
            All data is handled securely and responsibly.
          </p>
        </section>

        <section className="mb-8 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-[#19796B]">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Information is used to provide and improve our services, process
            payments, communicate updates, and ensure a seamless experience.
          </p>
        </section>

        <section className="mb-8 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-[#19796B]">
            Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We never sell your personal information. Trusted third-party service
            providers may have limited access to help operate the platform
            securely.
          </p>
        </section>

        <section className="mb-8 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-[#19796B]">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or request deletion of your
            data. Contact us anytime for assistance.
          </p>
        </section>

        <p className="mt-8 text-center text-gray-700">
          Questions?{" "}
          <a
            href="/contact"
            className="font-medium text-[#19796B] hover:underline"
          >
            Contact Us
          </a>
        </p>
      </div>
    </main>
  );
}
