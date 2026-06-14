"use client";

import { motion } from "framer-motion";
import GlassClock from "./ui/glass-clock";
import { SparklesCore } from "./ui/sparkles";

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

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-black-absolute mb-4 uppercase tracking-tight hover:tracking-[0.15em] hover:text-champagne-gold transition-all duration-700 ease-in-out cursor-default"
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
            className="w-full lg:w-5/12 flex flex-col items-center lg:items-start justify-center relative"
          >
            {/* The GlassClock component is scaled down internally, but we give it a container */}
            <div className="relative w-full flex justify-center lg:justify-start h-[350px] sm:h-[450px] lg:h-[500px]">
              <div className="lg:-ml-8 flex items-center justify-center w-full h-full">
                <GlassClock />
              </div>
            </div>
            
            <p className="mt-4 lg:mt-8 text-center lg:text-left text-luxury-graphite text-sm md:text-base max-w-sm italic lg:-ml-4">
              O coração de um Navity bate em uma frequência hipnótica, onde o tempo não é apenas medido, é celebrado.
            </p>
          </motion.div>

          {/* Specs Side */}
          <div className="w-full lg:w-7/12 lg:pl-10">
            <p className="text-luxury-graphite text-lg md:text-xl font-light leading-relaxed mb-12">
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
                  className="py-6 border-b border-black-absolute/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
                >
                  <span className="text-luxury-graphite text-sm md:text-base tracking-widest uppercase group-hover:text-champagne-gold transition-colors duration-300">
                    {spec.label}
                  </span>
                  <span className="text-black-absolute font-serif text-lg md:text-xl tracking-wide group-hover:text-champagne-gold transition-colors duration-300">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Elegant separator line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black-absolute/10 to-transparent z-30" />
    </section>
  );
}
