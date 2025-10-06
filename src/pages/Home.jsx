import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServiceGrid";
import Container from "../components/ui/Container";
import FreebieButton from "../components/ui/FreebieButton";

const Home = () => {
  return (
    <div className="text-white py-20">
      {/* Navbar + Hero */}
      <Navbar />
      <section className=" section-padding">

        <Hero />
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <Container>
          {/* Section Header */}
          <div className="relative flex flex-col items-center text-center mb-14">
            <div className="px-6 py-2 rounded-full border border-white/10 bg-[#1a1124]/80 shadow-inset-md mb-6">
              <h2 className="text-xl md:text-4xl font-bold text-gradient">
                What We Do For You
              </h2>
            </div>
            <p className="text-gray-400 text-xs md:text-xl">
              From idea to execution, we’ve got every step covered.
            </p>

            {/* Freebie Button (aligned right on desktop) */}
            <div className="absolute top-55 right-0 md:block md:top-5">
              <FreebieButton />
            </div>
          </div>

          {/* Background capsule for services */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="w-[95%] max-w-6xl h-full rounded-[3rem] border-white/5 "></div>
            </div>
            <ServicesGrid />
          </div>
        </Container>

        {/* Decorative glowing shapes */}
        <div className="absolute -top-16 left-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-20 w-52 h-52 bg-fuchsia-400/20 blur-3xl rounded-full"></div>
      </section>

      {/* Newsletter + Footer */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
