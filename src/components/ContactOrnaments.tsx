export function ContactOrnaments() {
  return (
    <>
      {/* Stars scattered */}
      <svg 
        className="absolute top-16 right-16 opacity-20 pointer-events-none"
        width="50" 
        height="50" 
        viewBox="0 0 50 50"
      >
        <path 
          d="M 25 5 L 28 20 L 43 23 L 28 26 L 25 41 L 22 26 L 7 23 L 22 20 Z" 
          fill="white"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <svg 
        className="absolute bottom-1/3 left-12 opacity-15 pointer-events-none"
        width="40" 
        height="40" 
        viewBox="0 0 40 40"
      >
        <path 
          d="M 20 3 L 22 16 L 35 18 L 22 20 L 20 33 L 18 20 L 5 18 L 18 16 Z" 
          fill="white"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Curved arrows */}
      <svg 
        className="absolute top-1/4 left-1/4 opacity-25 pointer-events-none hidden md:block"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        <path 
          d="M 20 60 Q 40 20, 60 60" 
          stroke="white" 
          strokeWidth="5" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 60 60 L 52 50 M 60 60 L 50 65" 
          stroke="white" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </svg>

      {/* Circle with X */}
      <svg 
        className="absolute top-1/3 right-1/4 opacity-20 pointer-events-none hidden lg:block"
        width="70" 
        height="70" 
        viewBox="0 0 70 70"
      >
        <circle 
          cx="35" 
          cy="35" 
          r="28" 
          stroke="white" 
          strokeWidth="5" 
          fill="none"
        />
        <line x1="20" y1="20" x2="50" y2="50" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="20" x2="20" y2="50" stroke="white" strokeWidth="5" strokeLinecap="round" />
      </svg>

      {/* Squiggly underline */}
      <svg 
        className="absolute bottom-1/4 right-20 opacity-25 pointer-events-none hidden md:block"
        width="120" 
        height="30" 
        viewBox="0 0 120 30"
      >
        <path 
          d="M 0 15 Q 20 5, 40 15 T 80 15 T 120 15" 
          stroke="white" 
          strokeWidth="4" 
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Hearts */}
      <svg 
        className="absolute top-1/2 left-16 opacity-20 pointer-events-none"
        width="50" 
        height="50" 
        viewBox="0 0 50 50"
      >
        <path 
          d="M 25 40 L 10 25 Q 5 20, 5 15 Q 5 5, 15 5 Q 20 5, 25 10 Q 30 5, 35 5 Q 45 5, 45 15 Q 45 20, 40 25 Z" 
          fill="white"
          stroke="white"
          strokeWidth="3"
        />
      </svg>

      {/* Explosion/burst lines */}
      <svg 
        className="absolute top-20 left-1/3 opacity-15 pointer-events-none hidden md:block"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        <line x1="40" y1="40" x2="40" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="70" y2="10" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="75" y2="40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="70" y2="70" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="40" y2="75" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="10" y2="70" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="5" y2="40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="40" x2="10" y2="10" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* Question mark doodle */}
      <svg 
        className="absolute bottom-1/3 left-1/4 opacity-25 pointer-events-none hidden lg:block"
        width="50" 
        height="80" 
        viewBox="0 0 50 80"
      >
        <path 
          d="M 15 20 Q 15 10, 25 10 Q 35 10, 35 20 Q 35 30, 25 35 L 25 50" 
          stroke="white" 
          strokeWidth="5" 
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="25" cy="65" r="5" fill="white" />
      </svg>

      {/* Dashed square */}
      <svg 
        className="absolute top-1/3 left-12 opacity-15 pointer-events-none"
        width="70" 
        height="70" 
        viewBox="0 0 70 70"
      >
        <rect 
          x="10" 
          y="10" 
          width="50" 
          height="50" 
          stroke="white" 
          strokeWidth="4" 
          fill="none"
          strokeDasharray="10 5"
        />
      </svg>

      {/* Smiley face */}
      <svg 
        className="absolute bottom-20 right-1/3 opacity-20 pointer-events-none hidden md:block"
        width="60" 
        height="60" 
        viewBox="0 0 60 60"
      >
        <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="4" fill="none" />
        <circle cx="20" cy="23" r="3" fill="white" />
        <circle cx="40" cy="23" r="3" fill="white" />
        <path d="M 15 35 Q 30 45, 45 35" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>

      {/* Multiple parallel lines */}
      <svg 
        className="absolute bottom-1/2 left-1/3 opacity-15 pointer-events-none hidden lg:block rotate-45"
        width="100" 
        height="40" 
        viewBox="0 0 100 40"
      >
        <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeWidth="3" />
        <line x1="0" y1="20" x2="100" y2="20" stroke="white" strokeWidth="3" />
        <line x1="0" y1="30" x2="100" y2="30" stroke="white" strokeWidth="3" />
      </svg>

      {/* Coffee cup doodle */}
      <svg 
        className="absolute top-2/3 right-16 opacity-25 pointer-events-none hidden md:block"
        width="50" 
        height="60" 
        viewBox="0 0 50 60"
      >
        <rect x="12" y="25" width="26" height="30" rx="3" stroke="white" strokeWidth="4" fill="none" />
        <path d="M 38 35 L 45 35 Q 48 35, 48 40 Q 48 45, 45 45 L 38 45" stroke="white" strokeWidth="4" fill="none" />
        <line x1="18" y1="10" x2="18" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <line x1="25" y1="10" x2="25" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="10" x2="32" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </>
  );
}
