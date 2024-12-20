import React from "react";
import { Code2, Cpu, Globe2 } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Soluciones impulsadas por IA",
  },
  {
    icon: Globe2,
    title: "Cloud Native",
    description: "Arquitecturas en la nube",
  },
];

const FloatingCards = () => {
  return (
    <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              style={{
                animation: `float ${3 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-white/80">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingCards;
