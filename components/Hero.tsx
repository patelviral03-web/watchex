'use client';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/20 to-[#050505] z-10" />
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2787&auto=format&fit=crop" 
          alt="Luxury Watch Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 mt-20 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-gold/50" />
          <p className="text-gold font-inter tracking-[0.4em] text-xs uppercase">
            Beyond Time
          </p>
          <div className="w-12 h-[1px] bg-gold/50" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-playfair font-light leading-none italic text-white/90 mb-6"
        >
          ETERNITY
          <br />
          <span className="italic text-white/50">REFINED</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
          <span className="text-[10px] font-inter tracking-widest text-white/40 uppercase">Scroll to assemble</span>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white/50"
              animate={{ y: [0, 64, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
