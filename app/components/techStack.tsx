"use client";

import { motion } from "framer-motion";

const tech = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "Tailwind CSS" },
  { name: "React Native" },
  { name: "Python" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Tech Stack
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
            >
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-gray-500 mt-1">Comfortable</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
