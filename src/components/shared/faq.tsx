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
    question: "What types of businesses do you work with?",
    answer:
      "We work with businesses of all sizes across various industries. Our clients range from startups to large enterprises in sectors such as e-commerce, healthcare, finance, and more.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines can vary depending on the scope and complexity. A small project might take 4-6 weeks, while larger, more complex projects can take several months. We always provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your software continues to perform optimally. Our team is always available to address any issues and implement updates as needed.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in a wide range of technologies including but not limited to React, Node.js, Python, .NET, and cloud platforms like AWS and Azure. We always choose the best technology stack for each project's specific needs.",
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
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-500">
            Find answers to common questions about our services
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
