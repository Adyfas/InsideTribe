import React from "react";
import { Navbar } from "../components/Navbar";
import {
  NavbarItems,
  NavbarButtonItems,
} from "../components/items/NavbarItems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionAbout from "../components/About/SectionAbout";
import MarqueeAbout from "../components/About/MarqueeAbout";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const headingText =
    "✦ At Inside Tribe, cultural exploration is not an afterthought. It is the lens through which we view the world. It's the tool we use to build the future for our community.";
  const paragraphText =
    "Inside Tribe is not your ordinary cultural exhibition. We focus on one simple thing: creating a fun digital experience that encourages the discovery of Indonesia's hidden traditions. As a result of this focus, we have developed unique expertise in what we believe is essential to creating a fun experience to see the cultures and tribes of Indonesia.";

  return (
    <div className="bg-white text-black my-[48px]">
      <Navbar items={NavbarItems} itemsButton={NavbarButtonItems} />
      <SectionAbout headingText={headingText} paragraphText={paragraphText} />
      <MarqueeAbout />
    </div>
  );
};
