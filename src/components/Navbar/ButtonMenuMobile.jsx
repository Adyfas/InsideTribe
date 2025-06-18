import React from "react";

const ButtonMenuMobile = ({ setOverlayMenu = () => {} }) => {
  return (
    <>
      {/* button mobile */}
      <div className="items-center lg:hidden block transition-all duration-700">
        <button
          onClick={() => setOverlayMenu(true)}
          data-aos="fade-up"
          className="py-2 bg-white/50 backdrop-blur-2xl border-black/50 border rounded-3xl px-4 flex items-center gap-3 hover:border-gray-300 transition-all duration-700"
        >
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default ButtonMenuMobile;
