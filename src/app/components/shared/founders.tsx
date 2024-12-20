"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Founders() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              <Image
                src="/"
                alt="Founder"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold text-violet-500">
                  Conoce a los fundadores
                </h2>
                <p className="mt-2">
                  Kings Dev fue fundada por un equipo de emprendedores
                  experimentados y expertos en tecnología que comparten la
                  pasión por el uso de software para transformar negocios
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              <Image
                src="https://images.pexels.com/photos/15543126/pexels-photo-15543126/free-photo-of-oficina-aula-clase-pizarra-blanca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our Values"
                width={80}
                height={80}
                className="rounded-s-3xl"
              />

              <div>
                <h2 className="text-2xl font-bold text-violet-500">
                  Nuestros valores
                </h2>
                <p className="mt-2">
                  En el corazón de Kings Dev hay un conjunto de valores
                  fundamentales que guían cada una de nuestras decisiones y
                  acciones. Estamos comprometidos con la innovación,
                  colaboración, transparencia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
