import React from "react";

const CopyrightFooter = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Inside Tribe. All rights reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
