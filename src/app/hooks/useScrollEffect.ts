import { useState, useEffect } from "react";

export const useScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar si el ancho de la pantalla es menor a 768px (dispositivo móvil)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Inicializar el estado de mobile en función del tamaño de la ventana
    handleResize();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      // Solo actualizamos el scrollY si no es un dispositivo móvil
      if (!isMobile) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const calculateOpacity = () => {
    if (isMobile) return 1; // No aplicar efecto de opacidad en móvil
    const maxScroll = window.innerHeight * 0.3;
    return Math.max(0, 1 - scrollY / maxScroll);
  };

  const calculateTransform = () => {
    if (isMobile) return "translateY(0px) scale(1)"; // No aplicar transformaciones en móvil
    const transform = scrollY * 0.3;
    return `translateY(${transform}px) scale(${1 + scrollY * 0.0005})`;
  };

  return {
    opacity: calculateOpacity(),
    transform: calculateTransform(),
    scrollY,
  };
};
