"use client";

import { motion } from "framer-motion";

export default function Storytelling() {
  return (
    <section id="storytelling" className="relative py-32 md:py-48 min-h-[80vh] flex items-center overflow-hidden bg-black-absolute">
      {/* Full Bleed Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black-absolute/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 scale-105"
          src="/media/navi-two.mp4"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl flex flex-col items-center justify-center text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-8 leading-tight drop-shadow-lg">
            Mais que um relógio. <br />
            <span className="italic font-extralight tracking-wider text-white/90">Uma assinatura silenciosa.</span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Cada peça carrega a presença de quem escolhe menos ruído e mais significado. Um objeto de precisão, desenhado para acompanhar decisões, encontros e momentos que definem trajetória.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center">
            <div className="flex items-center gap-4 text-sm text-white/90 tracking-widest uppercase font-light">
              <span className="w-8 md:w-12 h-[1px] bg-white/60"></span>
              Tradição desde 1924
            </div>
            <div className="flex items-center gap-4 text-sm text-white/90 tracking-widest uppercase font-light">
              <span className="w-8 md:w-12 h-[1px] bg-white/60"></span>
              Montagem Manual
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
