import React, { useState } from "react";
import FadeUp from "./FadeUp";
import TextSplit from "./TextSplit";
const GalleryPopupDetails = ({
  title,
  desc,
  img,
  children,
  details = false,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        style={{ display: "inline-block", cursor: "pointer" }}
      >
        {children}
      </span>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        >
          {details ? (
            <div className="relative top-15 flex flex-col items-center bg-white rounded-4xl shadow-xl px-6 py-8 h-[700px] w-full overflow-y-scroll">
              <div className="flex justify-between gap-5">
                <div className="items-start">
                  <TextSplit text={"Inside Tribes"} />
                </div>

                <div className="items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 20v-9q0-.825.588-1.412T9 9h8.2l-1.6-1.6L17 6l4 4l-4 4l-1.4-1.4l1.6-1.6H9v9z"
                    ></path>
                  </svg>
                </div>
              </div>
              {img && (
                <FadeUp>
                  <img
                    src={img}
                    alt={title}
                    className="w-[800px] h-[400px] object-cover rounded-xl mb-4 shadow-md"
                  />
                </FadeUp>
              )}
              <FadeUp delay={100}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                  {title}
                </h2>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="text-gray-700 text-center text-base sm:text-lg">
                  {desc}
                </p>
              </FadeUp>
            </div>
          ) : (
            <div className="flex justify-center items-center h-screen">
              {img && (
                <FadeUp>
                  <img
                    src={img}
                    alt={title}
                    className="w-[800px] h-[400px] object-cover rounded-xl mb-4 shadow-md"
                  />
                </FadeUp>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GalleryPopupDetails;
