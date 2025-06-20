import React from "react";
import Stack from "../Stack";
import BounceCards from "../BounceCards";
import {
  images2,
  images,
  transformStyles,
} from "../items/ImageItemsAboutSection";

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col w-full max-w-6xl px-6 py-16 max-md:py-0">
        <div className="flex-1 flex items-start">
          <h1
            className="text-[2.5rem] md:text-[6rem] font-light leading-[1.05] text-black tracking-tight md:text-left text-left"
            style={{ fontFamily: "Inter, Arial, sans-serif" }}
          >
            Inside Tribe?
          </h1>
        </div>
        <div className="justify-start items-start max-md:flex-col overflow-x-hidden">
          <div className="justify-between items-center flex gap-10 max-md:flex-col">
            <div className="items-start md:w-1/2 w-full">
              <p className="text-lg md:text-xl text-black mb-8 max-w-lg max-md:mt-[16px] lg:ml-2 ml-0.5">
                Inside Tribe has a commitment that aims to reveal hidden
                cultures in Indonesia. We believe that behind every hidden
                tradition, there are stories, values, and wisdom that deserve
                to be known by the public.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-2xl text-base font-normal shadow-md hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/30 mb-8">
                Explore More
              </button>
            </div>
            <div className="hidden md:flex w-1/2 justify-center items-center">
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 400, height: 400 }}
                cardsData={images}
              />
            </div>
            <div className="md:hidden flex justify-center mt-8 w-full">
              <BounceCards
                className="custom-bounceCards"
                images={images2}
                containerWidth={300}
                containerHeight={250}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
