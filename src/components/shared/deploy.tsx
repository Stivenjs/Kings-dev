"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Crown, Shell, Chrome } from "lucide-react";

const partners = [
  { name: "Kings Dev", description: "Desarrollo de software", icon: Crown },
  {
    name: "Shell",
    description:
      "Como socio líder en desarrollo de software, Kings Dev ha colaborado con Shell para",
    icon: Shell,
  },
  {
    name: "Google",
    description:
      "Nuestra asociación con Google nos ha permitido aprovechar las últimas tecnologías en la nube y mas",
    icon: Chrome,
  },
];

export function Deploy() {
  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-violet-500">Despliegue</h2>
          <p className="mt-2">
            Una vez que su solución esté lista, trabajaremos con usted para
            implementarla. proporcionando formación integral y apoyo continuo
            para garantizar una experiencia sin problemas y el máximo éxito en
            la adopción y uso de la solución.
          </p>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <partner.icon className="h-6 w-6 mb-2" />
                  <CardTitle>{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
