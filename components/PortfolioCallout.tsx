import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

interface PortfolioCalloutProps {
  isLightMode: boolean;
}

export const PortfolioCallout: React.FC<PortfolioCalloutProps> = ({ isLightMode }) => {
  return (
    <section className={`relative overflow-hidden py-12 md:py-16 ${isLightMode ? 'bg-[#f7f7fb]' : 'bg-[#0a0a0a]'}`}>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(83,0,255,0.16),transparent_42%)]" aria-hidden="true" />
      <div className="container relative mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className={`mx-auto flex max-w-5xl flex-col items-center gap-7 border-y py-8 md:flex-row md:justify-between md:py-9 ${isLightMode ? 'border-[#ded8e8]' : 'border-white/10'}`}>
          <div className="flex items-center gap-5">
            <div className="hidden h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black sm:block">
              <img
                src="/portfolio/galax-current.webp"
                alt="Prévia de um projeto da Galax Digital"
                width={192}
                height={128}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Projetos em destaque</p>
              <h2 className={`text-2xl font-bold md:text-3xl ${isLightMode ? 'text-[#17131f]' : 'text-white'}`}>Veja o que já colocamos no mundo.</h2>
              <p className={`mt-2 max-w-xl text-sm leading-relaxed md:text-base ${isLightMode ? 'text-[#625a6d]' : 'text-gray-400'}`}>Conheça marcas e experiências digitais criadas pela Galax.</p>
            </div>
          </div>
          <a href="/portfolio" className="shrink-0">
            <Button size="md" className="group gap-2">
              Ver portfólio
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};