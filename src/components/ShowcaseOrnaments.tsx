export function ShowcaseOrnaments() {
  return (
    <>
      {/* Scattered geometric shapes */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-20 pointer-events-none rotate-45" 
        style={{ backgroundColor: 'var(--brutal-orange)' }} 
      />

      {/* Dashed circle */}
      <svg 
        className="absolute top-1/4 left-8 opacity-25 pointer-events-none"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        <circle 
          cx="40" 
          cy="40" 
          r="30" 
          stroke="var(--brutal-blue)" 
          strokeWidth="5" 
          fill="none"
          strokeDasharray="12 8"
        />
        <circle cx="40" cy="40" r="8" fill="var(--brutal-blue)" />
      </svg>

      {/* Lightning bolt */}
      <svg 
        className="absolute top-1/3 right-12 opacity-30 pointer-events-none hidden md:block"
        width="50" 
        height="90" 
        viewBox="0 0 50 90"
      >
        <path 
          d="M 25 5 L 15 35 L 30 35 L 20 85 L 40 40 L 25 40 Z" 
          fill="var(--brutal-orange)"
          stroke="black"
          strokeWidth="3"
        />
      </svg>

      {/* Scribble lines */}
      <svg 
        className="absolute bottom-1/4 left-1/4 opacity-20 pointer-events-none hidden lg:block"
        width="100" 
        height="80" 
        viewBox="0 0 100 80"
      >
        <path 
          d="M 10 40 L 30 20 L 50 50 L 70 15 L 90 45" 
          stroke="black" 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Small dots pattern */}
      <div className="absolute top-1/2 right-1/4 opacity-25 pointer-events-none hidden md:block">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brutal-blue)' }} />
            <div className="w-3 h-3 rounded-full bg-black" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brutal-orange)' }} />
          </div>
          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-black" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brutal-orange)' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brutal-blue)' }} />
          </div>
        </div>
      </div>

      {/* Diagonal lines */}
      <svg 
        className="absolute bottom-1/3 right-16 opacity-15 pointer-events-none hidden md:block"
        width="120" 
        height="120" 
        viewBox="0 0 120 120"
      >
        <line x1="0" y1="0" x2="120" y2="120" stroke="black" strokeWidth="4" />
        <line x1="20" y1="0" x2="120" y2="100" stroke="black" strokeWidth="4" />
        <line x1="0" y1="20" x2="100" y2="120" stroke="black" strokeWidth="4" />
      </svg>

      {/* Speech bubble doodle */}
      <svg 
        className="absolute top-1/2 left-12 opacity-25 pointer-events-none"
        width="90" 
        height="70" 
        viewBox="0 0 90 70"
      >
        <rect 
          x="10" 
          y="10" 
          width="70" 
          height="45" 
          rx="8"
          stroke="var(--brutal-blue)" 
          strokeWidth="5" 
          fill="none"
        />
        <path 
          d="M 30 55 L 20 65 L 35 55" 
          stroke="var(--brutal-blue)" 
          strokeWidth="5" 
          fill="none"
          strokeLinejoin="round"
        />
      </svg>

      {/* Hash/Grid symbol */}
      <svg 
        className="absolute bottom-20 left-1/3 opacity-20 pointer-events-none hidden lg:block"
        width="60" 
        height="60" 
        viewBox="0 0 60 60"
      >
        <line x1="20" y1="0" x2="15" y2="60" stroke="var(--brutal-orange)" strokeWidth="6" strokeLinecap="round" />
        <line x1="40" y1="0" x2="35" y2="60" stroke="var(--brutal-orange)" strokeWidth="6" strokeLinecap="round" />
        <line x1="0" y1="20" x2="60" y2="25" stroke="var(--brutal-orange)" strokeWidth="6" strokeLinecap="round" />
        <line x1="0" y1="40" x2="60" y2="45" stroke="var(--brutal-orange)" strokeWidth="6" strokeLinecap="round" />
      </svg>

      {/* Eye doodle */}
      <svg 
        className="absolute top-12 left-1/2 opacity-30 pointer-events-none hidden md:block"
        width="70" 
        height="40" 
        viewBox="0 0 70 40"
      >
        <ellipse 
          cx="35" 
          cy="20" 
          rx="30" 
          ry="18" 
          stroke="black" 
          strokeWidth="4" 
          fill="none"
        />
        <circle cx="35" cy="20" r="8" fill="black" />
        <circle cx="35" cy="20" r="4" fill="white" />
      </svg>

      {/* Abstract blob */}
      <svg 
        className="absolute bottom-1/4 right-1/3 opacity-15 pointer-events-none hidden lg:block"
        width="100" 
        height="100" 
        viewBox="0 0 100 100"
      >
        <path 
          d="M 50 10 Q 80 20, 85 50 Q 80 80, 50 90 Q 20 80, 15 50 Q 20 20, 50 10" 
          fill="var(--brutal-blue)"
        />
      </svg>
    </>
  );
}
