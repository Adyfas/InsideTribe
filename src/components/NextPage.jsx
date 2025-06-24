import React from "react";
import { Link } from "react-router-dom";

const NextPage = ({ page = "Home", link }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="items-start">
        <Link to={link}>
          <h1 className="text-3xl m-4 bg-[#050307] p-4 rounded-xl text-white flex items-center gap-3 font-light">
            Go to {page}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
              ></path>
            </svg>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default NextPage;
