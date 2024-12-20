"use client";
import { GridOverlay } from "./GridOverlay";
import { useScrollEffect } from "@/app/hooks/useScrollEffect";

const ImageSection = () => {
  const { opacity, transform } = useScrollEffect();

  return (
    <div className="relative w-full lg:w-1/2 h-auto lg:h-screen overflow-hidden">
      {/* Ocultar el fondo en dispositivos móviles */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-900/90 to-fuchsia-900/90 mix-blend-multiply hidden lg:block"
        style={{ opacity }}
      />
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Ocultar imagen en dispositivos móviles */}
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80"
          alt="Tech Innovation"
          className="h-full w-full object-cover object-center hidden lg:block"
          style={{ transform: "scale(1.1)" }}
        />
      </div>
      <GridOverlay opacity={opacity} />
    </div>
  );
};

export default ImageSection;
