import React from "react";
import TextSplit from "../components/TextSplit";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import PixelCard from "../components/PixelCard";
import Adyfas from "../assets/me.jpeg";
import { SocialMedia } from "../components/items/FooterItems";
import GalleryPopupDetails from "../components/GalleryPopupDetails";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="my-5 flex items-center justify-center flex-col">
        <div className="my-15 max-w-4xl flex flex-col items-center justify-center shadow-2xl p-5 rounded-3xl bg-white md:flex-row">
          <PixelCard
            variant="pink"
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300 mb-5 md:mb-0"
          >
            <img
              src={Adyfas}
              alt="Adyfas"
              className="absolute -z-10 w-full h-full object-cover rounded-3xl"
            />
          </PixelCard>
          <div className="flex flex-col items-start md:ml-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Name: Ferdi Iskandar
            </h1>
            <p className="text-lg text-gray-600">
              Contact me for any inquiries or collaborations.
            </p>
            <div className="flex items-center gap-2 my-5">
              {SocialMedia.map((item, index) => {
                return (
                  <a key={index} href={item.path} target="_blank">
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
