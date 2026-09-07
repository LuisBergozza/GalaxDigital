import React from 'react';
import { MousePointerClick, Target, Layout, Users, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    category: 'Tráfego',
    title: 'Gestão de Tráfego Pago',
    description: 'Planejamos, executamos e otimizamos campanhas de alta performance nos principais canais de mídia paga. Nosso foco é simples: atrair o cliente certo, escalar resultados e reduzir o custo por aquisição (CPA).',
    icon: MousePointerClick,
    features: [
      'Gestão estratégica de Google e Meta Ads',
      'Criação e testes de criativos orientados a performance',
      'Remarketing inteligente e multicanal'
    ]
  },
  {
    id: '02',
    category: 'Estratégia',
    title: 'Estratégia Digital & Conversão',
    description: 'Atuamos de forma estratégica para organizar o marketing digital do seu negócio. Nosso foco é direção, posicionamento e conversão, não apenas a construção de funis complexos.',
    icon: Target,
    features: [
      'Definição de estratégia digital alinhada aos objetivos',
      'Estruturação de comunicação e ofertas',
      'Copywriting estratégico focado em conversão e vendas'
    ]
  },
  {
    id: '03',
    category: 'Design',
    title: 'Web Design & Landing Pages',
    description: 'Desenvolvemos sites institucionais e Landing Pages com foco total em conversão, velocidade e experiência do usuário. Cada elemento é pensado para gerar ação.',
    icon: Layout,
    features: [
      'Design responsivo e Mobile First',
      'Otimização de velocidade',
      'Estrutura de páginas orientada a conversão'
    ]
  },
  {
    id: '04',
    category: 'Posicionamento',
    title: 'Posicionamento Digital',
    description: 'Construímos posicionamento e presença digital com estratégia. Não é sobre postar por postar, é sobre criar autoridade, fortalecer marca e gerar valor real para o negócio.',
    icon: Users,
    features: [
      'Planejamento estratégico de conteúdo e linha editorial',
      'Criação de design e vídeos',
      'Construção de narrativa e identidade digital'
    ]
  },
  {
    id: '05',
    category: 'Performance',
    title: 'Análise de Performance & Relatórios',
    description: 'Transformamos dados em clareza e direção estratégica. Entregamos relatórios objetivos e acionáveis para que você entenda o que está funcionando e o que precisa ser ajustado.',
    icon: BarChart3,
    features: [
      'Relatórios periódicos de performance',
      'Análise de métricas estratégicas (CPA, CAC, ROI)',
      'Auditoria de campanhas e tracking'
    ]
  },
  {
    id: '06',
    category: 'Growth',
    title: 'Consultoria de Growth & Escala',
    description: 'Atuamos lado a lado com o seu negócio para identificar gargalos, validar hipóteses e acelerar o crescimento com base em dados, testes e estratégia.',
    icon: TrendingUp,
    features: [
      'Diagnóstico completo do funil de vendas',
      'Testes A/B e validação contínua',
      'Consultorias Estratégicas'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 relative bg-[#050505] scroll-mt-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sticky Left Column */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32 h-fit">

              <h2 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-10 leading-tight">
                <span className="whitespace-nowrap">Soluções completas para</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Escalar seu Negócio</span>
              </h2>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
                <img
                  src="/imagem.png"
                  alt="Equipe da Galax Digital analisando dados de performance"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={640}
                  className="w-full aspect-square object-contain bg-black/40 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Card on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl z-20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-300 uppercase">Visão de Negócio</p>
                            <p className="text-white font-bold text-lg">Decisão que gera resultado</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Right Column */}
          <div className="lg:w-7/12 flex flex-col gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-20px_rgba(83,0,255,0.2)]"
              >
                {/* Gradient Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};