import React, { useState, useEffect, useRef } from 'react';

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
  const mainRef = useRef(null);

  // Smooth scroll to target section
  const scrollToSection = (sectionNumber) => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const sectionElements = mainEl.querySelectorAll('section');
    const targetElement = sectionElements[sectionNumber - 1];

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // IntersectionObserver to automatically detect active section (01 to 10)
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;
    const sectionElements = mainEl.querySelectorAll('section');

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
        root: mainEl,
        threshold: 0.4,
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
      // Don't intercept when user is typing inside input elements
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const isDown = ['ArrowDown', 'PageDown', 'Space'].includes(e.key) || ['ArrowDown', 'PageDown', 'Space'].includes(e.code);
      const isUp = ['ArrowUp', 'PageUp'].includes(e.key) || ['ArrowUp', 'PageUp'].includes(e.code);

      if (isDown) {
        if (e.key === ' ' || e.code === 'Space') {
          if (['BUTTON', 'A'].includes(document.activeElement?.tagName)) return;
        }
        e.preventDefault();
        setActiveSection((prev) => {
          const next = Math.min(prev + 1, totalSections);
          scrollToSection(next);
          return next;
        });
      } else if (isUp) {
        e.preventDefault();
        setActiveSection((prev) => {
          const next = Math.max(prev - 1, 1);
          scrollToSection(next);
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []);

  return (
    <div className="relative bg-[#08090B] text-slate-100 h-screen w-screen overflow-hidden font-sans">
      {/* Navigation Header & Progress Dots */}
      <Navigation
        activeSection={activeSection}
        totalSections={totalSections}
        scrollToSection={scrollToSection}
      />

      {/* Main Presentation Slides Container */}
      <main
        ref={mainRef}
        className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth flex flex-col"
      >
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
