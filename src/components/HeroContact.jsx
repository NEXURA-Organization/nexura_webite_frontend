import React from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import leftDecorative from "../assets/logos/image1.png";
import rightDecorative from "../assets/logos/image2.png";

export default function HeroContact() {
  return (
    <section className="flex relative items-center md:items-start section-padding bg-dark overflow-hidden py-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.6)] w-[90%] mt-40 md:w-[60%] mx-auto my-10 bg-[radial-gradient(circle,rgba(10,10,31,0)_0%,rgba(10,10,31,1)_100%)]">
      
      {/* Left decorative */}
      <img
        src={leftDecorative}
        alt="decorative shape"
        className="absolute left-1 md:top-[27%] w-10 h-10 md:w-12 md:h-12 opacity-60 md:opacity-100"
      />

      <Container className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* Tagline pill */}
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-[#1a1124]/80 shadow-[inset_0_1px_6px_rgba(255,255,255,0.06)] text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">
          Dream It - Build It - Own It
        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-3xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]">
          Get In Touch
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-400 max-w-3xl">
          We’re a tech-driven company dedicated to transforming ideas into impact. From building 
          scalable digital solutions to nurturing future innovators, Nexura is where creativity meets 
          technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {["WhatsApp", "Email", "Call Now"].map((label) => (
            <Button
              key={label}
              className="bg-gradient-to-r from-[#8B5CF6] via-[#FB7185] to-[#FAB570] shadow-lg shadow-fuchsia-500/30"
            >
              {label}
            </Button>
          ))}
        </div>
      </Container>

      {/* Right decorative */}
      <img
        src={rightDecorative}
        alt="decorative shape"
        className="absolute right-1 md:top-[27%] w-10 h-10 md:w-12 md:h-12 opacity-60 md:opacity-100"
      />
    </section>
  );
}