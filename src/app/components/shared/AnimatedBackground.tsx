import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />
      <div className="absolute inset-0">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-blue-400/30 to-emerald-400/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-orange-400/30 to-rose-400/30 blur-3xl animate-blob animation-delay-4000" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
