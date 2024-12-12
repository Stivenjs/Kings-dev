"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "Kings Dev transformó nuestro negocio con sus soluciones innovadoras. La experiencia y la dedicación de su equipo son incomparables.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupX",
    content:
      "Trabajar con Kings Dev fue un punto de inflexión para nuestra startup. Entregaron un producto de alta calidad a tiempo y dentro del presupuesto.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, EnterpriseY",
    content:
      "El equipo de Kings Dev es increíblemente receptivo y capacitado. Hicieron realidad nuestra visión, superando nuestras expectativas.",
    avatar: "/placeholder.svg",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-violet-500">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-2">
            No confíe sólo en nuestra palabra: escuche a algunos de nuestros
            clientes satisfechos
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
