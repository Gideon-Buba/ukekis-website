export default function Footer() {
  return (
    <footer className="bg-emerald-800 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-lg font-semibold">UKEKI</div>

        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="mb-2 font-medium">Company</p>
            <ul className="space-y-1 text-emerald-100">
              <li>Home</li>
              <li>About us</li>
              <li>Browse services</li>
              <li>For Businesses</li>
            </ul>
          </div>

          <div>
            <p className="mb-2 font-medium">Support</p>
            <ul className="space-y-1 text-emerald-100">
              <li>FAQs</li>
              <li>Contact us</li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
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
