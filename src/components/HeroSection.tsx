import svgPaths from "../imports/svg-r3bom5h8vc";
import { AnimatedHello } from './AnimatedHello';
import { motion, useReducedMotion } from 'motion/react';

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
          background: 'radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0.18) 38%, rgba(70,46,123,0.08) 55%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.6,
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
          width: 560, height: 560,
          left: '-120px', top: '120px',
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
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="opacity-20 md:opacity-35"
      style={{
        position: 'absolute',
        width: '100vw',
        left: '50%',
        top: '72%',
        transform: 'translate(-50%, -50%)',
        height: '60vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <motion.div
        animate={reduceMotion ? undefined : {
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
            <path d={svgPaths.p15721500} fill="#7555FF" fillOpacity="0.7" />
            <path d={svgPaths.p15721500} stroke="#7555FF" strokeWidth="4.09437" />
          </g>
          <g filter="url(#hf1)">
            <path d={svgPaths.pa92b000} fill="#B688FF" fillOpacity="0.45" />
            <path d={svgPaths.pa92b000} stroke="#B688FF" strokeWidth="4.09437" />
          </g>
          <g filter="url(#hf2)">
            <path d={svgPaths.pd3bc300} fill="#E9E4FF" fillOpacity="0.32" />
            <path d={svgPaths.pd3bc300} stroke="#E9E4FF" strokeWidth="4.09437" />
          </g>
          <g filter="url(#hf3)">
            <path d={svgPaths.p11477b00} fill="#E9E4FF" fillOpacity="0.32" />
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
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden py-24 md:py-28">
      {/* Gradient orbs background */}
      <GradientOrbs />

      {/* Decorative X-shape vectors pinned to bottom */}
      <DecorativeVectors />

      {/* ── Content ─────────────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
        style={{ paddingTop: 'clamp(88px, 18vh, 200px)' }}
      >

        {/* ── Heading ─────────────────────────────────── */}
        <div className="flex flex-col items-center justify-center relative w-full mb-7">
          <div className="flex flex-col md:flex-row md:flex-nowrap gap-1 md:gap-6 items-center justify-center relative w-full">
            <div className="flex items-center justify-center shrink-0">
              <AnimatedHello />
            </div>

            <div className="relative min-w-0">
              <h1
                aria-label="I'm Aqsa Herry"
                className="font-sans font-bold text-white text-center tracking-[0.2637px] m-0 md:whitespace-nowrap"
                style={{ fontSize: 'clamp(28px, 3.9vw, 52px)', lineHeight: 1.1 }}
              >
                <span>I'm </span>
                <span className="text-[#c4b5fd]">Aqsa Herry</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-[#cbd5e1] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 20px)' }}
        >
          Designer &amp; Web Developer. Building digital experiences
          with passion and precision, focused on creating exceptional user interfaces
          and scalable web applications.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center pb-10 md:pb-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            className="px-8 py-4 bg-[#9810fa] hover:bg-purple-700 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 w-full sm:w-auto min-w-[168px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
            onClick={() => {
              document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1dU4vfP3_8xYT-VEf1ngYv46Wh5ZbLBPa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[168px] text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}