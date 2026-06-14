"use client";

import { motion } from "framer-motion";
import GlassClock from "./ui/glass-clock";

const specs = [
  { label: "Movimento", value: "Calibre Navity 9001 Automático" },
  { label: "Reserva de marcha", value: "Até 72 horas" },
  { label: "Frequência", value: "28.800 alternâncias/hora (4 Hz)" },
  { label: "Caixa", value: "Aço Oystersteel ou Ouro 18k" },
  { label: "Resistência à água", value: "Até 300 metros" },
  { label: "Cristal", value: "Safira com tratamento antirreflexo" },
];

export default function TechnicalDetails() {
  return (
    <section id="precision" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl text-black-absolute mb-4"
          >
            Precisão em cada milímetro
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-champagne-gold"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative">
          
          {/* Glass Clock Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center relative"
          >
            {/* The GlassClock component is scaled down internally, but we give it a container */}
            <div className="relative w-full flex justify-center h-[350px] sm:h-[400px]">
              <GlassClock />
            </div>
            
            <p className="mt-8 text-center text-luxury-graphite text-sm max-w-sm italic">
              O coração de um Navity bate em uma frequência hipnótica, onde o tempo não é apenas medido, é celebrado.
            </p>
          </motion.div>

          {/* Specs Side */}
          <div className="w-full lg:w-1/2">
            <p className="text-luxury-graphite text-base md:text-lg font-light leading-relaxed mb-10">
              Cada componente de nossos calibres é usinado com tolerâncias na escala de mícrons. Nossos mestres relojoeiros em Genebra dedicam mais de 400 horas apenas na montagem e teste de um único maquinário, assegurando que o tempo nunca falhe em seu pulso.
            </p>

            <div className="flex flex-col gap-0">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="py-5 border-b border-black-absolute/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group"
                >
                  <span className="text-luxury-graphite text-xs tracking-widest uppercase group-hover:text-champagne-gold transition-colors duration-300">
                    {spec.label}
                  </span>
                  <span className="text-black-absolute font-serif text-base tracking-wide group-hover:text-champagne-gold transition-colors duration-300">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
