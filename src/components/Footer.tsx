import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white pt-20 pb-10 border-t border-black-absolute/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 mb-16">
          
          <div className="text-center md:text-left max-w-xs">
            <span className="font-serif text-2xl tracking-widest uppercase text-black-absolute mb-4 block">
              Navity
            </span>
            <p className="text-luxury-graphite text-sm leading-relaxed">
              A expressão máxima da precisão suíça, desenhada para aqueles que conhecem o peso do seu próprio tempo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-center sm:text-left">
            {/* Links */}
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-black-absolute/50 font-bold mb-2">Descobrir</span>
              <a href="#collection" className="text-luxury-graphite hover:text-champagne-gold transition-colors text-sm">Coleção</a>
              <a href="#precision" className="text-luxury-graphite hover:text-champagne-gold transition-colors text-sm">A Arte da Precisão</a>
              <a href="#story" className="text-luxury-graphite hover:text-champagne-gold transition-colors text-sm">Nossa Herança</a>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-black-absolute/50 font-bold mb-2">Serviço Exclusivo</span>
              <a href="#" className="text-luxury-graphite hover:text-champagne-gold transition-colors text-sm">Agendar Consultoria</a>
              <a href="#" className="text-luxury-graphite hover:text-champagne-gold transition-colors text-sm">Encontrar Boutique</a>
              <a href="#" className="text-luxury-graphite hover:text-champagne-gold transition-colors text-sm">Atendimento Privê</a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-black-absolute/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-luxury-graphite/70">
          <p>© {new Date().getFullYear()} Navity. Todos os direitos reservados.</p>
          <div className="flex gap-4 uppercase tracking-widest">
            <Link href="#" className="hover:text-black-absolute transition-colors duration-300">Termos</Link>
            <Link href="#" className="hover:text-black-absolute transition-colors duration-300">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
