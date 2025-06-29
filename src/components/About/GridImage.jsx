import React from "react";
import Masonry from "react-masonry-css";
import { ParallaxImg } from "../items/AboutImage";
import { Link } from "react-router-dom";
import GalleryPopupDetails from "../GalleryPopupDetails";

export const GridImage = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <div className="w-full bg-white p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {ParallaxImg.map((item, index) => (
          <GalleryPopupDetails img={item.img}>
            <img
              data-aos="zoom-in"
              data-aos-delay={10 * index}
              src={item.img}
              alt={item.description || ""}
              key={index}
              className="w-full mb-6 rounded-3xl shadow-xl border-2 border-white"
              style={{ background: "#eee" }}
              draggable={false}
            />
          </GalleryPopupDetails>
        ))}
      </Masonry>
      <div className="flex justify-center items-center my-6">
        <Link
          to={"/tribes"}
          className="text-center text-5xl text-black hover:underline flex items-center gap-3 group"
        >
          Go to{" "}
          <span lang="zxx" translate="no">
            Tribes
          </span>{" "}
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
    </div>
  );
};
