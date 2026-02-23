import React, { useState } from "react";
import Team from "./Team";
import Container from "./ui/Container";
import FreebieButton from "./ui/FreebieButton";

import leftDecorative from "../assets/logos/image1.png";
import rightDecorative from "../assets/logos/image2.png";
import historyImg from "../assets/logos/Frame 88.png";
import missionImg from "../assets/logos/Frame 88 (4).png";
import visionImg from "../assets/logos/Frame 88 (1).png";

export default function HeroAbout() {
  const [active, setActive] = useState("history");

  return (
    <section className="flex flex-col items-center section-padding mt-10 sm:mt-6 md:mt-8">

      {/* Main hero capsule */}
      <div className="relative w-[90%] md:w-[60%] mx-auto my-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 py-16 px-4 sm:px-6 md:px-12 lg:px-20 rounded-2xl border border-white/10 bg-[radial-gradient(circle,rgba(10,10,31,0)_0%,rgba(10,10,31,1)_100%)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.6)] overflow-hidden">

        {/* Left decorative image inside hero */}
        <img
          src={leftDecorative}
          alt="left decorative"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 opacity-60 md:opacity-100"
        />

        {/* Right decorative image inside hero */}
        <img
          src={rightDecorative}
          alt="right decorative"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 opacity-60 md:opacity-100"
        />

        {/* Tagline pill */}
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-[#1a1124]/80 shadow-[inset_0_1px_6px_rgba(255,255,255,0.06)] text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">
          Dream It - Build It - Own It
        </div>

        {/* Heading */}
        <h1 className="text-[28px] xs:text-[32px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-[78px] text-center tracking-tight whitespace-nowrap bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]">
          About Nexura
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl text-center leading-relaxed">
          We’re a tech-driven company dedicated to transforming ideas into impact. From building 
          scalable digital solutions to nurturing future innovators, Nexura is where creativity meets 
          technology.
        </p>

      </div>

      {/* Tabs */}
      <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 px-2">
        {["history", "mission", "vision", "team"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`nav-pill px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 ${
              active === tab
                ? "bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30 text-white shadow-lg shadow-fuchsia-500/20"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {tab === "history" && "Our History"}
            {tab === "mission" && "Our Mission"}
            {tab === "vision" && "Our Vision"}
            {tab === "team" && "The Team"}
          </button>
        ))}
      </div>

      {/* Content area */}
      <Container className="mt-12 sm:mt-16 md:mt-20 px-2 sm:px-0">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">

          {active === "history" && (
            <div className="relative w-full flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16">
              <div className="absolute -top-16 right-0 md:right-0 z-20 scale-90 md:scale-100">
                <FreebieButton />
              </div>
              <div className="w-full max-w-sm md:max-w-md service-card p-3 sm:p-4 md:p-6">
                <img
                  src={historyImg}
                  alt="History illustration"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#954CF3] via-[#AB6FFA] to-[#954CF3] text-transparent bg-clip-text">
                  Our History
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Nexura was conceptualized by three innovative minds and brought to life by two, namely Ngwa Juthel and Ngeh Clovis. What began as a bold idea to merge creativity with technology has evolved into a growing hub for digital innovation, empowering individuals and brands to dream, build, and own their future.
                </p>
              </div>
            </div>
          )}

          {active === "mission" && (
            <div className="w-full flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-16">
              <div className="w-full max-w-sm md:max-w-md service-card p-3 sm:p-4 md:p-6">
                <img
                  src={missionImg}
                  alt="Mission illustration"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-center md:text-right">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#954CF3] via-[#AB6FFA] to-[#954CF3] text-transparent bg-clip-text">
                  Our Mission
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  To empower individuals and teams to turn bold ideas into transformative realities. Through innovation, collaboration, and design, we create opportunities that spark creativity and drive meaningful impact across industries and communities.
                </p>
              </div>
            </div>
          )}

          {active === "vision" && (
            <div className="w-full flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16">
              <div className="w-full max-w-sm md:max-w-md service-card p-3 sm:p-4 md:p-6">
                <img
                  src={visionImg}
                  alt="Vision illustration"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#954CF3] via-[#AB6FFA] to-[#954CF3] text-transparent bg-clip-text">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  To become a leading force in tech-driven innovation, where creativity meets functionality, and ideas evolve into products that shape lives, empower change, and inspire a future built on limitless possibilities.
                </p>
              </div>
            </div>
          )}

          {active === "team" && <Team />}
        </div>
      </Container>
    </section>
  );
}