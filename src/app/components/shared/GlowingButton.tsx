import React from "react";
import { ArrowRight } from "lucide-react";

const GlowingButton = () => {
  return (
    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
      <span className="relative flex items-center gap-2">
        Comienza tu Proyecto
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};

export default GlowingButton;
