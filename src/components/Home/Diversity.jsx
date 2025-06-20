import React from "react";
import Counter from "../Counter";

const stats = [
  {
    value: "300",
    desc: "Tribes",
  },
  {
    value: "746",
    desc: "Languages",
  },
  {
    value: "38",
    desc: "Provinces",
  },
  {
    value: "170000",
    desc: "Islands",
  },
];

const Diversity = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 w-full py-8">
      <div className="flex flex-wrap justify-center max-md:flex-col">
        {stats.map((item, idx) => (
          <div
            data-aos="fade-up"
            data-aos-delay={300 * idx}
            key={idx}
            className="bg-[#F7EDDE] rounded-3xl shadow-md flex flex-col justify-center items-center p-8 w-[260px] h-[220px] max-w-[90vw] max-md:w-4xl max-md:my-4 transition-transform duration-500 hover:shadow-md relative group animate-fadeIn cursor-pointer m-4 max-md:m-0"
          >
            <span className="text-5xl md:text-6xl font-extrabold text-[#232025] mb-2 transition-colors duration-300 group-hover:text-[#B6895B]">
              <Counter target={item.value} />
              {/* {item.value} */}
            </span>
            <span className="text-lg md:text-xl font-medium text-[#232025] text-center mt-2">
              {item.desc}
            </span>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#B6895B] rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diversity;
