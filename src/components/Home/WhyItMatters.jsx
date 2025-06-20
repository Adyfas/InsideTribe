import React from "react";
import SukuDayak from "../../assets/img/SukuDayak/image.png";
import SukuBaduy from "../../assets/img/SukuBaduy/image.png";
import SukuKajang from "../../assets/img/SukuKajang/image.png";
import SukuToraja from "../../assets/img/SukuToraja/image.png";
import Card from "./Card";
import { image3 } from "../items/ImageItemsAboutSection";

const WhyItMatters = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col w-full max-w-6xl px-6 py-16 max-md:py-0">
        <div className="flex-1 flex items-start">
          <h1
            className="text-[2.5rem] md:text-[6rem] font-light leading-[1.05] text-black tracking-tight md:text-left text-left my-[8px]"
            style={{ fontFamily: "Inter, Arial, sans-serif" }}
          >
            Tribes
          </h1>
        </div>
        <div className="justify-start items-start max-md:flex-col overflow-x-hidden">
          <div className="justify-between items-center flex gap-10 max-md:flex-col">
            <div className="items-start">
              <p className="text-lg md:text-xl text-black mb-8 max-w-lg max-md:mt-[16px] lg:ml-2 ml-0.5">
                There are many tribes in Indonesia that are rarely exposed to
                the media, here we will show how unique and diverse the culture
                and tribes in Indonesia are!
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-2xl text-base font-normal shadow-md hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/30">
                See More
              </button>
            </div>
          </div>
          <div className="place-content-center grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 transition-all duration-500 mt-16 w-full max-w-7xl">
            {image3.map((item, index) => (
              <Card
                desc={item.desc}
                id={item.id}
                img={item.img}
                location={item.location}
                key={index}
                onRead={() => alert("Read clicked!")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
