import React from "react";
import Toraja from "../../assets/img/SukuToraja/image5.jpeg";
import Baduy from "../../assets/img/SukuBaduy/image4.jpeg";
import { Link } from "react-router-dom";

const TwoTribe = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-6 px-6 max-md:flex-col">
        <div className="flex items-start">
          <img
            data-aos="zoom-in"
            data-aos-delay={200}
            src={Toraja}
            alt="Toraja Source: https://id.pinterest.com/pin/2955556000530152/"
            className="rounded-2xl w-5xl"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2
            className="text-4xl font-bold mb-4 max-md:text-2xl"
            data-aos="fade-up"
            data-aos-delay={220}
          >
            Toraja Tribe
          </h2>
          <p
            className="text-lg text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay={250}
          >
            The Toraja tribe is an ethnic group that inhabits the mountainous
            region in the northern part of South Sulawesi, Indonesia. They are
            known for their unique culture and traditions, particularly in their
            funeral rituals called Rambu Solo, as well as their traditional
            houses called Tongkonan.
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay={300}
            to={"/explore/TorajaTribe"}
            className="bg-[#050307] hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500"
          >
            Explore Now
          </Link>
        </div>
      </div>

      <div className="flex items-center my-7 justify-between gap-6 px-6 max-md:flex-col">
        <div className="flex flex-col items-start">
          <h2
            className="text-4xl font-bold mb-4 max-md:text-2xl max-md:hidden"
            data-aos="fade-up"
            data-aos-delay={320}
          >
            Baduy Tribe
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 max-md:hidden"
            data-aos="fade-up"
            data-aos-delay={330}
          >
            The Baduy tribe is a traditional Sundanese community that inhabits
            the Kendeng Mountains, Kanekes Village, Lebak Regency, Banten. They
            are known for holding fast to their ancestral customs and
            traditions, as well as having two main groups: Inner Baduy and Outer
            Baduy.
          </p>
          <Link
            data-aos="zoom-in"
            data-aos-delay={310}
            to={"/explore/BaduyTribe"}
            className="bg-[#050307] hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500 max-md:hidden"
          >
            Explore Now
          </Link>
        </div>
        <div className="flex items-start">
          <img
            data-aos="zoom-in"
            data-aos-delay={300}
            src={Baduy}
            alt="Baduy Tribe Source: https://id.pinterest.com/pin/38139928090222114/"
            className="rounded-2xl h-2xl w-6xl"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2
            className="text-4xl font-bold mb-4 max-md:text-2xl lg:hidden"
            data-aos="fade-up"
            data-aos-delay={320}
          >
            Baduy Tribe
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 lg:hidden"
            data-aos="fade-up"
            data-aos-delay={330}
          >
            The Baduy tribe is a traditional Sundanese community that inhabits
            the Kendeng Mountains, Kanekes Village, Lebak Regency, Banten. They
            are known for holding fast to their ancestral customs and
            traditions, as well as having two main groups: Inner Baduy and Outer
            Baduy.
          </p>
          <Link
            data-aos="zoom-in"
            data-aos-delay={310}
            to={"/explore/BaduyTribe"}
            className="bg-[#050307] hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500 lg:hidden"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default TwoTribe;
