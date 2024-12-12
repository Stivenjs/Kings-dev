"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function EmpoweringBusinesses() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-violet-500">
              Empoderando a las empresas
            </h2>
            <p className="mt-4 ">
              En Kings Dev, creemos que el software es la clave para desbloquear
              nuevos niveles de eficiencia, productividad y crecimiento para las
              empresas de todos los tamaños. Nuestro equipo de desarrolladores y
              diseñadores cualificados trabaja incansablemente para crear
              soluciones personalizadas que potencien su negocio para alcanzar
              su máximo potencial.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Obtenga una cotización
              </Button>
              <Button variant="outline">Programe una consulta</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] lg:h-[400px]"
          >
            <Image
              src="/placeholder.svg"
              alt="Empowering Businesses"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
