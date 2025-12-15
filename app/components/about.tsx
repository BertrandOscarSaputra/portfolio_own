"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold mb-4"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            I’m a Computer Science student focused on frontend engineering, product design,
            and small backend systems. I enjoy turning ideas into polished apps — from
            prototypes to deployed products. In my free time I experiment with motion graphics
            and small AI projects.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700"
          >
            <li><strong>Location:</strong> Jakarta, Indonesia</li>
            <li><strong>Education:</strong> B.Sc. Computer Science (ongoing)</li>
            <li><strong>Interests:</strong> Frontend, Motion, AI</li>
            <li><strong>Availability:</strong> Open to internships & freelance</li>
          </motion.ul>
        </div>

        {/* decorative column */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="h-56 rounded-2xl bg-gradient-to-tr from-[#fff6e6] to-transparent border border-gray-50 shadow-md transform rotate-1"></div>
        </div>
      </div>
    </section>
  );
}
