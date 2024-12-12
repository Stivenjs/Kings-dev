import React from "react";

const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
          transform: "scale(1.1)",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
