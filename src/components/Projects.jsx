import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaReact, FaHtml5, FaUnity, FaCss3Alt, FaCube } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiNextdotjs, SiTailwindcss, SiVite } from "react-icons/si";

// Mapowanie stacków na ikony
const techIcons = {
  "React": <FaReact className="text-cyan-400" title="React" />,
  "TypeScript": <SiTypescript className="text-blue-400" title="TypeScript" />,
  "AI": <span className="font-bold text-pink-400" title="AI">AI</span>,
  "Firebase": <SiFirebase className="text-yellow-400" title="Firebase" />,
  "Next.js": <SiNextdotjs className="text-white" title="Next.js" />,
  "Tailwind": <SiTailwindcss className="text-cyan-300" title="Tailwind CSS" />,
  "Framer Motion": <span className="font-bold text-pink-300" title="Framer Motion">FM</span>,
  "Three.js": <FaCube className="text-blue-400" title="Three.js" />, // niebieski
  "Vite": <SiVite className="text-blue-400" title="Vite" />, // niebieski
  "Unity": <FaUnity className="text-gray-200" title="Unity" />,
  "C#": <span className="font-bold text-blue-300" title="C#">C#</span>,
  "HTML": <FaHtml5 className="text-orange-400" title="HTML5" />,
  "CSS": <FaCss3Alt className="text-blue-300" title="CSS3" />,
  "itch.io": <span className="font-bold text-pink-400" title="itch.io">itch.io</span>
};

const projects = [
  {
    name: "DiabCalc",
    desc: "Zaawansowany kalkulator dla diabetyków typu 1. Rozbudowane UI, AI, synchronizacja danych i nowoczesny design. Wyróżniony projekt.",
    url: "https://diabcalc.com/",

    featured: true,
    stack: ["React", "TypeScript", "AI", "Firebase"],
    img: "/diabcalc.png"
  },
  {
    name: "Aperto",
    desc: "Nowoczesna strona dla Aperto Strefa. Animacje, szybki frontend, responsywność. Współpraca z zespołem.",
    url: "https://apertostrefa.pl/",
    // github: "https://github.com/koderhack/aperto",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    img: "/aperto.png"
  },
  {
    name: "GeoBlast",
    desc: "Gra edukacyjna – szybkie quizy geograficzne z efektami 3D. Dostępna na itch.io.",
    url: "https://koderhack.itch.io/geoblast",
    // github: "https://github.com/koderhack/geoblast",
    stack: ["React", "Three.js", "Vite"]
  },
  {
    name: "Hamster Run",
    desc: "Gra zręcznościowa – steruj chomikiem, unikaj przeszkód. Mobilna i webowa.",
    url: "https://koderhack.itch.io/hamster-run",
    // github: "https://github.com/koderhack/hamster-run",
    stack: ["Unity", "C#"]
  },
  {
    name: "Hamster Survival",
    desc: "Gra survivalowa – przetrwaj jak najdłużej. Dynamiczna rozgrywka, leaderboard.",
    url: "https://koderhack.itch.io/hamster-survival",
    // github: "https://github.com/koderhack/hamster-survival",
    stack: ["Unity", "C#"]
  }
];

// Dynamiczny komponent z iframe itch.io
const ItchIoGames = React.lazy(() => Promise.resolve({
  default: () => (
    <div className="bg-cyber-bg/80 rounded-xl p-4 mt-2 border border-cyber-accent/20 shadow-inner">
      <h5 className="text-cyber-accent font-semibold mb-2">Więcej gier na itch.io</h5>
      <iframe
        src="https://itch.io/profile/koderhack"
        title="koderhack itch.io"
        className="w-full h-40 md:h-52 rounded-lg border-0"
        loading="lazy"
        style={{ background: "rgba(0,0,0,0.2)" }}
      />
      <a
        href="https://koderhack.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-2 text-cyber-accent hover:text-cyber-neon transition"
      >
        Zobacz wszystkie gry <FaExternalLinkAlt />
      </a>
    </div>
  )
}));

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24"
      style={{
        background: "linear-gradient(135deg, #10131a 60%, #181c24 100%)"
      }}
    >
      {/* Neon/gradient tło */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="w-2/3 h-2/3 left-1/4 top-1/4 blur-3xl opacity-25 bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-700 rounded-full absolute" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(79,195,247,0.08)_0%,transparent_70%)]" />
      </div>
      <motion.h2
        className="text-4xl sm:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 drop-shadow-[0_0_24px_#4fc3f7] text-center font-poppins"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Moje Projekty
      </motion.h2>
      <motion.p
        className="text-lg sm:text-2xl text-cyan-300 mb-12 text-center font-inter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
      >
        Wybrane aplikacje, gry i realizacje frontendowo-backendowe
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            className={`
              group flex flex-col h-full rounded-2xl shadow-xl border border-cyan-700/30 bg-[#10131a]/80
              backdrop-blur-md transition-all duration-300 ease-in-out
              ${p.featured
                ? "border-2 border-cyan-400/80 shadow-[0_0_32px_#4fc3f7] scale-105"
                : "hover:border-cyan-400/60 hover:shadow-[0_0_24px_#4fc3f7]"}
              hover:scale-105 hover:-rotate-1
            `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.07, rotate: p.featured ? 0 : 1.5 }}
            viewport={{ once: true }}
            data-aos="fade-up"
          >
            {p.img && (
              <img
                src={p.img}
                alt={p.name}
                className={`rounded-xl mb-4 object-cover shadow-lg mx-auto transition-all duration-300 ${p.featured ? "w-44 h-44" : "w-32 h-32"}`}
                style={{ background: "#181c24" }}
              />
            )}
            <div className="flex-1 flex flex-col px-5 pb-6">
              <h3 className={`font-bold mb-2 text-center ${p.featured ? "text-2xl text-cyan-300" : "text-lg text-cyan-200"}`}>
                {p.name}
              </h3>
              <p className={`text-gray-300 text-center mb-2 ${p.featured ? "text-base" : "text-sm"}`}>{p.desc}</p>
              {p.featured && (
                <p className="text-cyan-400 text-xs text-center mb-2">
                  Projekt zrealizowany z naciskiem na UX, AI oraz bezpieczeństwo danych. Wyróżniony w konkursach branżowych.
                </p>
              )}
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {p.stack.map((tech) => (
                  <span key={tech} className="flex items-center gap-1 bg-cyan-700/10 px-2 py-1 rounded text-xs font-medium text-cyan-200">
                    {techIcons[tech] || tech}
                    <span className="hidden md:inline">{tech}</span>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 justify-center mt-auto">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cyan-400/60 px-4 py-2 text-cyan-200 font-semibold bg-cyan-700/10 hover:bg-cyan-400/20 hover:text-white transition ring-0 hover:ring-2 hover:ring-cyan-400/60"
                >
                  Live Demo <FaExternalLinkAlt className="inline ml-1" />
                </a>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cyan-700/30 px-4 py-2 text-cyan-400 font-semibold bg-cyber-bg/40 hover:bg-cyan-700/20 hover:text-white transition ring-0 hover:ring-2 hover:ring-cyan-400/40"
                >
                  Więcej
                </a>
              </div>
            </div>
            {p.featured && (
              <span className="absolute top-4 right-4 bg-cyan-400/20 text-cyan-200 px-2 py-1 rounded text-xs font-bold shadow">
                Wyróżniony
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <style>{`
        .font-poppins { font-family: 'Poppins', 'Inter', sans-serif; }
        .font-inter { font-family: 'Inter', 'Poppins', sans-serif; }
      `}</style>
    </section>
  );
}
