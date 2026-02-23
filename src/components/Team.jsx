import React from "react";
import Container from "./ui/Container";

// Import images
import clovisImg from "../assets/logos/Frame 90.png";
import juthelImg from "../assets/logos/Frame 90 (1).png";
import frankImg from "../assets/logos/Frame 90.png";
import harrisImg from "../assets/logos/Frame 90 (1).png";
import percyImg from "../assets/logos/Frame 90.png";
import barryImg from "../assets/logos/Frame 90 (1).png";
import rovisImg from "../assets/logos/Frame 90.png";
import blessingImg from "../assets/logos/Frame 90 (1).png";

// Social icons
import githubIcon from "../assets/logos/mdi_github.svg";
import twitterIcon from "../assets/logos/Icon (3).svg";
import linkedinIcon from "../assets/logos/Icon (4).svg";
import xIcon from "../assets/logos/simple-icons_x.svg";

const Team = () => {
  const teamMembers = [
    { name: "Ngeh Clovis", role: "CEO & Co-Founder", image: clovisImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Ngwa Juthel", role: "CSO, Co-Founder and Designer", image: juthelImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Ngwa Frank", role: "CTO & Software Engineer", image: frankImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Maimo Harris", role: "CTO & Security Analyst", image: harrisImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Mainimo Percy", role: "CGO & Frontend Developer", image: percyImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Barry Yuniwo", role: "Development Team Lead", image: barryImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Alenui Rovis", role: "Design Team Lead", image: rovisImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
    { name: "Ndipisirri Blessing", role: "Project Manager", image: blessingImg, bio: "At Nexura, we believe in pushing the boundaries of what's possible with technology." },
  ];

  const socialIcons = [
    { id: 1, src: githubIcon, alt: "Github" },
    { id: 2, src: twitterIcon, alt: "Twitter" },
    { id: 3, src: linkedinIcon, alt: "LinkedIn" },
    { id: 4, src: xIcon, alt: "X" },
  ];

  return (
    <section className="section-padding py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        {/* Updated Header based on Figma Design */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  bg-gradient-to-r from-[#954CF3] via-[#AB6FFA] to-[#954CF3] bg-clip-text text-transparent leading-tight">
            The Team
          </h2>
          <p className="mt-4 text-white/70 text-sm md:text-base max-w-md">
            Meet the brains behind the scenes of our innovations
          </p>
        </div>

        {/* Grid - Cleaned up (No Shadows/Lifts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="
                group
                flex flex-col sm:flex-row items-center sm:items-start
                gap-5 sm:gap-6 md:gap-7
                p-5 sm:p-6 md:p-8
                rounded-2xl md:rounded-[20px]
                border border-white/10
                bg-[#1a1124]/40 backdrop-blur-sm
                transition-all duration-300
                hover:border-white/20 hover:bg-white/5
              "
            >
              {/* Image container - Flat design */}
              <div className="shrink-0 w-52 sm:w-56 md:w-60 lg:w-[235px] h-64 sm:h-72 md:h-80 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 gap-4 sm:gap-5 text-center sm:text-left pt-3 sm:pt-0">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-400 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 sm:text-[#F0F8FF] text-lg font-normal">
                    {member.role}
                  </p>
                </div>

                <div className="w-24 sm:w-32 h-px bg-white/20 mx-auto sm:mx-0" />

                <div className="flex flex-col gap-4 sm:gap-5">
                  <p className="text-gray-300 sm:text-[#F0F8FF] text-base leading-relaxed opacity-90">
                    {member.bio}
                  </p>

                  {/* Social icons - Site standard hovers */}
                  <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4">
                    {socialIcons.map((icon) => (
                      <a
                        key={icon.id}
                        href="#"
                        className="
                          rounded-lg p-2.5 bg-white/5 border border-white/10
                          hover:bg-yellow-400/20 hover:border-yellow-400/40 hover:scale-110
                          transition-all duration-300 active:scale-95
                        "
                        aria-label={icon.alt}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;