import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import SectionTribes from "../components/Tribes/SectionTribes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TwoTribe from "../components/Tribes/TwoTribe";
import ListExplore from "../components/Tribes/ListExplore";
import MarqueeAbout from "../components/About/MarqueeAbout";

export const Tribes = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto">
        <SectionTribes />
        <TwoTribe />
        <MarqueeAbout />
        <ListExplore />
        <Footer />
      </div>
    </>
    // <main className="px-6 py-24 sm:px-12 lg:px-24">
    // </main>
  );
};
