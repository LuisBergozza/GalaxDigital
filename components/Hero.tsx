import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const stars = [
    [18, 32, 2], [26, 68, 1], [34, 18, 1], [42, 82, 2], [48, 42, 1],
    [57, 24, 2], [62, 74, 1], [71, 14, 1], [76, 88, 2], [84, 34, 1],
    [90, 66, 2], [12, 84, 1], [38, 56, 1], [68, 52, 1], [96, 46, 1],
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
      {/* Código visual responsivo: substitui o painel de imagem do hero. */}
      <div className="hero-visual absolute inset-y-0 right-0 hidden md:block md:w-[62%] overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-glow hero-glow-main absolute" />
        <div className="hero-glow hero-glow-secondary absolute" />
        <div className="hero-orbit hero-orbit-one absolute" />
        <div className="hero-orbit hero-orbit-two absolute" />

        {stars.map(([left, top, size], index) => (
          <span
            key={index}
            className="hero-star absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${index * 0.17}s`,
            }}
          />
        ))}

        <div className="hero-method absolute">
          <div className="hero-method-line" />
          <p className="hero-method-eyebrow">Metodologia Galax</p>
          <div className="hero-method-divider" />
          <h3>Onde todo<br />resultado começa</h3>
          <ul>
            <li><span>01</span> Diagnóstico e direção</li>
            <li><span>02</span> Planejamento e estrutura</li>
            <li><span>03</span> Crescimento na prática</li>
          </ul>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <div className="w-full md:w-1/2 md:max-w-2xl text-center md:text-left">

          <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-primary/20 border border-primary/50 text-white text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base font-semibold mb-4 md:mb-8 animate-fade-in-up shadow-[0_0_20px_rgba(83,0,255,0.3)] backdrop-blur-sm">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="truncate">Agência de Marketing Digital em Concórdia SC</span>
          </div>
          <h1 className="sr-only">Agência de Marketing em Concórdia SC | Galax Digital</h1>

          <h2 className="max-w-xl text-2xl xs:text-3xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-[1.18] md:leading-tight tracking-tight">
            <span className="block md:whitespace-nowrap">Transforme sua Presença Digital</span>
            <span className="block text-gradient md:whitespace-nowrap">em Crescimento Consistente</span>
          </h2>

          <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-gray-300 mb-6 md:mb-10 leading-relaxed">
            Agência de marketing digital no Oeste Catarinense. Ajudamos empresas com gestão de tráfego pago, consultoria de marketing e estruturação digital para crescer, gerar demanda e escalar com segurança.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 md:gap-4">
            <a href="#contato" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">
                Quero Escalar Meu Negócio
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#diferenciais" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">
                Conhecer a Galax
              </Button>
            </a>
          </div>

          {/* Card da metodologia — versão estática no fluxo, visível apenas no mobile */}
          <div className="hero-method hero-method--static md:hidden">
            <div className="hero-method-line" />
            <p className="hero-method-eyebrow">Metodologia Galax</p>
            <div className="hero-method-divider" />
            <h3>Onde todo<br />resultado começa</h3>
            <ul>
              <li><span>01</span> Diagnóstico e direção</li>
              <li><span>02</span> Planejamento e estrutura</li>
              <li><span>03</span> Crescimento na prática</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
