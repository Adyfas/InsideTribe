import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import SeectionExplore from "../components/Explore/SeectionExplore";
import ScrollReveal from "../components/ScrollReveal";
import Lenis from "@studio-freight/lenis";
import ExploreNews from "../components/Explore/ExploreNews";

const Explore = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <SeectionExplore />

      <div className=" w-full flex items-start justify-start px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal
            baseOpacity={0.5}
            enableBlur={true}
            baseRotation={0.5}
            blurStrength={10}
            containerClassName="text-start"
            textClassName="text-gray-900 text-6xl leading-relaxed"
          >
            Explore Now!
          </ScrollReveal>
        </div>
      </div>

      <div className="h-[30vh]"></div>
      <ExploreNews />
      <Footer />
    </div>
  );
};

export default Explore;
