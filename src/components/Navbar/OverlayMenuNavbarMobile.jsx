import React from "react";
import TextSplit from "../TextSplit";
import { Link } from "react-router-dom";

const OverlayMenuNavbarMobile = ({
  overlayMenu,
  setOverlayMenu = () => {},
  items,
  itemsButton,
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
        <div className="flex items-center gap-2 my-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={34}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
            ></path>
          </svg>
          <span className="text-2xl font-light">ID</span>
        </div>
      </div>
    </>
  );
};

export default OverlayMenuNavbarMobile;
