import React from "react";
import { FooterLinks, SocialMedia } from "../items/FooterItems";
import ThemeFooter from "./ThemeFooter";
import ExploreFooter from "./ExploreFooter";
import { SocialMediaFooter } from "./SocialMediaFooter";

export const HeaderFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
      <ThemeFooter />
      <ExploreFooter />
      <SocialMediaFooter />
    </div>
  );
};
