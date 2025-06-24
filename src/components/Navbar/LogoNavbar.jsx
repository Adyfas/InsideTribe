import React from "react";
import TextSplit from "../TextSplit";

const LogoNavbar = ({ isOnDark }) => {
  return (
    <>
      {/* logo */}
      <div className={`${
          isOnDark ? "text-white" : "text-black"
        } items-center`} lang="zxx" translate="no">
        <h1 className="text-2xl font-semibold" lang="zxx" translate="no">
          <TextSplit  text={"Inside Tribe"} duration={0.2} />
        </h1>
      </div>
    </>
  );
};

export default LogoNavbar;
