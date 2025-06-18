import React, { useState } from "react";
import Loading from "../components/Loading";
import { Navbar } from "../components/Navbar";
import {
  NavbarItems,
  NavbarButtonItems,
} from "../components/items/NavbarItems";
import { Footer } from "../components/Footer";
import videoBg from "../assets/video/Video(1).mp4";
import { Link } from "react-router-dom";
import TextSplit from "../components/TextSplit";
import HeroSection from "../components/Home/HeroSection";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div>
          <Navbar items={NavbarItems} itemsButton={NavbarButtonItems} />
         
         <HeroSection Video={videoBg}/>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
