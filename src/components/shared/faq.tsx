"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Con qué tipos de empresas trabajan?",
    answer:
      "Trabajamos con empresas de todos los tamaños en diversas industrias. Nuestros clientes van desde nuevas empresas hasta grandes empresas en sectores como el comercio electrónico, la atención médica, las finanzas y más.",
  },
  {
    question: "¿Cuánto tiempo lleva un proyecto típico?",
    answer:
      "Los plazos del proyecto pueden variar según el alcance y la complejidad. Un proyecto pequeño puede tardar entre 4 y 6 semanas, mientras que proyectos más grandes y complejos pueden tardar varios meses. Siempre proporcionamos un cronograma detallado durante nuestra consulta inicial.",
  },
  {
    question: "¿Ofrecen soporte y mantenimiento continuo?",
    answer:
      "Sí, ofrecemos paquetes integrales de soporte y mantenimiento para garantizar que su software siga funcionando de manera óptima. Nuestro equipo siempre está disponible para abordar cualquier problema e implementar actualizaciones según sea necesario.",
  },
  {
    question: "¿En qué tecnologías se especializan?",
    answer:
      "Nos especializamos en una amplia gama de tecnologías que incluyen, entre otras, React, Node.js, Python, .NET y plataformas en la nube como AWS y Azure. Siempre elegimos la mejor pila tecnológica para las necesidades específicas de cada proyecto.",
  },
];

export function FAQ() {
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
            Preguntas frecuentes
          </h2>
          <p className="mt-2">
            Encuentre respuestas a preguntas comunes sobre nuestros servicios
          </p>
        </motion.div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
