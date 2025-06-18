import React from "react";
import { SocialMedia } from "../items/FooterItems";
import { Link } from "react-router-dom";

export const SocialMediaFooter = () => {
  return (
    <>
      {/* social media */}
      <div className="">
        <h1 className="text-2xl">Social Media</h1>
        <ul className="my-2">
          {SocialMedia.map((item, index) => (
            <li key={index}>
              <Link
                className="flex items-center gap-1 text-[12px] hover:underline group hover:text-[#b5a6ff]"
                to={item.path}
              >
                {item.icon} {item.name}
                <svg
                  className="group-hover:text-[#b5a6ff] group-hover:left-1 group-hover:opacity-100 opacity-0 cursor-pointer relative -left-1 transition-all duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={20}
                      strokeDashoffset={20}
                      d="M3 12h17.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="20;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={12}
                      strokeDashoffset={12}
                      d="M21 12l-7 7M21 12l-7 -7"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="12;0"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
