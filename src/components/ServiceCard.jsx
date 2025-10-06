import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="group flex flex-col items-center text-center gap-4 rounded-3xl p-8 border border-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-2 hover:shadow-[inset_0_2px_12px_rgba(255,255,255,0.08),0_12px_30px_rgba(168,85,247,0.3)]">
      
      {/* Icon orb with outer circle */}
      <div className="w-17 h-17 flex items-center justify-center rounded-full bg-black border border-white/10 shadow-[inset_0_2px_6px_rgba(255,255,255,0.05),0_6px_18px_rgba(0,0,0,0.5)]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.6)] bg-[#0f0d1a]">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-md">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <Link
        to={link}
        className="mt-auto inline-block rounded-full px-5 py-2 text-sm font-medium text-white border border-fuchsia-500/50 bg-[#1a1124]/60 hover:bg-fuchsia-600/20 hover:border-fuchsia-400 transition-colors shadow-inner"
      >
        Learn More →
      </Link>
    </div>
  );
}
