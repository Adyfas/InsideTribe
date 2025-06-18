import React from "react";
import TextSplit from "../TextSplit";
import { Link } from "react-router-dom";

const OverlayMenuNavbarMobile = ({
  overlayMenu,
  setOverlayMenu = () => {},
  items,
  itemsButton
}) => {
  return (
    <>
      {/* items navbar mobile */}
      <div
        className={`fixed inset-0 w-full h-screen overflow-scroll z-50 bg-[#FF4524] flex flex-col justify-between p-8 lg:hidden  transition-all duration-500 transform ${
          overlayMenu ? "translate-y-0" : "-translate-y-[100%]"
        } no-scroll`}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1
            className="text-2xl font-semibold tracking-tight"
            lang="zxx"
            translate="no"
          >
            Inside Tribe
          </h1>
          <button
            onClick={() => setOverlayMenu(!overlayMenu)}
            className="flex items-center gap-1 border border-black rounded-full px-4 py-1 text-md font-light hover:scale-99 transition"
            lang="zxx"
            translate="no"
          >
            Close
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

        {/* Menu */}
        <ul className="flex flex-col gap-10 mt-12">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                lang="zxx"
                translate="no"
                to={item.path}
                className={`text-6xl leading-none my-5 hover:font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "font-medium"
                    : "font-extralight"
                }`}
              >
                <TextSplit text={item.name} duration={0.7} />
              </Link>
            </li>
          ))}
          {itemsButton.map((item, idx) => (
            <li key={idx}>
              <Link
                lang="zxx"
                translate="no"
                to={item.path}
                className={`text-6xl leading-none my-5 hover:font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "font-medium"
                    : "font-extralight"
                }`}
              >
                <TextSplit text={item.name} duration={0.7} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-center gap-2 my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5" />
            <path
              d="M2 12h20M12 2c2.5 3.5 2.5 14 0 20M12 2c-2.5 3.5-2.5 14 0 20"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-light">ID</span>
        </div>
      </div>
    </>
  );
};

export default OverlayMenuNavbarMobile;
