"use client";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import TechStack from "./components/techStack";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white text-gray-900 min-h-screen"
    >
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>

      <Footer />
    </motion.div>
  );
}
