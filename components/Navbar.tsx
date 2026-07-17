'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 transition-all duration-700 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-6' : 'bg-transparent'}`}
    >
      <Link href="/" className="text-2xl font-playfair tracking-[0.3em] font-bold uppercase text-gold">
        WATCHEX
      </Link>
      
      <div className="hidden md:flex gap-12 text-[10px] font-inter tracking-[0.25em] text-white/60 font-medium">
        <Link href="#collection" className="hover:text-white transition-opacity duration-300 uppercase">Timepieces</Link>
        <Link href="#craft" className="hover:text-white transition-opacity duration-300 uppercase">Savoir-Faire</Link>
        <Link href="#heritage" className="hover:text-white transition-opacity duration-300 uppercase">Maison</Link>
      </div>

      <button className="px-8 py-4 bg-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4B577] transition-all">
        Discover
      </button>
    </motion.nav>
  );
}
