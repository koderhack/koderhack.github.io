import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/ProjectsCarousel";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-cyber-bg min-h-screen transition-colors duration-500">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
