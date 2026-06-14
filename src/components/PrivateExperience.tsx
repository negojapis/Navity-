"use client";

import { motion } from "framer-motion";

import { SparklesCore } from "./ui/sparkles";

export default function PrivateExperience() {
  return (
    <section id="private" className="py-32 md:py-48 bg-white relative overflow-hidden flex flex-col items-center">
      {/* Sparkles background covering the whole section */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, white 0%, white 80%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, white 0%, white 80%, transparent)" }}>
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

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center justify-center overflow-visible"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-black-absolute relative z-20 font-light text-center leading-[1.2] mb-12 transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 hover:text-champagne-gold hover:drop-shadow-[0_0_30px_rgba(200,169,106,0.6)] cursor-default">
            Uma experiência reservada.
          </h2>
          
          <p className="text-luxury-graphite text-base md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto relative z-20 text-center">
            Agende uma apresentação privada e conheça os modelos disponíveis com atendimento personalizado em nossa boutique.
          </p>
          <button className="relative z-20 px-12 py-5 bg-black-absolute text-off-white text-base font-medium uppercase tracking-widest hover:bg-champagne-gold hover:text-black-absolute transition-colors duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(200,169,106,0.4)]">
            Solicitar Atendimento
          </button>
        </motion.div>
      </div>
    </section>
  );
}
