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
      "Kings Dev transformed our business with their innovative solutions. Their team's expertise and dedication are unmatched.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupX",
    content:
      "Working with Kings Dev was a game-changer for our startup. They delivered a high-quality product on time and within budget.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, EnterpriseY",
    content:
      "The team at Kings Dev is incredibly responsive and skilled. They turned our vision into reality, exceeding our expectations.",
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
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="mt-2 text-gray-500">
            Don't just take our word for it - hear from some of our satisfied
            clients
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
