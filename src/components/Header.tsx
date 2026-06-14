"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Coleção", href: "#collection" },
    { name: "História", href: "#storytelling" },
    { name: "Precisão", href: "#authority" },
    { name: "Exclusividade", href: "#private" },
    { name: "Contato", href: "#footer" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-8 w-full z-40 transition-all duration-500 ${
        scrolled ? "bg-off-white/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-champagne-gold/20" : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className={`font-serif text-3xl tracking-widest uppercase hover:text-champagne-gold transition-colors duration-300 ${scrolled ? 'text-black-absolute' : 'text-off-white'}`}>
            Navity
          </span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase hover:text-champagne-gold transition-colors duration-300 ${scrolled ? 'text-luxury-graphite' : 'text-off-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#private"
            className={`px-8 py-3 border text-sm uppercase tracking-widest transition-all duration-300 ${
              scrolled 
                ? 'border-black-absolute text-black-absolute hover:bg-black-absolute hover:text-off-white' 
                : 'border-champagne-gold/50 text-champagne-gold hover:bg-champagne-gold hover:text-black-absolute'
            }`}
          >
            Agendar Apresentação
          </Link>
        </div>

        {/* Mobile Menu Button - Minimalist (Just the button for now) */}
        <button className="md:hidden text-champagne-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
