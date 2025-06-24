import React from "react";

const Paragraph = ({
  headingText,
  paragraphText,
  fontSideHeading = "2xl",
  flat = false,
}) => {
  return (
    <div>
      {" "}
      <div className="lg:w-4/5">
        <h1
          className={`text-${fontSideHeading} sm:text-4xl lg:text-5xl font-medium leading-none tracking-tight`}
          data-aos="fade-up"
          data-aos-delay={900}
        >
          {headingText}
        </h1>
      </div>
      <div className={`flex ${flat ? "justify-start" : "justify-end"} mt-16`}>
        <div className="lg:w-3/5">
          <p
            className="text-base md:text-lg leading-relaxed text-gray-800"
            data-aos="fade-up"
            data-aos-delay={1000}
          >
            {paragraphText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
