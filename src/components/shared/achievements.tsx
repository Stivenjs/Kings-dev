"use client";

import { motion } from "framer-motion";
import { Award, Users, Code, ThumbsUp } from "lucide-react";

const achievements = [
  { icon: Award, label: "Socio certificado de Microsoft" },
  { icon: Users, label: "Más de 500 clientes satisfechos" },
  { icon: Code, label: "Más de 100 proyectos completados" },
  { icon: ThumbsUp, label: "Tasa de satisfacción del cliente del 99%" },
];

export function Achievements() {
  return (
    <section className="py-12 bg-gradient-to-r from-violet-500 to-fuchsia-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white">Nuestros logros</h2>
          <p className="mt-2 text-primary-foreground/80">
            Reconocimientos que demuestran nuestra experiencia y satisfacción
            del cliente
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <achievement.icon className="h-12 w-12 mb-4" />
              <p className="font-semibold">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
