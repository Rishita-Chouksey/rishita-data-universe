import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
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
  const [isEntered, setIsEntered] = useState(false);
  const [enterProgress, setEnterProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!isEntered) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const p = total > 0 ? current / total : 0;
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, [isEntered]);

  // Cinematic "ENTER THE LAB" sequence
  const handleEnterLab = () => {
    const timelineObj = { progress: 0 };
    
    gsap.to(timelineObj, {
      progress: 1,
      duration: 2.2,
      ease: 'power3.inOut',
      onUpdate: () => {
        setEnterProgress(timelineObj.progress);
      },
      onComplete: () => {
        setIsEntered(true);
      }
    });

    // Fade in primary content smoothly during camera transition
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.8, ease: 'power2.out' }
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060709] text-gray-200 selection:bg-violet-600/40 selection:text-cyan-200">
      <CustomCursor />

      {/* 3D WebGL Canvas Universe */}
      <MainCanvas
        isEntered={isEntered || enterProgress > 0}
        enterProgress={enterProgress}
        scrollProgress={scrollProgress}
      />

      {/* Opening Initialization Sequence */}
      {!isEntered && enterProgress === 0 && (
        <LoadingScreen onEnterLab={handleEnterLab} />
      )}

      {/* Main Portfolio System */}
      <div
        ref={contentRef}
        className={`${!isEntered && enterProgress === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
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
    </div>
  );
}