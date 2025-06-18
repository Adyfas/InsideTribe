import React from "react";
import { Link } from "react-router-dom";

export const ItemsNavbar = ({ items, location, Color }) => {
  return (
    <>
      {/* items */}
      <div className="items-center transform hidden lg:block">
        <ul className="flex items-center gap-x-15 bg-white/10 backdrop-blur-xl rounded-2xl transition-all duration-700 p-1 px-4">
          {items?.map((item, idx) => (
            <li
              key={idx}
              className="p-0 m-0 relative"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={1500}
            >
              <Link
                className={`group relative font-medium text-[15px] transition-all duration-500`}
                to={item.path}
                lang="zxx"
                translate="no"
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-${Color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                    location.pathname === item.path
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
