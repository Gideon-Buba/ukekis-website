import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-lg font-semibold">UKEKI</div>

        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="mb-2 font-medium">Company</p>
            <ul className="space-y-1 text-emerald-100">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About us</Link></li>
              <li><Link href="/services" className="hover:underline">Browse services</Link></li>
              <li><Link href="/business" className="hover:underline">For Businesses</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-2 font-medium">Support</p>
            <ul className="space-y-1 text-emerald-100">
              <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-emerald-200">
          © {new Date().getFullYear()} Ukeki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
