'use client';
import { motion } from 'motion/react';

const features = [
  {
    title: "TOURBILLON",
    desc: "Gravity-defying escapement mechanism, meticulously hand-finished for flawless accuracy.",
    num: "01"
  },
  {
    title: "SAPPHIRE",
    desc: "Unscratchable dome crystal treated with anti-reflective coating on both sides.",
    num: "02"
  },
  {
    title: "PLATINUM",
    desc: "Case forged from 950 platinum, offering unmatched weight, durability and luster.",
    num: "03"
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#050505]" id="craft">
      {/* Background glow for glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10px] font-inter tracking-[0.4em] text-gold mb-6 uppercase"
          >
            Savoir-Faire
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-playfair text-white/90 tracking-wider font-light"
          >
            UNCOMPROMISING
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-12 rounded-none bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl hover:bg-white/[0.03] transition-colors duration-700 group relative overflow-hidden"
            >
              {/* Animated hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute -right-4 -top-8 text-8xl font-playfair text-white/5 group-hover:text-white/10 transition-colors duration-700 select-none">
                {f.num}
              </div>
              <h4 className="text-xl font-playfair tracking-[0.2em] text-white/90 mb-6 mt-12">{f.title}</h4>
              <p className="text-white/40 font-inter text-sm leading-loose font-light">
                {f.desc}
              </p>
              
              <div className="mt-8 overflow-hidden">
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
