import React from "react";
import Toraja from "../../assets/img/SukuToraja/image5.jpeg";
import Baduy from "../../assets/img/SukuBaduy/image4.jpeg";
import { Link } from "react-router-dom";
import FadeUp from "../FadeUp";
import GalleryPopupDetails from "../GalleryPopupDetails";

const TwoTribe = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-6 px-6 max-md:flex-col">
        <div className="flex items-start rounded-2xl overflow-hidden cursor-pointer transition-all duration-700">
          <GalleryPopupDetails
            desc={` The Toraja tribe is an ethnic group that inhabits the mountainous
              region in the northern part of South Sulawesi, Indonesia. They are
              known for their unique culture and traditions, particularly in their
              funeral rituals called Rambu Solo, as well as their traditional
              houses called Tongkonan.`}
            img={Toraja}
            title={"Toraja Tribe"}
          >
            <img
              src={Toraja}
              alt="Toraja Source: https://id.pinterest.com/pin/2955556000530152/"
              className="rounded-2xl w-5xl hover:scale-105 transition-all duration-700"
            />
          </GalleryPopupDetails>
        </div>
        <div className="flex flex-col items-start">
          <FadeUp>
            <h2 className="text-4xl font-bold mb-4 max-md:text-2xl">
              Toraja Tribe
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-lg text-gray-600 mb-8">
              The Toraja tribe is an ethnic group that inhabits the mountainous
              region in the northern part of South Sulawesi, Indonesia. They are
              known for their unique culture and traditions, particularly in
              their funeral rituals called Rambu Solo, as well as their
              traditional houses called Tongkonan.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <Link
              to={"/explore/Toraja"}
              className="bg-[#050307] hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500"
            >
              Explore Now
            </Link>
          </FadeUp>
        </div>
      </div>

      <div className="flex items-center my-7 justify-between gap-6 px-6 max-md:flex-col">
        {/* Teks untuk desktop (md ke atas) */}
        <div className="flex flex-col items-start hidden md:flex">
          <FadeUp>
            <h2 className="text-4xl font-bold mb-4 max-md:text-2xl">
              Baduy Tribe
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-lg text-gray-600 mb-8">
              The Baduy tribe is a traditional Sundanese community that inhabits
              the Kendeng Mountains, Kanekes Village, Lebak Regency, Banten.
              They are known for holding fast to their ancestral customs and
              traditions, as well as having two main groups: Inner Baduy and
              Outer Baduy.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <Link
              to={"/explore/Baduy"}
              className="bg-[#050307] hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500"
            >
              Explore Now
            </Link>
          </FadeUp>
        </div>
        <div className="flex items-start rounded-2xl overflow-hidden cursor-pointer transition-all duration-700">
          <GalleryPopupDetails
            desc={`  The Baduy tribe is a traditional Sundanese community that inhabits
              the Kendeng Mountains, Kanekes Village, Lebak Regency, Banten.
              They are known for holding fast to their ancestral customs and
              traditions, as well as having two main groups: Inner Baduy and
              Outer Baduy.`}
            img={Baduy}
            title={
              "Baduy Tribe Source: https://id.pinterest.com/pin/38139928090222114/"
            }
          >
            <img
              src={Baduy}
              alt="Baduy Tribe Source: https://id.pinterest.com/pin/38139928090222114/"
              className="rounded-2xl h-2xl w-5xl hover:scale-105 transition-all duration-700"
            />
          </GalleryPopupDetails>
        </div>
        {/* Teks untuk mobile & tablet (md ke bawah) */}
        <div className="flex flex-col items-start md:hidden">
          <FadeUp>
            <h2 className="text-4xl font-bold mb-4 max-md:text-2xl transition-all duration-500 hover:scale-105 hover:text-[#222]">
              Baduy Tribe
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-lg text-gray-600 mb-8">
              The Baduy tribe is a traditional Sundanese community that inhabits
              the Kendeng Mountains, Kanekes Village, Lebak Regency, Banten.
              They are known for holding fast to their ancestral customs and
              traditions, as well as having two main groups: Inner Baduy and
              Outer Baduy.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <Link
              to={"/explore/Baduy"}
              className="bg-[#050307] hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500"
            >
              Explore Now
            </Link>
          </FadeUp>
        </div>
      </div>
    </>
  );
};

export default TwoTribe;
