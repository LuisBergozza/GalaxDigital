import React from 'react';
import { Button } from './ui/Button';
import { Mail, Phone, ArrowRight, MapPin } from 'lucide-react';

// WhatsApp Logo Component
const WhatsAppLogo: React.FC<{ className?: string; size?: number }> = ({ className, size = 48 }) => (
  <svg
    viewBox="0 0 175.216 175.552"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="whatsapp-gradient" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#57d163"/>
        <stop offset="1" stopColor="#23b33a"/>
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      fill="url(#whatsapp-gradient)"
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
    />
    <path
      fill="url(#whatsapp-gradient)"
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      filter="url(#glow)"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
    />
  </svg>
);

export const Contact: React.FC = () => {
  const whatsappNumber = '5549999428374';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços da Galax Digital.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-16 md:py-24 relative overflow-hidden scroll-mt-24">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-900/10 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch">

          {/* Left Column: Info & Context */}
          <div className="lg:w-5/12 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 w-fit">
                Vamos conversar
             </div>

             <h2 className="max-w-xl text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-[1.12] md:leading-tight">
               Pronto para <br className="hidden md:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 whitespace-nowrap">Dominar o Mercado?</span>
             </h2>

             <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
               Não deixe dinheiro na mesa. Nossos estrategistas estão prontos para desenhar o plano que vai dobrar seu faturamento.
             </p>

             {/* Organized Contact Cards */}
             <div className="flex flex-col gap-3 md:gap-4">
                <ContactInfoItem
                  icon={MapPin}
                  label="Localização"
                  value="Concórdia SC - Oeste Catarinense"
                  href="https://www.google.com/maps/place/Concórdia,+SC"
                />
                <ContactInfoItem
                  icon={Mail}
                  label="Email Corporativo"
                  value="galaxy.design2022@gmail.com"
                  href="mailto:galaxy.design2022@gmail.com"
                />
                <ContactInfoItem
                  icon={Phone}
                  label="WhatsApp Direto"
                  value="(49) 99942-8374"
                  href="https://wa.me/5549999428374"
                />
             </div>
          </div>

          {/* Right Column: WhatsApp Card */}
          <div className="lg:w-7/12 relative mt-4 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-1"></div>

            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">

              {/* Decorative noise texture (CSS puro, sem dependência externa) */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

              {/* WhatsApp Card Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[500px]">

                {/* WhatsApp Icon */}
                <div className="w-20 h-20 md:w-28 md:h-28 bg-green-500/20 rounded-full flex items-center justify-center mb-6 md:mb-8 relative group">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                  <WhatsAppLogo size={48} className="md:w-16 md:h-16 relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Fale com um Especialista</h3>

                {/* Description */}
                <p className="text-gray-400 max-w-md text-sm md:text-lg mb-8 md:mb-10 leading-relaxed px-4">
                  Converse diretamente com nossa equipe pelo WhatsApp e descubra como podemos ajudar seu negócio a crescer.
                </p>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md"
                >
                  <Button
                    fullWidth
                    size="lg"
                    className="group relative overflow-hidden h-14 md:h-16 text-base md:text-lg bg-green-600 hover:bg-green-700"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <WhatsAppLogo size={24} className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Iniciar Conversa no WhatsApp</span>
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shine_1.5s_infinite]"></div>
                  </Button>
                </a>

                {/* Additional Info */}
                <p className="text-center text-xs md:text-sm text-gray-500 mt-6 md:mt-8 px-4">
                  Atendimento rápido e personalizado • Resposta em minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component

interface ContactInfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, label, value, href }) => {
  const Content = (
    <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group w-full cursor-pointer">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-black/50 border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:scale-105 transition-all duration-300 shrink-0">
        <Icon size={20} className="md:w-6 md:h-6" />
      </div>
      <div className="min-w-0 overflow-hidden">
        <p className="text-[10px] md:text-xs text-gray-500 uppercase font-semibold tracking-wider mb-0.5">{label}</p>
        <p className="text-sm md:text-lg font-medium text-white group-hover:text-primary transition-colors truncate">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
      {Content}
    </a>
  ) : (
    <div className="block w-full">
      {Content}
    </div>
  );
};