import React from "react";
import { Link } from "react-router-dom";
import { FooterLinks, SocialMedia } from "./items/FooterItems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HeaderFooter } from "./Footer/HeaderFooter";
import ContactFooter from "./Footer/ContactFooter";
import { SVGFooter } from "./Footer/SVGFooter";
import CopyrightFooter from "./Footer/CopyrightFooter";

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <footer className="bg-[#050307] text-[#F7EDDE] rounded-t-4xl w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <HeaderFooter />
        <ContactFooter />
        <SVGFooter />
        <CopyrightFooter />
      </div>
    </footer>
  );
};
