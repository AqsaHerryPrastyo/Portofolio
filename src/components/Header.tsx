import { useState, useEffect } from 'react';

export function Header() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Create formatter for WITA (UTC+8) which is 'Asia/Makassar' timezone
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Makassar',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      });
      const formattedTime = formatter.format(new Date());
      setTime(`${formattedTime}, WITA - Indonesia`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 flex justify-between items-start pointer-events-none">
      {/* Left side: Location and Time */}
      <div className="flex flex-col gap-1 pointer-events-auto">
        <p className="text-white/90 text-sm md:text-base font-medium tracking-wide">
          Bali, Denpasar
        </p>
        <p className="text-white/60 text-xs md:text-sm tracking-wide">
          {time || 'Loading time...'}
        </p>
      </div>

      {/* Right side: Navigation Links */}
      <nav className="flex gap-6 pointer-events-auto">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/70 hover:text-white text-sm md:text-base font-medium uppercase tracking-widest transition-colors"
        >
          Home
        </a>
        <a 
          href="#showcase" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/70 hover:text-white text-sm md:text-base font-medium uppercase tracking-widest transition-colors"
        >
          Project
        </a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/70 hover:text-white text-sm md:text-base font-medium uppercase tracking-widest transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}