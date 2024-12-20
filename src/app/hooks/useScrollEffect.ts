import { useState, useEffect, useCallback } from "react";

export const useScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Inicializar en función del tamaño de la ventana
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (!isMobile) {
      setScrollY(window.scrollY);
    }
  }, [isMobile]);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll); // Asegura que el scroll se maneje eficientemente
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  const calculateOpacity = () => {
    if (isMobile) return 1; // No aplicar efecto en móviles
    const maxScroll = window.innerHeight * 0.3;
    return Math.max(0, 1 - scrollY / maxScroll);
  };

  const calculateTransform = () => {
    if (isMobile) return "translateY(0px) scale(1)"; // No aplicar transformaciones en móviles
    const transform = scrollY * 0.3;
    return `translateY(${transform}px) scale(${1 + scrollY * 0.0005})`;
  };

  return {
    opacity: calculateOpacity(),
    transform: calculateTransform(),
    scrollY,
  };
};
