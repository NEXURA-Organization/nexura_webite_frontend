import Container from "./ui/Container";
import Button from "./ui/Button";
import image1 from "../assets/logos/image1.png";
import image2 from "../assets/logos/image2.png";

export default function Hero() {
  return (
    <section className="flex relative items-center md:items-start section-padding bg-dark overflow-hidden py-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.6)] w-[90%] md:w-[60%] mx-auto my-10 bg-[radial-gradient(circle,rgba(10,10,31,0)_0%,rgba(10,10,31,1)_100%)]">
            <img
        src={image1}
        alt="decorative shape"
        className=" absolute top-50%
          w-10 h-10 md:w-12 md:h-12 
          left-1 md:top-[27%]
           opacity-60 md:opacity-100
        "
      />
      <Container className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* Tagline pill */}
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-[#1a1124]/80 shadow-[inset_0_1px_6px_rgba(255,255,255,0.06)] text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">
          Dream It · Build It · Own It
        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-3xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.45)] ">
          Turning Bold Ideas Into Reality
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-400 max-w-xl">
          We build solutions that matter.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gradient-to-r from-[#8B5CF6] via-[#FB7185] to-[#FAB570] shadow-lg shadow-fuchsia-500/30 flex items-center">
          <span>Build With Us </span>
            <span className="text-xl"> →</span>
          </Button>
          <Button className="btn-outline">See Our Works</Button>
        </div>
      </Container>

      {/* Decorative Blobs */}
      {/* Left blob */}

      {/* Right blob */}
      <img
        src={image2}
        alt="decorative shape"
        className="
          absolute top-50%
          w-10 h-10 md:w-12 md:h-12 
          right-1 md:top-[27%]
           opacity-60 md:opacity-100
        "
      />
    </section>
  );
}
