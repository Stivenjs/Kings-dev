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
  { name: "Kings Dev", description: "Software Development", icon: Crown },
  {
    name: "Shell",
    description:
      "As a leading software development partner, Kings Dev has collaborated with Shell to",
    icon: Shell,
  },
  {
    name: "Google",
    description:
      "Our partnership with Google has enabled us to leverage the latest cloud technologies and",
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
          <h2 className="text-3xl font-bold">Deploy</h2>
          <p className="mt-2 text-gray-500">
            Once your solution is ready, we'll work with you to deploy it,
            providing comprehensive training and ongoing support to ensure a
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
