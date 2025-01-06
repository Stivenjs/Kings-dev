import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kings Dev - Startup de desarrollo de software",
  icons: {
    icon: "/icono.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icono.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
