"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Revolutionizing E-commerce for RetailGiant",
    description:
      "How we helped RetailGiant increase their online sales by 200% with a custom e-commerce solution.",
    image: "/placeholder.svg",
  },
  {
    title: "Streamlining Operations for LogisticsPro",
    description:
      "Our tailored software reduced LogisticsPro's operational costs by 35% and improved efficiency.",
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
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <p className="mt-2 text-gray-500">
            See how we've helped businesses like yours succeed
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
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
