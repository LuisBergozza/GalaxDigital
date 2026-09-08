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
    <section className="galax-profile-section py-14 md:py-20 relative bg-[#050505] overflow-hidden scroll-mt-24" id="resultados">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <div className="galax-profile-layout max-w-5xl mx-auto">

          <div className="galax-profile-heading">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">
              Perfil Ideal
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Para que tipo de empresa é a nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Assessoria?</span>
            </h2>
            <p className="galax-profile-intro">Para negócios que querem crescer com clareza, método e acompanhamento próximo.</p>
          </div>

          <div className="galax-profile-points">
            {points.map((text, idx) => (
              <div key={idx} className="galax-profile-point group">
                <div className="galax-profile-point-icon">
                  <CheckCircle2 size={17} />
                </div>
                <p>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="galax-profile-quote">
            <p>
              "Se sua empresa busca crescimento com método e não promessas vazias, a Galax é para você!"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
