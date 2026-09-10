import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLightMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Soluções', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Para quem somos', href: '#resultados' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-4 md:pt-6'}`}>
      <nav
        className={`
          relative w-full max-w-5xl transition-all duration-500 ease-in-out
          ${scrolled || isOpen ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(83,0,255,0.3)]' : 'bg-transparent border border-transparent'}
          rounded-2xl
        `}
      >
        <div className={`px-4 md:px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-2' : 'py-3 md:py-4'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center group z-50">
            <img
              src={isLightMode ? '/logo preta.png' : '/logo-navbar-320.webp'}
              alt="Galax Digital"
              width={160}
              height={56}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={`transition-all duration-500 object-contain block ${scrolled ? 'h-11' : 'h-12 md:h-14'}`}
              style={{ verticalAlign: 'middle' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className={`galax-nav-links flex items-center rounded-xl px-2 mr-4 transition-all duration-500 ${scrolled ? 'py-0.5' : 'py-1'} ${isLightMode ? 'border border-purple-200/70' : 'border border-white/5'}`}
              style={isLightMode ? { backgroundColor: 'rgba(83, 0, 255, 0.04)' } : undefined}
            >
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-lg ${isLightMode ? 'text-[#4b4655] hover:text-primary hover:bg-purple-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                >
                    {link.name}
                </a>
                ))}
            </div>
            <button
              type="button"
              onClick={onToggleTheme}
              className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={isLightMode ? 'Ativar modo escuro' : 'Ativar modo claro'}
              aria-pressed={isLightMode}
              title={isLightMode ? 'Modo escuro' : 'Modo claro'}
            >
              {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contato">
              <Button size="sm" variant="primary" className={`rounded-lg transition-all duration-500 ${scrolled ? 'px-5' : 'px-6'}`}>
                Falar com Especialista
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-6 pt-2 animate-fade-in-down border-t border-white/5 mx-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5 group active:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium text-base">{link.name}</span>
                  <ArrowRight size={16} className="text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="mt-4 block"
              >
                <Button fullWidth className="rounded-xl py-4 text-base shadow-lg shadow-primary/20">
                    Começar Agora
                </Button>
              </a>
              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={isLightMode ? 'Ativar modo escuro' : 'Ativar modo claro'}
                aria-pressed={isLightMode}
              >
                {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
                {isLightMode ? 'Modo escuro' : 'Modo claro'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};