"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="h-16 flex items-center justify-between">
          <Link href="/" className="font-black text-lg tracking-tight">
            Kero<span className="text-[#f5c542]">.</span>
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#tech" className="hover:text-gray-900">Tech</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>

          <button
            aria-label="menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <Menu size={18} />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
