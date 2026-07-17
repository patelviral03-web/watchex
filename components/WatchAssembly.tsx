'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function WatchAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a 500vh container to give plenty of scroll distance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // We want all parts to assemble at y=0 when progress reaches ~0.8
  
  // 1. Case Back (Starts lowest, comes up)
  const yBack = useTransform(scrollYProgress, [0.1, 0.6], [500, 0]);
  const opacityBack = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // 2. Gears (Start low-mid, come up)
  const yGears = useTransform(scrollYProgress, [0.1, 0.65], [300, 0]);
  const opacityGears = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  // 3. Dial (Starts high-mid, comes down)
  const yDial = useTransform(scrollYProgress, [0.1, 0.7], [-300, 0]);
  const opacityDial = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // 4. Hands (Start higher, come down)
  const yHands = useTransform(scrollYProgress, [0.1, 0.75], [-500, 0]);
  const opacityHands = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  // 5. Glass / Top Bezel (Starts highest, comes down)
  const yGlass = useTransform(scrollYProgress, [0.1, 0.8], [-800, 0]);
  const opacityGlass = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  // Text Reveal at the end
  const textOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.8, 0.9], [40, 0]);

  // Subtitle blur/scale effect on the background
  const bgScale = useTransform(scrollYProgress, [0.8, 1], [1, 1.05]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#050505]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Subtle radial gradient background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,rgba(0,0,0,0)_50%)]"
          style={{ scale: bgScale }}
        />

        <div className="relative w-[600px] h-[600px] flex items-center justify-center z-10">
          <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
            
            {/* 1. Case Back */}
            <motion.g style={{ y: yBack, opacity: opacityBack }}>
              <circle cx="250" cy="250" r="160" fill="#050505" stroke="#222" strokeWidth="8" />
              <circle cx="250" cy="250" r="150" fill="url(#metalGrad)" />
              {/* Inner ring */}
              <circle cx="250" cy="250" r="130" fill="none" stroke="#111" strokeWidth="4" />
              {/* Crown back part */}
              <path d="M 405 230 L 420 235 L 420 265 L 405 270 Z" fill="#111" />
            </motion.g>

            {/* 2. Gears & Mechanics */}
            <motion.g style={{ y: yGears, opacity: opacityGears }}>
              {/* Main central gear */}
              <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="110" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="250" cy="250" r="90" fill="none" stroke="#555" strokeWidth="4" strokeDasharray="15 15" />
                <path d="M 250 160 L 250 340 M 160 250 L 340 250 M 185 185 L 315 315 M 185 315 L 315 185" stroke="#222" strokeWidth="2" />
              </motion.g>
              
              {/* Secondary gear left */}
              <motion.g animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ transformOrigin: "180px 220px" }}>
                <circle cx="180" cy="220" r="45" fill="none" stroke="#888" strokeWidth="3" strokeDasharray="8 8" />
                <circle cx="180" cy="220" r="10" fill="#222" />
                <path d="M 180 175 L 180 265 M 135 220 L 225 220" stroke="#333" strokeWidth="2" />
              </motion.g>

              {/* Secondary gear right */}
              <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ transformOrigin: "320px 280px" }}>
                <circle cx="320" cy="280" r="55" fill="none" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="320" cy="280" r="8" fill="#111" />
                <path d="M 320 225 L 320 335 M 265 280 L 375 280 M 280 240 L 360 320" stroke="#333" strokeWidth="1" />
              </motion.g>
              
              {/* Tourbillon mock */}
              <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} style={{ transformOrigin: "250px 350px" }}>
                <circle cx="250" cy="350" r="25" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 250 325 L 250 375 M 225 350 L 275 350" stroke="#C5A059" strokeWidth="1" />
              </motion.g>
            </motion.g>

            {/* 3. Dial (Face) */}
            <motion.g style={{ y: yDial, opacity: opacityDial }}>
              {/* Semi-transparent dark face to reveal gears */}
              <circle cx="250" cy="250" r="145" fill="rgba(10,10,10,0.85)" />
              {/* Outer track */}
              <circle cx="250" cy="250" r="140" fill="none" stroke="#222" strokeWidth="4" />
              
              {/* Minute Ticks */}
              {[...Array(60)].map((_, i) => (
                <line 
                  key={`min-${i}`}
                  x1="250" y1="110" x2="250" y2={i % 5 === 0 ? "125" : "115"} 
                  stroke={i % 5 === 0 ? "#C5A059" : "#555"} 
                  strokeWidth={i % 5 === 0 ? "3" : "1"}
                  transform={`rotate(${i * 6} 250 250)`}
                />
              ))}

              {/* Sub-dials */}
              <circle cx="190" cy="250" r="28" fill="none" stroke="#333" strokeWidth="1" />
              <circle cx="310" cy="250" r="28" fill="none" stroke="#333" strokeWidth="1" />
              
              <text x="250" y="165" fill="#fff" fontSize="14" fontFamily="var(--font-playfair)" textAnchor="middle" letterSpacing="4">WATCHEX</text>
              <text x="250" y="340" fill="#555" fontSize="8" fontFamily="var(--font-inter)" textAnchor="middle" letterSpacing="2">SWISS MADE</text>
            </motion.g>

            {/* 4. Hands */}
            <motion.g style={{ y: yHands, opacity: opacityHands }}>
              {/* Hour Hand */}
              <path d="M 246 250 L 254 250 L 252 150 L 250 140 L 248 150 Z" fill="#fff" transform="rotate(45 250 250)" />
              {/* Minute Hand */}
              <path d="M 247 250 L 253 250 L 251 125 L 250 115 L 249 125 Z" fill="#fff" transform="rotate(320 250 250)" />
              {/* Second Hand */}
              <line x1="250" y1="280" x2="250" y2="110" stroke="#C5A059" strokeWidth="2" transform="rotate(15 250 250)" />
              <circle cx="250" cy="250" r="6" fill="#C5A059" />
              <circle cx="250" cy="250" r="2" fill="#fff" />
            </motion.g>

            {/* 5. Glass / Top Bezel */}
            <motion.g style={{ y: yGlass, opacity: opacityGlass }}>
              {/* Crystal Glass */}
              <circle cx="250" cy="250" r="148" fill="rgba(255,255,255,0.02)" />
              {/* Glass reflection */}
              <path d="M 120 150 Q 250 80 380 150 Q 300 250 120 150 Z" fill="rgba(255,255,255,0.04)" />
              
              {/* Top Bezel Frame */}
              <circle cx="250" cy="250" r="150" fill="none" stroke="#111" strokeWidth="8" />
              <circle cx="250" cy="250" r="158" fill="none" stroke="#333" strokeWidth="4" />
              
              {/* Crown top part */}
              <path d="M 412 232 L 424 235 L 424 265 L 412 268 Z" fill="#222" stroke="#444" strokeWidth="2" />
              <line x1="416" y1="240" x2="422" y2="240" stroke="#111" strokeWidth="2" />
              <line x1="416" y1="250" x2="422" y2="250" stroke="#111" strokeWidth="2" />
              <line x1="416" y1="260" x2="422" y2="260" stroke="#111" strokeWidth="2" />
            </motion.g>

            <defs>
              <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#222" />
                <stop offset="100%" stopColor="#050505" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <motion.div 
          className="absolute bottom-16 md:bottom-24 flex flex-col items-center text-center z-20"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h2 className="text-4xl md:text-7xl font-playfair mb-4 tracking-wider text-white/90 font-light italic">THE CALIBER X</h2>
          <p className="text-white/40 font-inter max-w-lg mx-auto uppercase tracking-[0.4em] text-[10px]">
            Mastery in motion. 512 individual components harmonized in absolute precision.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
