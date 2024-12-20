"use client";

import { useEffect, useState, ReactNode } from "react";

// Definir explícitamente el tipo de children como ReactNode
const ClientOnlyWrapper = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Se ejecuta solo en el cliente
  }, []);

  if (!isClient) {
    return null; // Evita renderizar en el servidor
  }

  return <>{children}</>; // Renderiza los hijos en el cliente
};

export default ClientOnlyWrapper;
