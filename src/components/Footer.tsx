export default function Footer() {
  return (
    <footer id="footer" className="bg-white pt-24 pb-12 border-t border-black-absolute/5 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-24">
          
          {/* Navity Brand - Left */}
          <div className="text-center md:text-left max-w-lg w-full md:w-1/2">
            <span className="font-serif text-4xl md:text-5xl tracking-widest uppercase text-black-absolute mb-6 block">
              Navity
            </span>
            <p className="text-luxury-graphite text-base md:text-lg lg:text-xl leading-relaxed font-light">
              A expressão máxima da precisão suíça, desenhada para aqueles que conhecem o peso do seu próprio tempo.
            </p>
          </div>

          {/* Links - Right */}
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-32 text-center sm:text-left md:justify-end w-full md:w-1/2">
            {/* Links Group 1 */}
            <div className="flex flex-col gap-6">
              <span className="text-sm md:text-base uppercase tracking-[0.2em] text-black-absolute/50 font-bold mb-2">Descobrir</span>
              <a href="#collection" className="relative text-luxury-graphite hover:text-champagne-gold transition-colors duration-300 text-base md:text-lg group inline-block w-fit">
                Coleção
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-champagne-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              <a href="#precision" className="relative text-luxury-graphite hover:text-champagne-gold transition-colors duration-300 text-base md:text-lg group inline-block w-fit">
                A Arte da Precisão
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-champagne-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              <a href="#story" className="relative text-luxury-graphite hover:text-champagne-gold transition-colors duration-300 text-base md:text-lg group inline-block w-fit">
                Nossa Herança
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-champagne-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            </div>

            {/* Links Group 2 */}
            <div className="flex flex-col gap-6">
              <span className="text-sm md:text-base uppercase tracking-[0.2em] text-black-absolute/50 font-bold mb-2">Serviço Exclusivo</span>
              <a href="#private" className="relative text-luxury-graphite hover:text-champagne-gold transition-colors duration-300 text-base md:text-lg group inline-block w-fit">
                Agendar Consultoria
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-champagne-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              <a href="#" className="relative text-luxury-graphite hover:text-champagne-gold transition-colors duration-300 text-base md:text-lg group inline-block w-fit">
                Encontrar Boutique
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-champagne-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              <a href="#private" className="relative text-luxury-graphite hover:text-champagne-gold transition-colors duration-300 text-base md:text-lg group inline-block w-fit">
                Atendimento Privê
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-champagne-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-black-absolute/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base text-luxury-graphite/70 font-light">
          <p>© {new Date().getFullYear()} Navity. Todos os direitos reservados.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="relative group hover:text-black-absolute transition-colors duration-300">
              Termos
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black-absolute transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group hover:text-black-absolute transition-colors duration-300">
              Privacidade
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black-absolute transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
