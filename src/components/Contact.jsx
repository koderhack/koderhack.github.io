import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-accent">
        Kontakt / Info
      </h2>
      <p className="text-xl text-center mb-8 text-gray-200">
        <span className="text-cyber-neon font-semibold">Stworzę stronę w błyskawicznym tempie ⚡</span>
      </p>
      <motion.a
        href="mailto:kacper.sikora.dev@gmail.com"
        className="px-8 py-3 rounded-full bg-cyber-accent text-cyber-bg font-bold text-lg shadow-lg hover:bg-cyber-neon hover:text-white transition-all duration-200"
        whileHover={{ scale: 1.07, boxShadow: "0 0 32px #ff00ea" }}
      >
        Napisz do mnie
      </motion.a>
      <div className="mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kacper Sikora – Full Stack Developer & AI Engineer
      </div>
    </section>
  );
}
