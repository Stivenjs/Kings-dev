import React from "react";
import { Database, Globe, Cpu, Code2, Smartphone, Cloud } from "lucide-react";

const technologies = [
  { icon: Code2, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Cloud, label: "Cloud" },
  { icon: Database, label: "Data" },
  { icon: Cpu, label: "AI" },
  { icon: Globe, label: "IoT" },
];

const TechStack = () => {
  return (
    <div className="mt-12">
      <p className="text-sm text-gray-500 mb-4">TECNOLOGÍAS</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {technologies.map(({ icon: Icon, label }, index) => (
          <div
            key={label}
            className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
            style={{
              animation: "fadeIn 0.5s ease-out forwards",
              animationDelay: `${index * 100}ms`,
            }}
          >
            <Icon className="w-6 h-6 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors" />
            <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
