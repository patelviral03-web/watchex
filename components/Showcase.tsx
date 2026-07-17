'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import Image from 'next/image';

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#050505] relative z-10" id="collection">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div style={{ y: y1 }} className="relative aspect-[3/4] overflow-hidden group">
              <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-transparent transition-all duration-1000 z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2960&auto=format&fit=crop" 
                alt="Watch Detail"
                fill
                referrerPolicy="no-referrer"
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-playfair mb-8 tracking-wide text-white/90 leading-tight font-light"
            >
              The Art of <br /><span className="italic text-white/50">Precision</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white/40 font-inter font-light leading-relaxed mb-12 max-w-md text-sm"
            >
              Every Watchex timepiece is a masterclass in horology. Forged from the rarest materials and assembled by hands that have mastered time itself. It is not just an instrument, but a legacy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <button className="flex items-center gap-6 text-[10px] font-inter tracking-[0.3em] text-white hover:text-gold transition-colors group">
                <span className="w-12 h-[1px] bg-white group-hover:bg-gold group-hover:w-20 transition-all duration-500" />
                EXPLORE COLLECTION
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
