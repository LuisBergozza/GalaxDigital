import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { TargetAudience } from './components/TargetAudience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    return window.localStorage.getItem('galax-theme') === 'light';
  });
  const isPortfolioPage = window.location.pathname === '/portfolio' || window.location.pathname === '/portfolio/';

  useEffect(() => {
    window.localStorage.setItem('galax-theme', isLightMode ? 'light' : 'dark');
    document.documentElement.style.colorScheme = isLightMode ? 'light' : 'dark';
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', isLightMode ? '#f7f7fb' : '#050505');
  }, [isLightMode]);

  return (
    <div className={`min-h-screen selection:bg-primary selection:text-white ${isLightMode ? 'theme-light bg-[#f7f7fb] text-[#17131f]' : 'bg-[#050505] text-white'}`}>
      <Navbar isLightMode={isLightMode} onToggleTheme={() => setIsLightMode((current) => !current)} />
      {isPortfolioPage ? (
        <main className="pt-24">
          <Portfolio isLightMode={isLightMode} />
        </main>
      ) : (
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Features />
          {/* <Testimonials /> */}
          <TargetAudience />
          <Contact />
        </main>
      )}
      <Footer isLightMode={isLightMode} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;