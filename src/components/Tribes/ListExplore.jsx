import React from "react";
import { ParallaxImg } from "../items/AboutImage";
import { Link } from "react-router-dom";

export default function ListExplore() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6 flex flex-col md:grid md:grid-cols-12 gap-4">
        <div className="md:col-span-9 bg-[#F7EFE3] rounded-2xl flex items-center justify-center md:justify-start px-6 py-4 font-semibold text-sm">
          EXPLORE NOW
        </div>
        <Link
          to={"/explore"}
          className="md:col-span-3 bg-[#F7EFE3] rounded-2xl flex items-center justify-center px-6 py-4 font-semibold text-sm hover:bg-[#EEDFCB] transition"
        >
          SEE ALL →
        </Link>
      </div>

      {ParallaxImg.map((item, idx) => (
        <article
          data-aos="fade-up"
          key={idx}
          className="group mb-6 flex flex-col md:grid md:grid-cols-12 gap-4 cursor-pointer"
        >
          <div className="order-2 md:order-1 md:col-span-8 bg-[#F7EFE3] rounded-2xl p-6 flex flex-col justify-center">
            <Link
              to={`/explore${item.link}`}
              className="text-xl md:text-2xl font-semibold mb-1 group-hover:underline"
            >
              {item.description}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
                ></path>
              </svg> */}
            </Link>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>
          <figure className="order-1 md:order-2 md:col-span-4 rounded-2xl overflow-hidden">
            <img
              src={item.img}
              alt={item.location}
              className="w-full h-64 md:h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
            />
          </figure>
        </article>
      ))}
      <div className="flex justify-center items-center my-6">
        <Link
          to={"/explore"}
          className="text-center text-5xl text-black hover:underline flex items-center gap-3 group"
        >
          Explore{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64}
            height={64}
            viewBox="0 0 24 24"
            className="group-hover:translate-x-5 transition-all duration-700"
          >
            <path
              fill="currentColor"
              d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
