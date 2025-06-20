import React from "react";
import { Link } from "react-router-dom";
import { FooterLinks } from "../items/FooterItems";

const ExploreFooter = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl tracking-tight">Explore More</h2>
      <ul className="space-y-3">
        {FooterLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-[16px]"
            >
              {item.name}
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreFooter;
