import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaRobot, FaUnity } from "react-icons/fa";
import { SiTailwindcss, SiCsharp, SiOpenai, SiVite, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const stack = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Vite", icon: <SiVite className="text-blue-400" /> },
  { name: "C#", icon: <SiCsharp className="text-blue-400" /> },
  { name: "Unity", icon: <FaUnity className="text-gray-300" /> },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-400" /> },
  { name: "GitHub Copilot", icon: <FaRobot className="text-cyber-accent" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> }
];

export default function Stack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyber-accent">
        Mój Stack
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {stack.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-2 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_#00ffe7]" title={tech.name}>
              {tech.icon}
            </div>
            <span className="text-xs text-gray-400 group-hover:text-cyber-accent transition">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
