"use client";

import { motion } from "framer-motion";
import { Crosshair, History, Diamond } from "lucide-react";
import { ShaderBackground } from "@/components/ui/hero-shader";

const pillars = [
  {
    icon: <Crosshair className="w-8 h-8 stroke-[1px]" />,
    title: "Precisão",
    description: "Precisão mecânica desenvolvida para transformar segundos em legado.",
  },
  {
    icon: <History className="w-8 h-8 stroke-[1px]" />,
    title: "Herança",
    description: "Tradição suíça respeitada em cada engrenagem, perpetuando a história no pulso.",
  },
  {
    icon: <Diamond className="w-8 h-8 stroke-[1px]" />,
    title: "Exclusividade",
    description: "Peças numeradas e limitadas, desenhadas apenas para uma seleta minoria.",
  },
];

export default function Authority() {
  return (
    <section id="authority" className="relative w-full">
      <ShaderBackground>
        <div className="py-24 md:py-32 relative z-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="text-champagne-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-black-absolute mb-4 tracking-wide">{pillar.title}</h3>
                  <div className="w-8 h-[1px] bg-champagne-gold/50 mb-6 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-luxury-graphite text-sm md:text-base font-light max-w-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ShaderBackground>
    </section>
  );
}
