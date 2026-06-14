"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const watches = [
  {
    name: "Classic Date",
    material: "Aço Inoxidável & Ouro Branco",
    description: "A essência da pureza. Um mostrador minimalista projetado meticulosamente para oferecer precisão atemporal e sofisticação incomparável em qualquer ocasião.",
    video: "/media/navi-1.mp4",
  },
  {
    name: "Royal Chronograph",
    material: "Ouro Champagne & Couro",
    description: "Para aqueles que medem o tempo em vitórias. Um cronógrafo avançado com detalhes esculpidos em ouro sólido e pulseira artesanal em couro de crocodilo.",
    video: "/media/navi-2.mp4",
  },
  {
    name: "Midnight Automatic",
    material: "Platina & Cristal de Safira",
    description: "A profundidade da noite no seu pulso. Possui um maquinário totalmente aparente, envolto em platina de alta densidade e resistência absoluta sob pressão.",
    video: "/media/navi-3.mp4",
  },
];

export default function Collection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Sincroniza e desacelera os vídeos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.playbackRate = 0.6; // Reprodução mais lenta para um toque de luxo
        video.currentTime = 0;
        video.play().catch(() => {
          // Ignora erros de auto-play em navegadores restritos
        });
      }
    });
  }, []);

  return (
    <section id="collection" className="py-24 md:py-32 bg-white relative">
      <div className="w-full mx-auto px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-black-absolute mb-6"
          >
            Coleção Navity
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-champagne-gold mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-luxury-graphite text-base md:text-lg tracking-[0.2em] uppercase"
          >
            A excelência em três formas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 xl:gap-24">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer transform hover:-translate-y-4 transition-transform duration-[800ms] ease-out flex flex-col"
            >
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden bg-off-white mb-10 shadow-2xl rounded-3xl border border-black-absolute/5">
                {/* Overlay for light premium feel */}
                <div className="absolute inset-0 bg-off-white/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={watch.video}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
              
              <div className="text-center px-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-black-absolute mb-4 transition-colors duration-500 group-hover:text-champagne-gold">{watch.name}</h3>
                  <p className="text-sm md:text-xs xl:text-sm text-champagne-gold uppercase tracking-[0.2em] mb-6 font-medium">
                    {watch.material}
                  </p>
                  <p className="text-luxury-graphite text-base md:text-lg font-light leading-relaxed mb-8 max-w-md mx-auto">
                    {watch.description}
                  </p>
                </div>
                <div>
                  <button className="inline-block text-black-absolute font-medium text-sm uppercase tracking-widest border-b border-transparent group-hover:border-champagne-gold group-hover:text-champagne-gold transition-colors duration-500 pb-1">
                    Ver detalhes completos
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
