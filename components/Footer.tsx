import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface SocialButtonProps {
  icon: React.ElementType;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-[0_0_15px_rgba(83,0,255,0.4)] transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
    >
      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-[2px] bg-primary"></span>
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
    </a>
  </li>
);

interface FooterProps {
  isLightMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isLightMode = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-12 pb-8 border-t border-white/5 relative overflow-hidden text-sm">

      {/* Background Gradients (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <img
                src={isLightMode ? '/logo preta.png' : '/logo completa.png'}
                alt="Galax Digital"
                className="h-10"
              />
            </a>

            <p className="text-gray-400 leading-relaxed max-w-xs">
              Agência de marketing digital em Concórdia SC e região Oeste Catarinense. Transformamos empresas através de estratégias de tráfego pago, gestão de anúncios e branding para crescimento real.
            </p>

            <div className="flex gap-4 pt-2">
              <SocialButton icon={Instagram} href="https://www.instagram.com/galaxdigital_/" />
              <SocialButton icon={Facebook} href="https://www.facebook.com/EfeitoGalax/" />
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              <FooterLink href="#servicos">Nossos Serviços</FooterLink>
              <FooterLink href="#diferenciais">Diferenciais</FooterLink>
              <FooterLink href="#resultados">Resultados</FooterLink>
              <FooterLink href="#contato">Fale Conosco</FooterLink>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-3">
              <FooterLink href="https://wa.me/5549999428374">Gestão de Tráfego Pago</FooterLink>
              <FooterLink href="https://wa.me/5549999428374">Inbound Marketing</FooterLink>
              <FooterLink href="https://wa.me/5549999428374">Web Design & Landing Pages</FooterLink>
              <FooterLink href="https://wa.me/5549999428374">Posicionamento de Marca</FooterLink>
              <FooterLink href="https://wa.me/5549999428374">Consultoria de Growth</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
             <div className="space-y-4">
                <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
               <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium text-white text-sm">Concórdia - SC</span>
                    <span className="text-xs">Oeste Catarinense</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <a href="mailto:galaxy.design2022@gmail.com" className="hover:text-primary transition-colors text-xs break-all">
                    galaxy.design2022@gmail.com
                  </a>
               </div>
               <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a href="https://wa.me/5549999428374" className="hover:text-primary transition-colors">
                    (49) 99942-8374
                  </a>
               </div>
            </div>
          </div>

        </div>

        {/* SEO Text Section */}
        <div className="border-t border-white/5 pt-8 pb-8">
          <div className="text-gray-500 text-xs leading-relaxed max-w-5xl">
            <p className="mb-3">
              <strong className="text-gray-400">Galax Digital</strong> é uma agência de marketing digital especializada em <strong className="text-gray-400">gestão de tráfego pago</strong>, atuando em <strong className="text-gray-400">Concórdia SC</strong> e em toda região do <strong className="text-gray-400">Oeste Catarinense</strong>. Oferecemos soluções completas de marketing digital incluindo Google Ads, Meta Ads, consultoria de marketing empresarial, planejamento estratégico de marketing, gestão de redes sociais e estruturação digital para pequenas e médias empresas.
            </p>
            <p>
              Nossa atuação abrange serviços de <strong className="text-gray-400">assessoria de marketing para empresas</strong>, <strong className="text-gray-400">criação de campanhas de anúncios</strong>, marketing estratégico para negócios e consultoria especializada para empresas locais, prestadores de serviço e comércio em Santa Catarina. Atendemos empresas que buscam crescimento através de <strong className="text-gray-400">marketing digital profissional</strong> e resultados mensuráveis.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-center md:text-left flex flex-col md:flex-row gap-1 md:gap-2 text-xs md:text-sm items-center w-full justify-between">
            <span>&copy; {currentYear} Galax Digital. Todos os direitos reservados.</span>
            <span>
              Desenvolvido por Galax Digital
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};