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
            <h2 className="text-3xl font-bold">Empowering Businesses</h2>
            <p className="mt-4 text-gray-500">
              At Kings Dev, we believe that software is the key to unlocking new
              levels of efficiency, productivity, and growth for businesses of
              all sizes. Our team of skilled developers and designers work
              tirelessly to create custom solutions that empower your business
              to reach its full potential.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button>Get a Quote</Button>
              <Button variant="outline">Schedule a Consultation</Button>
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
