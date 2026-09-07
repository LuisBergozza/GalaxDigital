import React from 'react';
import { TrendingUp, Zap, ShieldCheck, PieChart, ArrowUpRight, Lock } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] translate-x-1/3"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Por que nos escolher?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não é sorte, é <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Método Validado</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Enquanto o mercado foca em curtidas, nós focamos na única métrica que paga as contas: <span className="text-white font-semibold">Lucro no seu bolso.</span>
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

          {/* Card 1: ROI Focus (Large) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 hover:border-primary/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight size={48} className="text-primary" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Foco Real em Resultado</h3>
                <p className="text-gray-400 max-w-md">
                  Não trabalhamos com métricas de vaidade. Nossos relatórios mostram o que realmente importa: custo por lead, custo por aquisição, conversão e retorno sobre o investimento.
                </p>
              </div>

              {/* Abstract Chart Graphic */}
              <div className="mt-8 flex items-end gap-2 h-24 w-full max-w-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1/5 bg-gray-800 rounded-t-lg h-[40%] group-hover:h-[50%] group-hover:bg-primary/30 transition-all duration-700"></div>
                <div className="w-1/5 bg-gray-800 rounded-t-lg h-[60%] group-hover:h-[70%] group-hover:bg-primary/50 transition-all duration-700 delay-75"></div>
                <div className="w-1/5 bg-gray-800 rounded-t-lg h-[30%] group-hover:h-[45%] group-hover:bg-primary/40 transition-all duration-700 delay-100"></div>
                <div className="w-1/5 bg-gray-800 rounded-t-lg h-[80%] group-hover:h-[90%] group-hover:bg-primary/70 transition-all duration-700 delay-150"></div>
                <div className="w-1/5 bg-primary rounded-t-lg h-[65%] group-hover:h-[100%] shadow-[0_0_20px_rgba(83,0,255,0.5)] transition-all duration-700 delay-200"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Agility (Tall) */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 bg-gradient-to-b from-transparent to-primary/5">
             <div className="absolute inset-0 bg-noise opacity-5"></div>
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Execução Ágil e Contínua</h3>
                <p className="text-gray-400 text-sm mb-6">
                  O mercado muda rápido e a estratégia precisa acompanhar. Atuamos com otimizações frequentes, ajustes constantes e decisões rápidas baseadas no desempenho real das campanhas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[90%] animate-pulse"></div>
                    </div>
                    <span>Speed</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%] animate-pulse delay-75"></div>
                    </div>
                    <span>Optim.</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Card 3: Data Driven (Square) */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 hover:border-primary/50 transition-all duration-500">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="relative z-10">
               <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <PieChart size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Estratégia Orientada por Dados</h3>
               <p className="text-gray-400 text-sm">
                 Cada decisão é sustentada por análise de dados e leitura de mercado. Menos achismo, mais estratégia validada por performance.
               </p>
            </div>
          </div>

          {/* Card 4: Transparency (Wide) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A0A0A] to-[#110524] border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
               <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Transparência Total</h3>
               <p className="text-gray-400">
                 Você tem acesso completo às contas de anúncios e recebe relatórios claros e objetivos sobre tudo que está sendo feito. Sem taxas ocultas, sem promessas vazias.
               </p>
            </div>

            <div className="flex-1 w-full bg-black/40 rounded-xl p-4 border border-white/5 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                <Lock size={12} className="text-green-500" />
                <span className="text-xs text-gray-500">Client Access Portal</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Total Investido</span>
                  <span className="text-white font-mono">R$ 14.250,00</span>
                </div>
                 <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Receita Gerada</span>
                  <span className="text-green-400 font-mono font-bold">R$ 98.420,00</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-green-400 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};