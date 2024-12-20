"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50  lg:hidden">
      <div className="flex flex-col items-center text-white">
        <span className="text-sm mb-2 text-white/80">Desliza hacia abajo</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
