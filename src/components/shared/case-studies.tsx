"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Revolucionando el comercio electrónico para RetailGiant",
    description:
      "Cómo ayudamos a RetailGiant a aumentar sus ventas online en un 200 % con una solución de comercio electrónico personalizada.",
    image: "/placeholder.svg",
  },
  {
    title: "Optimización de operaciones para LogisticsPro",
    description:
      "Nuestro software personalizado redujo los costos operativos de LogisticsPro en un 35% y mejoró la eficiencia.",
    image: "/placeholder.svg",
  },
];

export function CaseStudies() {
  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-violet-500">
            Casos de estudio
          </h2>
          <p className="mt-2">
            Vea cómo hemos ayudado a empresas como la suya a tener éxito
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={study.image}
                alt={study.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Button variant="outline">
                  Leer más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
