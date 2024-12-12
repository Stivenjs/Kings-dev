"use client";
import { GridOverlay } from "./GridOverlay";
import { useScrollEffect } from "@/hooks/useScrollEffect";

const ImageSection = () => {
  const { opacity, transform } = useScrollEffect();

  return (
    <div className="relative w-full lg:w-1/2 h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-900/90 to-fuchsia-900/90 mix-blend-multiply"
        style={{ opacity }}
      />
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
        style={{ transform }}
      >
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80"
          alt="Tech Innovation"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <GridOverlay opacity={opacity} />
    </div>
  );
};

export default ImageSection;
