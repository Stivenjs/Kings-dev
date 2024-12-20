import { useState, useEffect } from "react";

export const useScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar el tamaño de la pantalla (móvil o no)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Asumimos que dispositivos móviles son <= 768px
    };

    handleResize(); // Llamar al inicio para establecer el estado correcto
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        setScrollY(window.scrollY); // Solo actualizar el scroll si no es móvil
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  const calculateOpacity = () => {
    if (isMobile) return 1; // No aplicar opacidad en móviles
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
