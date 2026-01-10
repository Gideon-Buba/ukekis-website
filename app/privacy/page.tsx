export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <article className="mx-auto max-w-3xl text-gray-800 leading-relaxed">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#19796B] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Intro */}
        <p className="mb-8 text-lg">
          Ukekis (“we”, “our”, “us”) respects your privacy. This Privacy Policy
          explains how we collect, use, store, and protect your information when
          you use our platform.
        </p>

        <Section title="1. Information We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal information:</strong> name, email address,
              password (securely hashed), phone number, and profile picture.
            </li>
            <li>
              <strong>Business information:</strong> business name, bio, contact
              details, portfolio content, listed products, and services.
            </li>
            <li>
              <strong>Transaction data:</strong> bookings, orders, payment
              references, payment status, and timestamps.
            </li>
            <li>
              <strong>Communications:</strong> messages exchanged between users
              on the platform.
            </li>
            <li>
              <strong>Usage data:</strong> favorites, reviews, ratings,
              notifications, and interaction history.
            </li>
            <li>
              <strong>Technical data:</strong> device information and push
              notification tokens.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>
            We use your information to operate and improve Ukekis, including
            managing accounts, facilitating bookings and orders, enabling
            communication between users, sending notifications, preventing
            fraud, and complying with legal obligations.
          </p>
        </Section>

        <Section title="3. Payments & Third-Party Processing">
          <p>
            Ukekis does not store or process card or bank card details directly.
            All payments are securely handled by trusted third-party payment
            providers, including <strong>Paystack</strong>.
          </p>
          <p className="mt-3">
            We retain only limited payment-related information such as
            transaction references, status, and timestamps to manage bookings,
            refunds, and payouts.
          </p>
        </Section>

        <Section title="4. Messaging & User Content">
          <p>
            Messages, reviews, ratings, and uploaded content are stored to
            enable core platform functionality, ensure platform safety, and
            prevent abuse. We do not read private messages unless required for
            security or legal reasons.
          </p>
        </Section>

        <Section title="5. Data Sharing">
          <p>
            We do not sell your personal data. Information may be shared only
            with essential service providers (such as payment processors), when
            required by law, or to protect the rights and safety of Ukekis and
            its users.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain personal data only for as long as necessary to provide our
            services, resolve disputes, enforce agreements, and meet legal
            obligations. Upon account deletion, personal data is removed or
            anonymized unless retention is legally required.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We apply industry-standard security measures including encryption,
            access control, and secure infrastructure. However, no system is
            entirely immune from risk.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            You have the right to access, update, or request deletion of your
            personal data, and to manage notification preferences. Requests may
            be submitted through our support channels.
          </p>
        </Section>

        <Section title="9. Children’s Privacy">
          <p>
            Ukekis is not intended for individuals under the age of 18. If you
            are under 18, please do not use the platform.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have questions about this Privacy Policy or how your data is
            handled, please contact us via our official support channels.
          </p>
        </Section>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ukekis. All rights reserved.
        </footer>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-semibold text-[#19796B]">{title}</h2>
      {children}
    </section>
  );
}
