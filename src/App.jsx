import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import MainCanvas from './scenes/MainCanvas';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Origin from './components/Origin';
import DataField from './components/DataField';
import Milestones from './components/Milestones';
import Projects from './components/Projects';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Proof from './components/Proof';
import CurrentFocus from './components/CurrentFocus';
import FinalNext from './components/FinalNext';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060709] text-gray-200 selection:bg-violet-600/40 selection:text-cyan-200">
      <CustomCursor />
      
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* 3D Visual Field Layer */}
      <MainCanvas />

      {/* UI & Story Layer */}
      <Navigation />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Origin />
        <DataField />
        <Milestones />
        <Projects />
        <Experience />
        <OpenSource />
        <Proof />
        <CurrentFocus />
        <FinalNext />
      </main>
    </div>
  );
}