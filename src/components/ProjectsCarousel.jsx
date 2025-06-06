import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaReact, FaHtml5, FaUnity, FaCss3Alt, FaCube, FaItchIo } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiNextdotjs, SiTailwindcss, SiVite } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import diabcalcImg from "../assets/diabcalc.png";
import apertoImg from "../assets/aperto.svg";
import watahaImg from "../assets/wataha.jpg";
import geoblastImg from "../assets/geoblast.png";
import hamsterImg from "../assets/hamster.png";
import hamsterSImg from "../assets/hamsters.png";
import itchImg from "../assets/itch.png";
// Ikony stacków
const techIcons = {
  "React": <FaReact className="text-cyan-400" title="React" />,
  "TypeScript": <SiTypescript className="text-blue-400" title="TypeScript" />,
  "AI": <span className="font-bold text-pink-400" title="AI">AI</span>,
  "Firebase": <SiFirebase className="text-yellow-400" title="Firebase" />,
  "Next.js": <SiNextdotjs className="text-white" title="Next.js" />,
  "Tailwind": <SiTailwindcss className="text-cyan-300" title="Tailwind CSS" />,
  "Framer Motion": <span className="font-bold text-pink-300" title="Framer Motion">FM</span>,
  "Three.js": <FaCube className="text-blue-400" title="Three.js" />,
  "Vite": <SiVite className="text-blue-400" title="Vite" />,
  "Unity": <FaUnity className="text-gray-200" title="Unity" />,
  "C#": <span className="font-bold text-blue-300" title="C#">C#</span>,
  "HTML": <FaHtml5 className="text-orange-400" title="HTML5" />,
  "CSS": <FaCss3Alt className="text-blue-300" title="CSS3" />,
  "itch.io": <span className="font-bold text-pink-400" title="itch.io">itch.io</span>,
  "node.js": <span className="font-bold text-green-400" title="Node.js">Node.js</span>
};

const projects = [
  {
    name: "DiabCalc",
    desc: "Zaawansowany kalkulator dla diabetyków typu 1. Rozbudowane UI, AI, synchronizacja danych i nowoczesny design. Wyróżniony projekt.",
    url: "https://diabcalc.com/",
 
    img: diabcalcImg,
    stack: ["React", "TypeScript", "AI", "node.js", "Firebase"],
    extra: "Projekt zrealizowany z naciskiem na UX, AI oraz bezpieczeństwo danych. Wyróżniony w konkursach branżowych."
  },
  {
    name: "Aperto",
    desc: "Nowoczesna strona dla Aperto Strefa. Animacje, szybki frontend, responsywność.",
    url: "https://apertostrefa.pl/",
img:apertoImg,
    stack: ["React", "Tailwind"]
  },
  {
    name: "Wilcza Wataha",
    desc: "Wilcza Wataha – wydarzenie sportowo-integracyjne, w którym skanujesz kody QR i bierzesz udział w konkurencjach, zdobywając punkty dla swojej drużyny.",
    url: "https://wataha.fun/",
    img: watahaImg,
    stack: ["React", "Tailwind"]
  },
  {
    name: "GeoBlast",
    desc: "Geo-Blast: Space Shooter – dynamiczna gra kosmiczna: ulepszaj statek, pokonuj wrogów, zbieraj monety i podbijaj galaktyki! 🚀🌌",
    url: "https://play.google.com/store/apps/details?id=com.KoderTeam.GeoBlast",
    stack: ["React", "Three.js", "Vite"],
    img:geoblastImg,
  },
  {
    name: "Hamster Run",
    desc: "Gra zręcznościowa – steruj chomikiem, unikaj przeszkód.",
    url: "https://play.google.com/store/apps/details?id=com.koderteam.hamsterrun&hl=pl",
    stack: ["Unity", "C#"],
    img: hamsterImg,
  },
  {
    name: "Hamster Survival",
    desc: "Gra survivalowa – przetrwaj jak najdłużej. Dynamiczna rozgrywka.",
    url: "https://koder123456.itch.io/hamstersurvival",
img: hamsterSImg,
    stack: ["Unity", "C#"]
  },
  {
    name: "Więcej na itch.io",
    desc: "Zobacz moje inne gry i projekty na itch.io.",
    url: "https://koderhack.itch.io/",
    stack: ["itch.io"],
    img: itchImg,
  }
];

