import svgPaths from "../imports/svg-r3bom5h8vc";
import { AnimatedHello } from './AnimatedHello';
import { motion } from 'motion/react';

/* ── Gradient blur orbs (Figma-accurate) ─────────────────────────────── */
function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main center purple orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          left: '50%', top: '-60px',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0.25) 38%, rgba(70,46,123,0.1) 55%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.7,
        }}
      />
      {/* Right blue-purple orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          right: '-60px', top: '160px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(139,92,246,0.18) 50%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.5,
        }}
      />
      {/* Left blue orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700,
          left: '-120px', top: '100px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.22) 50%, transparent 70%)',
          filter: 'blur(110px)',
          opacity: 0.35,
        }}
      />
      {/* Small bright center accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          left: '50%', top: '160px',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(139,92,246,0.15) 60%, transparent 80%)',
          filter: 'blur(60px)',
          opacity: 0.4,
        }}
      />
    </div>
  );
}

/* ── X-shape bowtie — edge-to-edge full viewport width ───────────────── */
function DecorativeVectors() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '120vw', /* Diperkecil sedikit */
        left: '50%',
        top: '65%', /* Diturunkan lebih ke bawah lagi */
        transform: 'translate(-50%, -50%)',
        height: '75vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          style={{ display: 'block', width: '100%', height: '100%' }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1332.11 833.521"
        >
        <g>
          <g filter="url(#hf0)">
            <path d={svgPaths.p15721500} fill="#7555FF" />
            <path d={svgPaths.p15721500} stroke="#7555FF" strokeWidth="4.09437" />
          </g>
          <g filter="url(#hf1)">
            <path d={svgPaths.pa92b000} fill="#B688FF" />
            <path d={svgPaths.pa92b000} stroke="#B688FF" strokeWidth="4.09437" />
          </g>
          <g filter="url(#hf2)">
            <path d={svgPaths.pd3bc300} fill="#E9E4FF" />
            <path d={svgPaths.pd3bc300} stroke="#E9E4FF" strokeWidth="4.09437" />
          </g>
          <g filter="url(#hf3)">
            <path d={svgPaths.p11477b00} fill="#E9E4FF" />
            <path d={svgPaths.p11477b00} stroke="#E9E4FF" strokeWidth="4.09437" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"
            height="833.521" id="hf0" width="1332.11" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur stdDeviation="50" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"
            height="571.6" id="hf1" width="1198.05" x="66" y="133.113">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur stdDeviation="17" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"
            height="325.086" id="hf2" width="527.251" x="726.797" y="255.226">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"
            height="325.086" id="hf3" width="527.251" x="78.0463" y="255.226">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
      </svg>
      </motion.div>
    </div>
  );
}

/* ── Hero Section ────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Gradient orbs background */}
      <GradientOrbs />

      {/* Decorative X-shape vectors pinned to bottom */}
      <DecorativeVectors />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center flex-grow"
        style={{ paddingTop: '25vh' }}>

        {/* ── Heading ─────────────────────────────────── */}
        <div className="content-stretch flex flex-col items-center justify-center relative size-full mb-7" data-name="Heading 1">
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-[36px] items-center justify-center sm:px-[85px] relative max-w-full">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none">
                    <AnimatedHello />
                  </div>
                </div>
                
                <div className="relative shrink-0 max-w-full" data-name="Text">
                  <p className="font-sans font-bold text-white text-center tracking-[0.2637px] whitespace-nowrap m-0"
                     style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
                    <span className="leading-[1.1]">{`, I'm `}</span>
                    <span className="leading-[1.1] text-[#ad46ff]">Aqsa Herry</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-[#99a1af] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 20px)' }}
        >
          Designer & Web Developer. Building digital experiences
          with passion and precision, focused on creating exceptional user interfaces
          and scalable web applications.
        </p>
      </div>

      {/* CTA Buttons - Placed at the bottom, below the vector */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center pb-24 mt-auto" style={{ transform: 'translateY(-1vh)' }}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="px-8 py-4 bg-[#9810fa] hover:bg-purple-700 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 w-full sm:w-auto min-w-[168px]"
            onClick={() => {
              document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </button>
          <button
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[168px]"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1dU4vfP3_8xYT-VEf1ngYv46Wh5ZbLBPa/view?usp=sharing',
                '_blank'
              )
            }
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}