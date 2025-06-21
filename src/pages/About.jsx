import React from "react";
import { Navbar } from "../components/Navbar";
import {
  NavbarItems,
  NavbarButtonItems,
} from "../components/items/NavbarItems";
import TextSplit from "../components/TextSplit";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(()=>{
    AOS.init({
      duration:800,
      once:true
    })
  },[])

  const headingText = "At Inside Tribe, cultural exploration is not an afterthought. It is the lens through which we view the world. It's the tool we use to build the future for our community.";
  const paragraphText = "Inside Tribe is not your typical cultural showcase. We are focused on one simple thing: creating a delightful digital experience that powers the discovery of Indonesia's hidden traditions. As a result of this focus, we've developed unique expertise in what we believe is truly critical to creating a successful and delightful platform: strategy, design, and authentic storytelling.";

  return (
    <div className="bg-white text-black my-[16px]">
      <Navbar items={NavbarItems} itemsButton={NavbarButtonItems} />
      <main className="min-h-screen flex items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Heading */}
          <div className="lg:w-4/5">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium leading-none tracking-tight" data-aos="fade-up" data-aos-delay={900}>
              {headingText}
            </h1>
          </div>

          {/* Paragraph */}
          <div className="flex justify-end mt-16">
            <div className="lg:w-3/5">
              <p className="text-base md:text-lg leading-relaxed text-gray-800" data-aos="fade-up" data-aos-delay={1000}>
                {paragraphText}
              </p>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};
