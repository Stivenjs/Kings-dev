"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Revolucionando el comercio electrónico para Reffinato",
    description:
      "Cómo ayudamos a Reffinato a aumentar sus ventas online en un 200 % con una solución de comercio electrónico personalizada.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/database-login-2b2c5.appspot.com/o/fotos%2FWhatsApp%20Image%202024-12-12%20at%207.22.40%20PM.jpeg?alt=media&token=8a62e2a7-ae31-4bc6-8766-25571e607916",
    link: "https://reffinato.vercel.app/",
  },
  {
    title: "Optimización de operaciones para Mixmeet",
    description:
      "Nuestro software personalizado redujo los costos operativos de MixMeet en un 35% y mejoró la eficiencia.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/database-login-2b2c5.appspot.com/o/fotos%2FScreenshot%202024-12-12%20193154.png?alt=media&token=6e2209b1-c930-4d8f-b712-6101004902d1",
    link: "https://mix-meet.vercel.app/",
  },
  {
    title: "Fasttify",
    description:
      "Fasttify es una plataforma SaaS que permite a los usuarios crear tiendas dropshipping personalizables con sistemas de pago y proveedores integrados.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/database-login-2b2c5.appspot.com/o/fotos%2FCaptura%20de%20pantalla%202025-05-26%20115119.png?alt=media&token=0b9e57af-0e35-46a6-944c-2f91d9cfdaf5",
    link: "https://www.fasttify.com/",
  },
  {
    title: "Gm Store",
    description:
      "La página GM Camisetas es una tienda en línea colombiana especializada en la venta de camisetas personalizadas y estampadas para hombres, mujeres y niños. Ofrece productos tanto al detal como al por mayor, con opciones económicas y originales, incluyendo estampados DTF. ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/database-login-2b2c5.appspot.com/o/fotos%2FCaptura%20de%20pantalla%202025-05-26%20115358.png?alt=media&token=07eb3581-e54c-468d-bb47-a2aa441d11c2",
    link: "https://www.gmcamisetas.store/",
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
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
