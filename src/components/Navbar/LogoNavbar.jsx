import React from "react";
import TextSplit from "../TextSplit";

const LogoNavbar = () => {
  return (
    <>
      {/* logo */}
      <div className="items-center" lang="zxx" translate="no">
        <h1 className="text-2xl font-semibold" lang="zxx" translate="no">
          <TextSplit  text={"Inside Tribe"} duration={0.4} delay={0.3} />
        </h1>
      </div>
    </>
  );
};

export default LogoNavbar;
