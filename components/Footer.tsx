'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer ref={ref} className="bg-black/40 backdrop-blur-md pt-32 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center text-center mb-32"
        >
          <h2 className="text-[15vw] font-playfair tracking-[0.1em] text-white/90 leading-none mb-6">
            WATCHEX
          </h2>
          <p className="text-[10px] md:text-xs font-inter tracking-[0.5em] text-gold uppercase">
            The measurement of eternity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-t border-white/5 pt-20">
          <div className="col-span-1 md:col-span-2">
            <p className="text-white/40 font-inter text-sm max-w-md font-light leading-loose">
              Crafted in Geneva. Dedicated to the pursuit of absolute precision and aesthetic perfection since 1928. Time is our only master.
            </p>
          </div>
          <div>
            <h5 className="text-white/60 text-[10px] font-inter tracking-[0.3em] mb-8 uppercase">Collections</h5>
            <ul className="space-y-6 text-white/40 text-sm font-light font-inter">
              <li><Link href="#" className="hover:text-white transition-colors duration-300">The Caliber X</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Celestial</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Abyss</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Heritage</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/60 text-[10px] font-inter tracking-[0.3em] mb-8 uppercase">Maison</h5>
            <ul className="space-y-6 text-white/40 text-sm font-light font-inter">
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Our History</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Boutiques</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Savoir-Faire</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-inter tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} WATCHEX. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
