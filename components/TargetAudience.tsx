import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const points = [
    "Estão cansadas de agências que apenas “rodam anúncios”, sem estratégia por trás",
    "Precisam organizar e posicionar o seu digital antes de pensar em escala",
    "Buscam clareza, previsibilidade e controle sobre números e decisões",
    "Valorizam acompanhamento próximo e visão estratégica"
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#050505] overflow-hidden scroll-mt-24" id="resultados">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Perfil Ideal
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Para que tipo de empresa é a nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Assessoria?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            {points.map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="mt-1 min-w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors pt-1.5">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <p className="text-xl text-gray-400 italic border-l-4 border-primary pl-6 py-2 max-w-2xl">
              "Se sua empresa busca crescimento com método e não promessas vazias, a Galax é para você!"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
