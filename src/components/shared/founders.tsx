"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Founders() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Founder"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">Meet the Founders</h2>
                <p className="text-gray-500 mt-2">
                  Kings Dev was founded by a team of seasoned entrepreneurs and
                  technology experts who share a passion for using software to
                  transform businesses
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Our Values"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">Our Values</h2>
                <p className="text-gray-500 mt-2">
                  At the heart of Kings Dev is a set of core values that guide
                  our every decision and action. We are committed to innovation,
                  collaboration, transparency
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
