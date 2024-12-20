"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Laptop, Users, Info, Phone } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

const services = [
  {
    title: "Desarrollo a Medida",
    description: "Creamos soluciones digitales personalizadas para tu negocio.",
    icon: Laptop,
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Te ayudamos a optimizar tus procesos con tecnología innovadora.",
    icon: Info,
  },
  {
    title: "Integraciones Eficientes",
    description:
      "Conectamos herramientas y plataformas para potenciar tu negocio.",
    icon: Users,
  },
  {
    title: "Soporte Continuo",
    description:
      "Estamos aquí para garantizar que todo funcione sin problemas.",
    icon: Phone,
  },
];

export function Services() {
  return (
    <section className="py-12">
      <div className="container">
        <ScrollAnimation className="text-center">
          <h2 className="text-3xl font-bold text-violet-500">
            Nuestros Servicios
          </h2>
          <p className="mt-2 ">En Kings Dev</p>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <service.icon className="h-6 w-6 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
