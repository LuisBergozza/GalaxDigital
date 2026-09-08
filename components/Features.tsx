import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, BarChart3, Globe2, RefreshCw, Target, Zap } from 'lucide-react';

const methodSteps = [
  { number: '01', title: 'Estrutura', headline: 'Sua marca começa aqui.', tags: 'Google • Instagram • Site', detail: 'Presença digital sólida e profissional.', icon: Globe2 },
  { number: '02', title: 'Estratégia', headline: 'Cada ação tem um porquê.', tags: 'Conteúdo • Posicionamento', detail: 'Direção clara para chegar mais longe.', icon: Target },
  { number: '03', title: 'Execução', headline: 'Tirar a estratégia do papel.', tags: 'Criativos • Campanhas • SEO', detail: 'Ideias colocadas para funcionar.', icon: Zap },
  { number: '04', title: 'Aquisição', headline: 'Sua empresa na frente das pessoas certas.', tags: 'Tráfego Pago • Leads', detail: 'Aceleramos o que pode gerar negócio.', icon: BarChart3 },
  { number: '05', title: 'Otimização', headline: 'Medir. Ajustar. Crescer.', tags: 'Dados • Testes • Performance', detail: 'O que funciona, escala. O resto, muda.', icon: RefreshCw },
];

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="diferenciais" className={`galax-method-section py-16 md:py-20 relative overflow-hidden scroll-mt-24 ${isVisible ? 'is-visible' : ''}`}>
      <div className="galax-method-glow galax-method-glow-one absolute" />
      <div className="galax-method-glow galax-method-glow-two absolute" />

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <header className="galax-method-header max-w-3xl mx-auto text-center">
          <div className="galax-method-kicker inline-flex items-center gap-2 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
            <span className="galax-method-kicker-dot" /> Método proprietário
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-5">
            Não é sorte.<br />
            É <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Método Galax.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Estratégia, presença e performance trabalhando juntas para gerar resultado.
          </p>
        </header>

        <div className="galax-method-flow" aria-label="Etapas do Método Galax">
          <div className="galax-method-flow-line" />
          <div className="galax-method-core"><span>MÉTODO</span><strong>GALAX</strong><small>tudo conectado</small></div>

          {methodSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className={`galax-method-step galax-method-step-${index + 1}`} style={{ '--step-delay': `${index * 110}ms` } as React.CSSProperties}>
                <div className="galax-method-step-icon"><Icon size={22} strokeWidth={1.6} /></div>
                <div className="galax-method-step-copy">
                  <div className="galax-method-step-meta"><span>{step.number}</span><b>{step.title}</b></div>
                  <h3>{step.headline}</h3>
                  <p className="galax-method-tags">{step.tags}</p>
                  <p className="galax-method-detail">{step.detail}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="galax-together">
          <div className="galax-together-copy">
            <span className="galax-method-kicker-text">PARCERIA NA PRÁTICA</span>
            <h2>Feito junto.<br /><span>Pensado para o seu negócio.</span></h2>
            <p>A Galax não trabalha no automático. Estratégia e execução são construídas junto de quem conhece o negócio.</p>
          </div>
          <div className="galax-together-system" aria-label="Sua empresa e Galax conectadas para gerar resultado">
            <div className="galax-together-node"><span className="galax-together-icon"><Globe2 size={20} /></span><b>SUA EMPRESA</b><small>Conhecimento do negócio</small></div>
            <div className="galax-together-operator">+</div>
            <div className="galax-together-node"><span className="galax-together-icon galax-together-icon-purple"><Zap size={20} /></span><b>GALAX</b><small>Estratégia + execução</small></div>
            <div className="galax-together-operator">=</div>
            <div className="galax-together-result"><BarChart3 size={24} /><b>RESULTADO</b></div>
          </div>
        </div>

        <footer className="galax-method-close text-center">
          <h2>Tudo conectado.<br /><span>Um objetivo: resultado.</span></h2>
          <p>Presença <i>→</i> Estratégia <i>→</i> Execução <i>→</i> Performance</p>
          <a href="#contato" className="galax-method-cta">Conheça o Método Galax <ArrowRight size={17} /></a>
        </footer>
      </div>
    </section>
  );
};
