"use client";

import { motion } from "framer-motion";
import { Crosshair, History, Diamond } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

const pillars = [
  {
    icon: <Crosshair className="w-16 h-16 md:w-20 md:h-20 stroke-[1px]" />,
    title: "Precisão",
    description: "Precisão mecânica desenvolvida para transformar segundos em legado.",
  },
  {
    icon: <History className="w-16 h-16 md:w-20 md:h-20 stroke-[1px]" />,
    title: "Herança",
    description: "Tradição suíça respeitada em cada engrenagem, perpetuando a história no pulso.",
  },
  {
    icon: <Diamond className="w-16 h-16 md:w-20 md:h-20 stroke-[1px]" />,
    title: "Exclusividade",
    description: "Peças numeradas e limitadas, desenhadas apenas para uma seleta minoria.",
  },
];

export default function Authority() {
  return (
    <section id="authority" className="relative w-full overflow-hidden bg-white">
      {/* Sparkles background covering the whole section */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, transparent, white 20%, white 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, white 20%, white 100%)" }}>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#C8A96A"
        />
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-champagne-gold/5 blur-[150px] rounded-full z-0 pointer-events-none" />

      {/* Giant watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-10 opacity-[0.03]">
        <span className="font-serif text-[15rem] md:text-[25rem] lg:text-[35rem] text-black-absolute font-bold leading-none tracking-tighter">
          2018
        </span>
      </div>

      <div className="py-32 md:py-40 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center mb-24 flex flex-col items-center relative z-20">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-graphite/60 font-bold mb-4 block">
              A Filosofia da Marca
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-black-absolute mb-8 tracking-tight"
            >
              Os Pilares da Excelência
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-luxury-graphite text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            >
              A Navity não apenas mede o tempo; ela o domina. Cada relógio é o resultado de uma obsessão implacável pela perfeição, construído sobre três fundamentos inabaláveis.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 relative z-20">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group bg-gradient-to-b from-white/90 to-white/50 backdrop-blur-md border border-champagne-gold/30 p-16 lg:p-20 min-h-[450px] justify-center hover:from-white hover:to-white transition-all duration-700 shadow-[0_15px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(200,169,106,0.2)] relative overflow-hidden rounded-md"
              >
                {/* Accent gradient line at top of card */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-champagne-gold/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="text-champagne-gold mb-10 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 transform">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black-absolute mb-8 tracking-wide group-hover:text-champagne-gold transition-colors duration-500">{pillar.title}</h3>
                <div className="w-16 h-[1px] bg-champagne-gold/50 mb-10 group-hover:w-32 transition-all duration-700"></div>
                <p className="text-luxury-graphite text-lg md:text-xl font-light max-w-sm leading-relaxed relative z-10">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
