"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
  <section className="pt-28 pb-20 px-6 md:px-10 relative overflow-visible bg-[#fff6e0]">
      {/* diagonal accent */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 -z-10 overflow-hidden">
        <div className="h-full w-full transform -skew-x-12">
          <div className="h-full bg-gradient-to-tr from-[#fff6e6] to-transparent opacity-90"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-bold mb-4 rounded-sm">
              #STUDENT
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Hi, I’m <span className="text-[#f5c542]">Kero</span> — a uni student who builds
              beautiful web & mobile experiences.
            </h1>

            <p className="text-gray-700 text-lg max-w-2xl mb-6">
              I love designing interfaces and shipping projects that solve real problems.
              Currently learning advanced frontend patterns, backend fundamentals, and applied AI.
            </p>

            {/* Buttons + Icons */}
            <div className="flex gap-4 items-center">
              {/* Contact button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-5 py-3 rounded-md bg-[#f5c542] font-semibold text-gray-900 
                          hover:bg-[#eabb38] transition-colors shadow-sm"
              >
                Contact
              </motion.a>

              {/* Projects button (subtle scale) */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-5 py-3 rounded-md border border-gray-200 text-gray-800 
                          bg-white hover:bg-gray-50 transition-colors shadow-sm"
              >
                Projects
              </motion.a>


              {/* Social icons */}
              <div className="ml-4 flex gap-2">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 shadow-sm transition"
                >
                  <Github size={16} />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 shadow-sm transition"
                >
                  <Linkedin size={16} />
                </motion.a>

                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 shadow-sm transition"
                >
                  <Mail size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating profile card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotate: -1.5 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              type: "spring",
              stiffness: 120,
            }}
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-white shadow-2xl border border-gray-100 flex items-center justify-center cursor-pointer"
            style={{ transformOrigin: "center" }}
          >
            {/* soft gold glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-[28px] opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, #f5c542, transparent 40%)",
              }}
              whileHover={{ opacity: 0.45, scale: 1.1 }}
            />

            {/* profile photo */}
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/images/profile_picture.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* small label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md border"
            >
              Computer Science · Class of 2026
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