function ProjectCard({ project }) {
  return (
    <motion.div
      className={`
        relative group flex flex-col items-center justify-between h-full min-h-[420px] max-h-[420px] px-6 py-8 rounded-2xl shadow-xl bg-cyber-bg/80 border border-cyber-accent/20
        hover:border-cyber-neon/60 transition-transform duration-300
      `}
      whileHover={{
        rotateY: 12,
        scale: 1.04,
        boxShadow: "0 0 32px #00ffe7, 0 0 8px #00ffe7"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(135deg,rgba(24,28,36,0.95) 60%,rgba(0,255,231,0.08) 100%)",
        backdropFilter: "blur(8px)"
      }}
    >
      {project.img && (
        <img
          src={project.img}
          alt={project.name}
          className="rounded-xl mb-4 object-cover shadow-lg transition-all duration-300 w-32 h-32"
          style={{ background: "#181c24" }}
        />
      )}
      <h3 className="font-bold mb-2 text-center text-lg text-cyber-accent">
        {project.name}
      </h3>
      <p className="text-gray-300 text-center mb-2 text-sm line-clamp-3">{project.desc}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-3">
        {project.stack.map((tech) => (
          <span key={tech} className="flex items-center gap-1 bg-cyber-accent/10 px-2 py-1 rounded text-xs font-medium">
            {techIcons[tech] || tech}
            <span className="hidden md:inline">{tech}</span>
          </span>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-auto">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
      
            aria-label={`Zobacz projekt ${project.name}`}
        >
          <span className="relative z-10 flex items-center gap-2">
            Więcej <FaExternalLinkAlt />
          </span>
          <span
            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 blur-[2px] z-0"
            aria-hidden
          />
          <span
            className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none group-hover/btn:ring-2 group-hover/btn:ring-cyan-400/60 transition"
            aria-hidden
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsCarousel() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4200,
    arrows: true,
    dots: true,
    infinite: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="projects-carousel" className="max-w-6xl mx-auto px-4 py-24">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-8 text-cyber-neon drop-shadow-cyber text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
      Moje projekty
      <span className="text-cyber-accent"> i gry</span>
      </motion.h2>
      <Slider {...settings} className="projects-slick-slider">
        {projects.map((project, idx) => (
          <div key={project.name} className="px-2 py-6 h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
      <style>{`
        .projects-slick-slider .slick-slide > div {
          display: flex;
          height: 100%;
        }
        .projects-slick-slider .slick-center .group {
          transform: scale(1.08) rotateY(0deg) !important;
          z-index: 2;
        }
        .projects-slick-slider .slick-slide:not(.slick-center) .group {
          filter: blur(0.5px) brightness(0.93);
          opacity: 0.85;
        }
        .projects-slick-slider .slick-arrow {
          background: rgba(0,255,231,0.12);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          z-index: 10;
        }
        .projects-slick-slider .slick-arrow:before {
          color: #00ffe7;
          font-size: 32px;
        }
        .projects-slick-slider .slick-dots li button:before {
          color: #00ffe7;
          opacity: 0.7;
        }
        .projects-slick-slider .slick-dots li.slick-active button:before {
          color: #00ffe7;
          opacity: 1;
        }
        .btn-cyber {
          @apply inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-neon/20 text-cyber-neon font-semibold shadow hover:bg-cyber-neon/40 transition;
        }
        .btn-cyber-tertiary {
          @apply inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-bg/40 text-cyber-accent font-semibold border border-cyber-accent/30 hover:bg-cyber-accent/10 transition;
        }
        .drop-shadow-cyber {
          filter: drop-shadow(0 0 8px #00ffe7) drop-shadow(0 0 2px #00ffe7);
        }
      `}</style>
    </section>
  );
}
