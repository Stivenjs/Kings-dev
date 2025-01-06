"use client";

import { useEffect } from "react";

export function WhatsAppButton() {
  useEffect(() => {
    // Cargar el script de Tidio
    const script = document.createElement("script");
    script.src = "//code.tidio.co/jvxcelve2juamau2qoqumgnva9izmuzz.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
