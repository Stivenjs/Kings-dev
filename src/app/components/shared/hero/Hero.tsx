"use client";
import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";
import ScrollIndicator from "../ScrollIndicator";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <div className="sticky top-0 flex flex-col lg:flex-row min-h-screen">
          <ImageSection />
          <ContentSection />
          <ScrollIndicator />
        </div>
        <div className="h-[50vh] bg-black" />
      </section>
    </>
  );
};

export default Hero;
