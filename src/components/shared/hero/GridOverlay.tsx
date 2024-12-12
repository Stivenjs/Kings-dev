import React from "react";

interface GridOverlayProps {
  opacity: number;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ opacity }) => {
  return (
    <div
      className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 mix-blend-multiply"
      style={{ opacity }}
    >
      {Array.from({ length: 64 }).map((_, i) => (
        <div
          key={i}
          className="bg-white/5 backdrop-blur-sm transform hover:bg-white/10 transition-all duration-500"
          style={{
            transitionDelay: `${Math.random() * 500}ms`,
          }}
        />
      ))}
    </div>
  );
};
