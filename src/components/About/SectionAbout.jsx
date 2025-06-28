import React from "react";
import { img1 } from "../items/AboutImage";
import Paragraph from "../Paragraph";
import GalleryPopupDetails from "../GalleryPopupDetails";

const SectionAbout = ({ headingText, paragraphText }) => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <Paragraph headingText={headingText} paragraphText={paragraphText} />

        <div className="mt-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[40rem]">
            {img1.slice(0, 4).map((item, index) => {
              let gridClasses = "";
              switch (index) {
                case 0:
                  gridClasses = "md:col-span-2";
                  break;
                case 1:
                  gridClasses = "md:row-span-2";
                  break;
                case 2:
                  gridClasses = "md:col-span-1";
                  break;
                case 3:
                  gridClasses = "md:col-span-1";
                  break;
                case 4:
                  gridClasses = "md:col-span-2";
                  break;
                default:
                  break;
              }

              return (
                <div key={index} className={gridClasses}>
                  {/* <GalleryPopupDetails img={item}> */}
                    <img
                      data-aos="fade-up"
                      data-aos-delay={100 * index}
                      src={item}
                      alt={`Collage image ${index + 1}`}
                      className="w-full h-full object-cover rounded-3xl shadow-lg"
                    />
                  {/* </GalleryPopupDetails> */}
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
