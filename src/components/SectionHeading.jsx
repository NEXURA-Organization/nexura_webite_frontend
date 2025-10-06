export default function SectionHeading({ title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}
