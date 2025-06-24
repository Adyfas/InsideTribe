import React from "react";
import Paragraph from "../Paragraph";
import Toraja from "../../assets/img/SukuToraja/image.png";
import { ParallaxImg } from "../items/AboutImage";

const SectionTribes = () => {
  const headingText = "Discover the Untold Stories of Indonesia’s Tribes";
  const paragraphText =
    "From ancient rituals to daily life, explore the hidden riches in the remote corners of the archipelago. We will present some of the Cultures and Tribes in Indonesia here, you can see from traditional houses to unique traditional clothes and typical cultures and tribes in Indonesia.";

  return (
    <main className="my-5 flex items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto items-center justify-center flex">
        <Paragraph
          headingText={headingText}
          paragraphText={paragraphText}
          fontSideHeading="5xl"
        />
        {/* <img src={Toraja} alt="Toraja" className="rounded-3xl max-w-5xl"/> */}
      </div>
    </main>
  );
};

export default SectionTribes;
