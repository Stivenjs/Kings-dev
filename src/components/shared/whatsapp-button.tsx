"use client";

import { motion } from "framer-motion";
import { PhoneIcon as WhatsappIcon } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/3244099476" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsappIcon className="h-6 w-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </motion.a>
  );
}
