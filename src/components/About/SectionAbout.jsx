import React from "react";
import { img1 } from "../items/AboutImage";

const SectionAbout = ({ headingText, paragraphText }) => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="lg:w-4/5">
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-medium leading-none tracking-tight"
            data-aos="fade-up"
            data-aos-delay={900}
          >
            {headingText}
          </h1>
        </div>
        <div className="flex justify-end mt-16">
          <div className="lg:w-3/5">
            <p
              className="text-base md:text-lg leading-relaxed text-gray-800"
              data-aos="fade-up"
              data-aos-delay={1000}
            >
              {paragraphText}
            </p>
          </div>
        </div>

        <div className="mt-24 w-full">
          <div
            className="grid grid-cols-3 grid-rows-2 gap-6 h-[32rem] md:h-[40rem]"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            {img1.slice(0, 4).map((item, index) => {
              let gridClasses = "";
              switch (index) {
                case 0:
                  gridClasses = "col-span-2";
                  break;
                case 1:
                  gridClasses = "row-span-2";
                  break;
                case 2:
                  gridClasses = "col-span-1";
                  break;
                case 3:
                  gridClasses = "col-span-1";
                  break;
                default:
                  break;
              }

              return (
                <div key={index} className={gridClasses}>
                  <img
                    src={item}
                    alt={`Collage image ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionAbout;
