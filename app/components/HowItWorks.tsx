import {
  PencilIcon,
  UserCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header aligned with cards */}
        <h2 className="mb-12 text-3xl font-semibold text-gray-900">
          How It Works?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col rounded-xl bg-[#19796B]/30 p-6 w-86.5 h-66.75">
            <PencilIcon className="h-10 w-10 mb-4 text-[#19796B]" />
            <h3 className="mb-2 font-semibold text-gray-900">
              Set Up Your Service
            </h3>
            <p className="text-sm text-gray-700">
              Join for free, create your service listing, and showcase your
              skills to a wide audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-xl bg-[#19796B]/20 p-6 w-86.5 h-66.75">
            <UserCircleIcon className="h-10 w-10 mb-4 text-[#19796B]" />
            <h3 className="mb-2 font-semibold text-gray-900">
              Do What You Do Best
            </h3>
            <p className="text-sm text-gray-700">
              Get notified when someone books you. Chat with clients, manage
              details, and deliver outstanding service.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-xl bg-[#F9EDD3] p-6 w-86.5 h-66.75">
            <CurrencyDollarIcon className="h-10 w-10 mb-4 text-gray-800" />
            <h3 className="mb-2 font-semibold text-gray-900">Get Paid Fast</h3>
            <p className="text-sm text-gray-700">
              Receive secure payments on time—ready for withdrawal as soon as
              they’re cleared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
