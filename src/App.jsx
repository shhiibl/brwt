import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

import Navigation from './components/Navigation';
import Section01Hero from './components/sections/Section01Hero';
import Section02Problem from './components/sections/Section02Problem';
import Section03Opportunity from './components/sections/Section03Opportunity';
import Section04MeetBorrowit from './components/sections/Section04MeetBorrowit';
import Section05HowItWorks from './components/sections/Section05HowItWorks';
import Section06USP from './components/sections/Section06USP';
import Section07BusinessModel from './components/sections/Section07BusinessModel';
import Section08FounderEconomics from './components/sections/Section08FounderEconomics';
import Section09AdvantageScale from './components/sections/Section09AdvantageScale';
import Section10FinalVision from './components/sections/Section10FinalVision';

export default function App() {
  const [activeSection, setActiveSection] = useState(1);
  const totalSections = 10;
  const lenisRef = useRef(null);

  // Initialize Lenis Super-Smooth Inertia Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // IntersectionObserver to automatically detect active section (01 to 10)
  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sectionElements).indexOf(entry.target);
            if (index !== -1) {
              setActiveSection(index + 1);
            }
          }
        });
      },
      {
        threshold: 0.4, // Section is active when 40% visible
      }
    );

    sectionElements.forEach((sec) => observer.observe(sec));

    return () => {
      sectionElements.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Keyboard arrow & page key navigation for slide-by-slide control
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.code)) {
        if (e.code === 'Space' && (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON')) return;
        e.preventDefault();
        setActiveSection((prev) => {
          const next = Math.min(prev + 1, totalSections);
          scrollToSection(next);
          return next;
        });
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        setActiveSection((prev) => {
          const next = Math.max(prev - 1, 1);
          scrollToSection(next);
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll to target section
  const scrollToSection = (sectionNumber) => {
    const sectionElements = document.querySelectorAll('section');
    const targetElement = sectionElements[sectionNumber - 1];

    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, { offset: 0, duration: 1.2 });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#08090B] text-slate-100 h-screen w-screen overflow-hidden font-sans">
      {/* Navigation Header & Progress Dots */}
      <Navigation
        activeSection={activeSection}
        totalSections={totalSections}
        scrollToSection={scrollToSection}
      />

      {/* Main Presentation Slides Container */}
      <main className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth flex flex-col">
        <Section01Hero onNext={() => scrollToSection(2)} />
        <Section02Problem />
        <Section03Opportunity />
        <Section04MeetBorrowit />
        <Section05HowItWorks />
        <Section06USP />
        <Section07BusinessModel />
        <Section08FounderEconomics />
        <Section09AdvantageScale />
        <Section10FinalVision />
      </main>
    </div>
  );
}
