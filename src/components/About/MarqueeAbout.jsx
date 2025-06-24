import React, { useState, useEffect } from "react";
import { fetchProvinces } from "./FetchProvinces";

const MarqueeAbout = () => {
  const [provinces, setProvinces] = useState([]);

  const colors = ["#000000", "#FF4524", "#CDC3FF"];

  useEffect(() => {
    fetchProvinces({ setProvinces: setProvinces });
  }, []);

  const marqueeContent = (
    <div
      className={`flex animate-marquee motion-safe:animate-marquee hover:paused`}
      data-aos="fade-up"
      data-aos-duration={700}
    >
      {provinces.map((name, index) => (
        <div
          key={`p1-${index}`}
          className={`mx-4 flex-shrink-0 rounded-4xl text-4xl text-center border-4 font-semibold p-5 whitespace-nowrap  hover:text-white`}
          style={{
            borderColor: colors[index % colors.length],
            color: colors[index % colors.length],
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-x-hidden py-10 cursor-pointer">
      <div className="flex whitespace-nowrap">
        {marqueeContent}
        {marqueeContent}
      </div>
    </div>
  );
};

export default MarqueeAbout;
