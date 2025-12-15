"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: "p1",
    title: "Campus Activity Tracker",
    description: "Manage campus events, attendance and schedules. Built with Next.js + Firebase.",
    image: "/p1.jpg",
    tags: ["Next.js", "Firebase"]
  },
  {
    id: "p2",
    title: "Personal Finance Web App",
    description: "Budget tracker for students with charts and export. React + Node.js + MongoDB.",
    image: "/p2.jpg",
    tags: ["React", "Node.js"]
  },
  {
    id: "p3",
    title: "AI Study Assistant",
    description: "Q&A chatbot tailored to study material. Python + FastAPI + OpenAI.",
    image: "/p3.jpg",
    tags: ["Python", "OpenAI"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Projects
        </motion.h3>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-gray-100 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
