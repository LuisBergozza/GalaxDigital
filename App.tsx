import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { TargetAudience } from './components/TargetAudience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    return window.localStorage.getItem('galax-theme') === 'light';
  });

  useEffect(() => {
    window.localStorage.setItem('galax-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  return (
    <div className={`min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white ${isLightMode ? 'theme-light' : ''}`}>
      <Navbar isLightMode={isLightMode} onToggleTheme={() => setIsLightMode((current) => !current)} />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Services />
        <Features />
        {/* <Testimonials /> */}
        <TargetAudience />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;