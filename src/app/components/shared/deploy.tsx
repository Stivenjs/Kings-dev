"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Rocket,
  Shield,
  Users,
  Code,
  Cloud,
  HeartHandshake,
} from "lucide-react";

const deploymentPhases = [
  {
    name: "Planificación Estratégica",
    description:
      "Análisis detallado de requisitos y diseño de arquitectura personalizada para garantizar una implementación exitosa.",
    icon: Code,
  },
  {
    name: "Seguridad Avanzada",
    description:
      "Implementación de protocolos de seguridad robustos y cumplimiento normativo para proteger datos críticos.",
    icon: Shield,
  },
  {
    name: "Migración Sin Interrupciones",
    description:
      "Proceso de migración optimizado para mantener la continuidad del negocio sin afectar las operaciones diarias.",
    icon: Cloud,
  },
  {
    name: "Despliegue Automatizado",
    description:
      "Utilización de CI/CD para garantizar implementaciones consistentes y libres de errores en todos los entornos.",
    icon: Rocket,
  },
  {
    name: "Capacitación Integral",
    description:
      "Programas de formación personalizados para asegurar la adopción efectiva por parte del equipo.",
    icon: Users,
  },
  {
    name: "Soporte Continuo",
    description:
      "Asistencia técnica 24/7 y mantenimiento proactivo para optimizar el rendimiento y resolver incidencias.",
    icon: HeartHandshake,
  },
];

export function Deploy() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-violet-600 mb-6">
            Proceso de Implementación
          </h2>
          <p className="text-lg  mb-12">
            Nuestro enfoque metódico garantiza una implementación exitosa y sin
            contratiempos de su solución tecnológica, respaldado por un equipo
            experto comprometido con la excelencia operativa.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deploymentPhases.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-100 mb-4">
                    <phase.icon className="h-6 w-6 text-violet-600" />
                  </div>
                  <CardTitle className="text-xl text-violet-500">
                    {phase.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{phase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
