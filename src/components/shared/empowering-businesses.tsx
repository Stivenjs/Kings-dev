"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/shared/form-modal";
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
              <FormModal
                buttonLabel="Obtenga una cotización"
                title="Inicia tu Proyecto"
                showIcon={true}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] lg:h-[400px] rounded-sm "
          >
            <Image
              src="https://images.pexels.com/photos/8761540/pexels-photo-8761540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Empowering Businesses"
              fill
              className="rounded-sm h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
