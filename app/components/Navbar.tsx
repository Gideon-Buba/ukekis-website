import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="font-bold text-xl">UKEKI’S</div>

      <ul className="hidden md:flex gap-6 text-sm text-gray-700">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/services">Browse services</Link>
        </li>
        <li>
          <Link href="/business" className="text-emerald-600 font-medium">
            For Businesses
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm text-gray-700">
          Login
        </Link>
        <button className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-md">
          Get Started
        </button>
      </div>
    </nav>
  );
}
