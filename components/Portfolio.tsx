import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface PortfolioProject {
  name: string;
  category: string;
  description: string;
  visual: string;
  color: string;
  image?: string;
  url?: string;
}

const projects: PortfolioProject[] = [
  {
    name: 'Real Center',
    category: 'Site institucional',
    description: 'Presença digital para varejo, campanhas comerciais e comunicação de uma empresa regional.',
    visual: 'REAL CENTER',
    color: '#2558a8',
    image: '/portfolio/real-center.webp',
    url: 'https://www.realcenterconcordia.com.br',
  },
  {
    name: 'Primus Planejamento Financeiro',
    category: 'Site institucional',
    description: 'Projeto de posicionamento e comunicação para planejamento financeiro e investimentos.',
    visual: 'PRIMUS',
    color: '#176d68',
    image: '/portfolio/primus.webp',
    url: 'https://primusplanejamento.com.br',
  },
  {
    name: 'Marvet',
    category: 'Marca e presença digital',
    description: 'Identidade e experiência digital para apresentar uma marca com clareza e personalidade.',
    visual: 'MARVET',
    color: '#d15c3f',
    image: '/portfolio/marvet.webp',
    url: 'https://www.marvet.com.br',
  },
  {
    name: 'Gestor Gains',
    category: 'Produto digital',
    description: 'Interface para gestão financeira, clientes, projetos e rotinas de pequenos negócios.',
    visual: 'GAINS',
    color: '#3fbd66',
  },
  {
    name: 'Galax.Digital',
    category: 'Marca e presença digital',
    description: 'Base da agência e laboratório de soluções digitais para marcas, campanhas e desenvolvimento web.',
    visual: 'GALAX',
    color: '#7756e8',
    image: '/portfolio/galax.webp',
    url: 'https://www.galaxdigital.com.br',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative scroll-mt-24 bg-[#080808] py-20 md:py-28">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Trabalhos selecionados / 2023 - atual</p>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Portfólio<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-gray-400 md:text-right">
            Sites, marcas e produtos digitais pensados para transformar uma ideia em uma presença online clara, funcional e com personalidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_70px_-30px_rgba(83,0,255,0.8)]">
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden" style={{ backgroundColor: project.color }}>
                {project.image ? (
                  <img
                    src={encodeURI(project.image)}
                    alt={`Prévia do site ${project.name}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <strong className="relative px-6 text-center text-3xl font-black tracking-[0.12em] text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110 md:text-5xl">{project.visual}</strong>
                )}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />
                <div className="absolute left-5 right-5 top-5 flex items-center gap-2 border-b border-white/30 pb-3" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">preview / {String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-right">{project.category}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mb-6 max-w-lg leading-relaxed text-gray-400">{project.description}</p>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary">
                    Abrir site <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500">Projeto autoral <ArrowUpRight size={15} /></span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};