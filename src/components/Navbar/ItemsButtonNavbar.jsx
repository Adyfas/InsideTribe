import React from "react";
import { Link } from "react-router-dom";

const ItemsButtonNavbar = ({ itemsButton }) => {
  return (
    <>
      {/* button */}
      <div className="items-center hidden lg:block">
        <div className="flex items-center justify-center gap-2">
          {itemsButton.map((items, index) => (
            <button
              key={index}
              lang="zxx"
              translate="no"
              className="border border-black/50 rounded-3xl bg-white/10 backdrop-blur-xl px-5 py-2 font-medium transition-all duration-300 hover:scale-99 text-[12px] "
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={1000}
            >
              <Link key={index} to={items.path} lang="zxx" translate="no">
                {items.name}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemsButtonNavbar;
