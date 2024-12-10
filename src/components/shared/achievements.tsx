"use client";

import { motion } from "framer-motion";
import { Award, Users, Code, ThumbsUp } from "lucide-react";

const achievements = [
  { icon: Award, label: "Certified Microsoft Partner" },
  { icon: Users, label: "500+ Satisfied Clients" },
  { icon: Code, label: "1000+ Projects Completed" },
  { icon: ThumbsUp, label: "99% Client Satisfaction Rate" },
];

export function Achievements() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Our Achievements</h2>
          <p className="mt-2 text-primary-foreground/80">
            Recognitions that showcase our expertise and client satisfaction
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <achievement.icon className="h-12 w-12 mb-4" />
              <p className="font-semibold">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
