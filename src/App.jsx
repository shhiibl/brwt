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
import Section11MarketingStrategy from './components/sections/Section11MarketingStrategy';
import Section12STP from './components/sections/Section12STP';
import Section13DigitalPassport from './components/sections/Section13DigitalPassport';
import Section14Pricing from './components/sections/Section14Pricing';
import Section15HRTeam from './components/sections/Section15HRTeam';
import Section16Prototype from './components/sections/Section16Prototype';
import Section17Revenue from './components/sections/Section17Revenue';
import Section18BookingWorkflow from './components/sections/Section18BookingWorkflow';
import Section18bQCChecklists from './components/sections/Section18bQCChecklists';
import Section19PromotionChannels from './components/sections/Section19PromotionChannels';
import Section19bKPIs from './components/sections/Section19bKPIs';
import Section20Roadmap from './components/sections/Section20Roadmap';
import Section20bPilotBudget from './components/sections/Section20bPilotBudget';
import Section21CaseStudies from './components/sections/Section21CaseStudies';
import Section22Conclusion from './components/sections/Section22Conclusion';

export default function App() {
  const [activeSection, setActiveSection] = useState(1);
  const totalSections = 26;
  const mainRef = useRef(null);

  const scrollToSection = (sectionNumber) => {
    const mainEl = mainRef.current;
    if (!mainEl) return;
    const sectionElements = mainEl.querySelectorAll('section');
    const targetElement = sectionElements[sectionNumber - 1];
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;
    const sectionElements = mainEl.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sectionElements).indexOf(entry.target);
            if (index !== -1) setActiveSection(index + 1);
          }
        });
      },
      { root: mainEl, threshold: 0.4 }
    );
    sectionElements.forEach((sec) => observer.observe(sec));
    return () => sectionElements.forEach((sec) => observer.unobserve(sec));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      const isDown = ['ArrowDown', 'PageDown', 'Space'].includes(e.key);
      const isUp = ['ArrowUp', 'PageUp'].includes(e.key);
      if (isDown) {
        if (e.key === ' ' && ['BUTTON', 'A'].includes(document.activeElement?.tagName)) return;
        e.preventDefault();
        setActiveSection((prev) => { const next = Math.min(prev + 1, totalSections); scrollToSection(next); return next; });
      } else if (isUp) {
        e.preventDefault();
        setActiveSection((prev) => { const next = Math.max(prev - 1, 1); scrollToSection(next); return next; });
      }
    };
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []);

  return (
    <div className="relative bg-[#08090B] text-slate-100 h-screen w-screen overflow-hidden font-sans">
      <Navigation activeSection={activeSection} totalSections={totalSections} scrollToSection={scrollToSection} />
      <main ref={mainRef} className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth flex flex-col">
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
        <Section11MarketingStrategy />
        <Section12STP />
        <Section13DigitalPassport />
        <Section14Pricing />
        <Section15HRTeam />
        <Section16Prototype />
        <Section17Revenue />
        <Section18BookingWorkflow />
        <Section18bQCChecklists />
        <Section19PromotionChannels />
        <Section19bKPIs />
        <Section20Roadmap />
        <Section20bPilotBudget />
        <Section21CaseStudies />
        <Section22Conclusion />
      </main>
    </div>
  );
}
