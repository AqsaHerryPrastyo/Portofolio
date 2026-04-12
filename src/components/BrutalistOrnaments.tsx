export function BrutalistOrnaments() {
  return (
    <>
      {/* Doodle circles and shapes scattered */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-6 border-black opacity-30 pointer-events-none" 
        style={{ backgroundColor: 'var(--brutal-orange)' }} 
      />
      
      {/* Squiggly line doodle */}
      <svg 
        className="absolute top-32 right-16 opacity-40 pointer-events-none hidden md:block"
        width="120" 
        height="120" 
        viewBox="0 0 120 120"
      >
        <path 
          d="M 10 60 Q 30 20, 60 60 T 110 60" 
          stroke="var(--brutal-blue)" 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="10" cy="60" r="8" fill="var(--brutal-blue)" />
        <circle cx="110" cy="60" r="8" fill="var(--brutal-blue)" />
      </svg>

      {/* Triangle doodle */}
      <svg 
        className="absolute bottom-20 left-20 opacity-30 pointer-events-none"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        <polygon 
          points="40,10 70,70 10,70" 
          stroke="var(--brutal-orange)" 
          strokeWidth="6" 
          fill="none"
        />
      </svg>

      {/* Star doodle */}
      <svg 
        className="absolute top-1/3 right-8 opacity-25 pointer-events-none hidden md:block"
        width="60" 
        height="60" 
        viewBox="0 0 60 60"
      >
        <path 
          d="M 30 5 L 35 25 L 55 30 L 35 35 L 30 55 L 25 35 L 5 30 L 25 25 Z" 
          stroke="black" 
          strokeWidth="4" 
          fill="var(--brutal-blue)"
        />
      </svg>

      {/* Cross/Plus doodle */}
      <div className="absolute bottom-1/4 right-1/4 opacity-20 pointer-events-none hidden lg:block">
        <div className="relative w-16 h-16">
          <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2" style={{ backgroundColor: 'var(--brutal-orange)' }} />
          <div className="absolute left-1/2 top-0 w-2 h-full -translate-x-1/2" style={{ backgroundColor: 'var(--brutal-orange)' }} />
        </div>
      </div>

      {/* Arrow doodle */}
      <svg 
        className="absolute top-2/3 left-12 opacity-35 pointer-events-none rotate-45"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        <path 
          d="M 20 40 L 60 40 M 60 40 L 45 25 M 60 40 L 45 55" 
          stroke="black" 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Zigzag line */}
      <svg 
        className="absolute bottom-40 right-12 opacity-30 pointer-events-none hidden md:block"
        width="100" 
        height="60" 
        viewBox="0 0 100 60"
      >
        <path 
          d="M 0 30 L 20 10 L 40 30 L 60 10 L 80 30 L 100 10" 
          stroke="var(--brutal-blue)" 
          strokeWidth="5" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Dotted circle */}
      <svg 
        className="absolute top-1/2 left-1/3 opacity-20 pointer-events-none hidden lg:block"
        width="100" 
        height="100" 
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          stroke="var(--brutal-orange)" 
          strokeWidth="4" 
          fill="none"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Small squares scattered */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-4 border-black opacity-25 rotate-12 pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/3 left-1/2 w-6 h-6 opacity-30 pointer-events-none" 
        style={{ backgroundColor: 'var(--brutal-blue)' }} 
      />
      
      {/* Spiral doodle */}
      <svg 
        className="absolute top-1/4 right-1/3 opacity-25 pointer-events-none hidden lg:block"
        width="70" 
        height="70" 
        viewBox="0 0 70 70"
      >
        <path 
          d="M 35 35 Q 35 25, 45 25 Q 55 25, 55 35 Q 55 50, 40 50 Q 20 50, 20 30 Q 20 10, 40 10" 
          stroke="black" 
          strokeWidth="4" 
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Hand-drawn rectangle */}
      <svg 
        className="absolute bottom-1/2 right-20 opacity-20 pointer-events-none hidden md:block -rotate-12"
        width="90" 
        height="60" 
        viewBox="0 0 90 60"
      >
        <path 
          d="M 10 10 L 80 12 L 78 50 L 12 48 Z" 
          stroke="var(--brutal-orange)" 
          strokeWidth="5" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Exclamation mark doodle */}
      <svg 
        className="absolute top-1/3 left-12 opacity-30 pointer-events-none"
        width="30" 
        height="80" 
        viewBox="0 0 30 80"
      >
        <rect x="10" y="5" width="10" height="50" fill="black" />
        <circle cx="15" cy="70" r="8" fill="black" />
      </svg>

      {/* Wavy line at bottom */}
      <svg 
        className="absolute bottom-10 left-1/4 opacity-20 pointer-events-none hidden lg:block"
        width="150" 
        height="40" 
        viewBox="0 0 150 40"
      >
        <path 
          d="M 0 20 Q 25 5, 50 20 T 100 20 T 150 20" 
          stroke="var(--brutal-blue)" 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Grid pattern small */}
      <div className="absolute top-1/2 right-1/4 opacity-15 pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="black" strokeWidth="2"/>
          </pattern>
          <rect width="60" height="60" fill="url(#grid)" />
        </svg>
      </div>
    </>
  );
}
