import { Link } from "react-router-dom";

export default function FreebieButton() {
  return (
    <Link
      to="/freebie"
      className="relative inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium text-white bg-gradient-to-r from-[#8B5CF6] via-[#FB7185] to-[#FAB570]  shadow-lg hover:opacity-90 transition"
    >
      Grab Your Freebie
      <span className="text-lg">→</span>
    </Link>
  );
}
