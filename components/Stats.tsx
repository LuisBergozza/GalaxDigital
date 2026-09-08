import React from 'react';

const items = [
  "Diagnóstico Estratégico",
  "Posicionamento claro",
  "Estrutura Escalável",
  "Acompanhamento Lado a Lado"
];

export const Stats: React.FC = () => {
  return (
    <section className="galax-stats py-10 md:py-14 border-y border-white/5 bg-white/2 relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 lg:gap-14">
          {items.map((item, index) => (
            <div key={index} className="galax-stat-item text-center group cursor-default flex min-h-[3.5rem] items-center justify-center p-3 md:p-4 rounded-xl border border-white/5 md:border-none bg-white/5 md:bg-transparent hover:bg-white/10 md:hover:bg-transparent transition-all">
              <div className="text-xs sm:text-sm md:text-lg font-bold leading-tight text-gray-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider whitespace-normal w-full">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};