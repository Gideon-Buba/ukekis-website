export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="font-bold text-xl">UKEKI’S</div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm bg-[#19796B] text-white rounded-md">
          Get Started
        </button>
      </div>
    </nav>
  );
}
