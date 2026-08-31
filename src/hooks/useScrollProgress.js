import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("01 ORIGIN");

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = total > 0 ? current / total : 0;
      setProgress(pct);

      const sections = [
        { id: "hero", label: "00 UNIVERSE" },
        { id: "origin", label: "01 ORIGIN" },
        { id: "data", label: "02 DATA FIELD" },
        { id: "milestones", label: "03 MILESTONES" },
        { id: "projects", label: "04 PROJECTS" },
        { id: "experience", label: "05 EXPERIENCE" },
        { id: "community", label: "06 NETWORK" },
        { id: "proof", label: "07 PROOF" },
        { id: "next", label: "08 NEXT" }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, activeSection };
}