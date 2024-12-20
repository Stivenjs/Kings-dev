"use client";

import { motion } from "framer-motion";
import { Code2, Users, Clock, Star } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    label: "10+ Proyectos Completados",
    description: "Soluciones web y móviles entregadas",
  },
  {
    icon: Users,
    label: "15+ Clientes Activos",
    description: "Empresas confían en nuestros servicios",
  },
  {
    icon: Clock,
    label: "98% Tiempo de Actividad",
    description: "Disponibilidad garantizada de servicios",
  },
  {
    icon: Star,
    label: "4.5/5 Satisfacción",
    description: "Basado en encuestas a clientes",
  },
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
          <h2 className="text-3xl font-bold text-white">Nuestro Impacto</h2>
          <p className="mt-2 text-primary-foreground/80">
            Resultados que demuestran nuestro compromiso con la excelencia
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
              className="flex flex-col items-center text-center p-4"
            >
              <achievement.icon className="h-12 w-12 mb-4" />
              <p className="font-semibold mb-2">{achievement.label}</p>
              <p className="text-sm text-primary-foreground/80">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
