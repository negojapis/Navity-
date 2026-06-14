"use client";

import { motion } from "framer-motion";

export default function PrivateExperience() {
  return (
    <section id="private" className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-champagne-gold/5 blur-[150px] rounded-full z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto border border-champagne-gold/30 p-12 md:p-20 bg-white/80 backdrop-blur-sm shadow-xl"
        >
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[1px] bg-champagne-gold mx-auto mb-8"
          />
          <h2 className="font-serif text-4xl md:text-5xl text-black-absolute mb-6">
            Uma experiência reservada.
          </h2>
          <p className="text-luxury-graphite text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
            Agende uma apresentação privada e conheça os modelos disponíveis com atendimento personalizado em nossa boutique.
          </p>
          <button className="px-10 py-4 bg-black-absolute text-off-white text-sm uppercase tracking-widest hover:bg-champagne-gold hover:text-black-absolute transition-colors duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(200,169,106,0.4)]">
            Solicitar Atendimento
          </button>
        </motion.div>
      </div>
    </section>
  );
}
