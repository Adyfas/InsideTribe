import React, { useState } from "react";
import Loading from "../components/Loading";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import videoBg from "../assets/video/Video(1).mp4";
import HeroSection from "../components/Home/HeroSection";
import WhyItMatters from "../components/Home/WhyItMatters";
import Diversity from "../components/Home/Diversity";
import MapIndonesia from "../components/Home/MapIndonesia";
import WordSection from "../components/Home/WordSection";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div>
          <Navbar />

          <HeroSection Video={videoBg} />

          <WordSection />

          <Diversity />

          <WhyItMatters />

          <MapIndonesia />

          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
