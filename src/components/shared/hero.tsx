"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollAnimation } from "./scroll-animation";
import { TypingEffect } from "./typing-effect";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      {" "}
      {/* Aumentado el padding top */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/placeholder.svg"
          alt="Fondo"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <ScrollAnimation>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Quiénes Somos
            </h1>
            <h2 className="mt-8 text-3xl font-bold">
              ¿Por qué elegir King's Dev para{" "}
              <TypingEffect
                words={[
                  "desarrollo web",
                  "aplicaciones móviles",
                  "inteligencia artificial",
                  "soluciones empresariales",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenWords={2000}
              />
              ?
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl">
              Kings Dev es una startup de software especializada en desarrollar
              soluciones innovadoras para empresas de todos los tamaños
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="transition-transform hover:scale-105"
              >
                Empezar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-transform hover:scale-105"
              >
                Saber más
              </Button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg"
              alt="Desarrollo de aplicaciones móviles"
              fill
              className="object-contain"
              priority
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
