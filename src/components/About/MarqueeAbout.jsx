import React, { useState, useEffect } from "react";

const MarqueeAbout = () => {
  const [provinces, setProvinces] = useState([]);
  const colors = ["#000000", "#FF4524", "#CDC3FF"];

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/codenoid/Data-Wilayah.js/wilayah.js"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const scriptContent = await response.text();
        const jsonString = scriptContent.match(
          /const ID_PROVINSI = (\{.*?\});/s
        );
        if (jsonString && jsonString[1]) {
          const provinceData = JSON.parse(jsonString[1]);
          setProvinces(Object.values(provinceData));
        } else {
          throw new Error("Could not parse province data");
        }
      } catch (error) {
        console.error("Failed to fetch province data:", error);
        setProvinces([
          "Build The Best Team",
          "The Best Place To Work",
          "And A Better World",
          "For Our Community",
        ]);
      }
    };

    fetchProvinces();
  }, []);

  const marqueeContent = (
    <div className="flex animate-marquee motion-safe:animate-marquee hover:paused" data-aos="fade-up" data-aos-duration={700}>
      {provinces.map((name, index) => (
        <div
          key={`p1-${index}`}
          className="mx-4 flex-shrink-0 rounded-4xl text-4xl text-center border-4 font-semibold p-5 whitespace-nowrap"
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
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 250s linear infinite;
          }
          .hover\\:paused:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeAbout;
