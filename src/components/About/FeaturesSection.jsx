import React from "react";
import Paragraph from "../Paragraph";

const FeaturesSection = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 flex-col">
      <div className="w-full max-w-7xl mx-auto">
        <Paragraph
          flat={true}
          fontSideHeading="6xl"
          headingText={"✲ Why Inside Tribe Exist ?"}
          paragraphText={
            "We exist because we want to create a digital movement that bridges Indonesia's closed culture with the modern world, so that ancestral identities remain alive in the memories of new generations."
          }
        />
      </div>
    </main>
  );
};

export default FeaturesSection;
