"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Paintbrush, Code, TestTube } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    title: "Descubrir",
    description:
      "Empezamos por entender sus necesidades. Nuestro equipo trabajará estrechamente con usted para recopilar información.",
    icon: Search,
  },
  {
    title: "Definir",
    description: "Juntos, definiremos el alcance, la línea de tiempo de su proyecto",
    icon: FileText,
  },
  {
    title: "Diseño",
    description:
      "Nuestros diseñadores y desarrolladores crearán un plano detallado para ti",
    icon: Paintbrush,
  },
  {
    title: "Construir",
    description:
      "Nuestros desarrolladores cualificados darán vida a su solución",
    icon: Code,
  },
  {
    title: "Prueba",
    description:
      "Someteremos su solución a pruebas rigurosas para identificar fallas y errores",
    icon: TestTube,
  },
];

export function OurProcess() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-violet-500">
            Nuestro proceso
          </h2>
          <p className="mt-2">En Kings Dev, seguimos un método probado</p>
        </motion.div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <step.icon className="h-6 w-6" />
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="/placeholder.svg"
              alt="Our Process"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
