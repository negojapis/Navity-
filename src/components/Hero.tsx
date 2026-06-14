"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black-absolute">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Lighter fallback overlay to keep text readable but make video sharper */}
        <div className="absolute inset-0 bg-black-absolute/20 z-10"></div>
        {/* Video scaled up slightly to push the watermark off-screen */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 scale-110 origin-center"
        >
          <source src="/media/video-novo.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient for the bottom transition to white */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-off-white to-transparent opacity-70 z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center text-center pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-champagne-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          Swiss inspired • Hand finished • Limited selection
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white via-off-white to-champagne-gold/50 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          O tempo elevado à sua forma mais rara.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-elegant-gray text-base md:text-lg max-w-2xl mb-12 font-light leading-relaxed"
        >
          Relógios criados para quem entende que precisão, presença e legado são detalhes que atravessam gerações.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link
            href="#collection"
            className="px-10 py-4 bg-champagne-gold text-black-absolute text-sm uppercase tracking-widest hover:bg-off-white transition-colors duration-500"
          >
            Conhecer a Coleção
          </Link>
          <Link
            href="#private"
            className="px-10 py-4 border border-elegant-gray/50 text-off-white text-sm uppercase tracking-widest hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-500 relative group overflow-hidden"
          >
            <span className="relative z-10">Agendar Consultoria Privada</span>
            <div className="absolute inset-0 w-0 bg-champagne-gold/10 group-hover:w-full transition-all duration-700 ease-out z-0"></div>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-elegant-gray tracking-widest uppercase">Descobrir</span>
        <div className="w-[1px] h-12 bg-elegant-gray/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-champagne-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
