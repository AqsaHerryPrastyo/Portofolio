import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'showcase', label: 'Project' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [time, setTime] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Makassar',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 30_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-5 sm:py-4 md:px-10 md:py-6 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Left side: location and time */}
        <div className="flex flex-col gap-0.5 shrink-0">
          <p className="text-white/90 text-[11px] sm:text-sm md:text-base font-medium tracking-wide whitespace-nowrap">
            Bali, Denpasar
          </p>
          <p className="text-white/60 text-[11px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap tabular-nums">
            {time ? `${time} WITA` : '\u00a0'}
          </p>
        </div>

        {/* Right side: navigation. Horizontal scroll below md so links never
            collide with the location block or overflow the viewport. */}
        <nav
          aria-label="Main"
          className="flex flex-nowrap justify-end gap-x-2 sm:gap-x-6 shrink-0"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(link.id);
              }}
              className="text-white/70 hover:text-white text-[9.5px] min-[360px]:text-[10px] sm:text-sm md:text-base font-medium uppercase tracking-wide md:tracking-widest transition-colors py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
