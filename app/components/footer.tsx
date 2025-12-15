"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-20 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 = lg:px-8 py-10 text-center">
        {/* Contact Section */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="mailto:youremail@example.com"
            className="p-2 rounded-md hover:bg-gray-100 transition transform hover:scale-105"
          >
            <Mail size={18} className="text-gray-600" />
          </a>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-gray-100 transition transform hover:scale-105"
          >
            <Github size={18} className="text-gray-600" />
          </a>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-gray-100 transition transform hover:scale-105"
          >
            <Linkedin size={18} className="text-gray-600" />
          </a>
        </div>

        {/* Email and Copyright */}
        <div className="text-sm text-gray-500 mb-3">
          Contact: <span className="font-medium">youremail@example.com</span>
        </div>

        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Kero Chen — Built with Next.js, Tailwind, Framer Motion
        </div>
      </div>
    </motion.footer>
  );
}
