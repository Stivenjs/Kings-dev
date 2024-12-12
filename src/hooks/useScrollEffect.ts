import { useState, useEffect } from "react";

export const useScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = () => {
    // Reducimos maxScroll a 30% de la altura de la ventana para un efecto más rápido
    const maxScroll = window.innerHeight * 0.3;
    return Math.max(0, 1 - scrollY / maxScroll);
  };

  const calculateTransform = () => {
    // Reducimos la intensidad del efecto parallax
    const transform = scrollY * 0.3;
    // Reducimos el efecto de escala
    return `translateY(${transform}px) scale(${1 + scrollY * 0.0005})`;
  };

  return {
    opacity: calculateOpacity(),
    transform: calculateTransform(),
    scrollY,
  };
};
