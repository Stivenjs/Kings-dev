"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Founders() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <FounderCard
            imageSrc="/Us.webp"
            title="Conoce a los fundadores"
            description="Kings Dev fue fundada por un equipo de emprendedores experimentados y expertos en tecnología que comparten la pasión por el uso de software para transformar negocios."
          />
          <FounderCard
            imageSrc="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Nuestros valores"
            description="En el corazón de Kings Dev hay un conjunto de valores fundamentales que guían cada una de nuestras decisiones y acciones. Estamos comprometidos con la innovación, colaboración, transparencia."
          />
        </div>
      </div>
    </section>
  );
}

interface FounderCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function FounderCard({ imageSrc, title, description }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4"
    >
      <div className="relative w-full md:w-60 aspect-[4/3]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 ">
        <h2 className="text-2xl font-bold text-violet-500">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
