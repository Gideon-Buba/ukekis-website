import {
  PencilIcon,
  UserCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-white">
      <h2 className="mb-12 text-center text-3xl font-semibold text-gray-900">
        How It Works?
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50 p-6 h-64 w-64 mx-auto text-center">
          <PencilIcon className="h-12 w-12 mb-4 text-emerald-500" />
          <h3 className="mb-2 font-semibold text-gray-900">
            Set Up Your Service
          </h3>
          <p className="text-sm text-gray-600">
            Create your service listing and showcase your skills.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-teal-50 p-6 h-64 w-64 mx-auto text-center">
          <UserCircleIcon className="h-12 w-12 mb-4 text-teal-500" />
          <h3 className="mb-2 font-semibold text-gray-900">
            Do What You Do Best
          </h3>
          <p className="text-sm text-gray-600">
            Get booked, chat with clients, and deliver value.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-yellow-50 p-6 h-64 w-64 mx-auto text-center">
          <CurrencyDollarIcon className="h-12 w-12 mb-4 text-yellow-500" />
          <h3 className="mb-2 font-semibold text-gray-900">Get Paid Fast</h3>
          <p className="text-sm text-gray-600">
            Receive secure payments ready for withdrawal.
          </p>
        </div>
      </div>
    </section>
  );
}
