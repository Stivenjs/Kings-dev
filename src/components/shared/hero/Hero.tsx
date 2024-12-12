import React from "react";
import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen sticky top-0">
        <ImageSection />
        <ContentSection />
      </div>

      <div className="h-[50vh] bg-black" />
    </>
  );
};

export default Hero;
