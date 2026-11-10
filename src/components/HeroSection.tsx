import './HeroSection.css';
import bgImg from '../assets/hero/bg.jpg';
import smileyImg from '../assets/hero/smiley.png';
import cursorImg from '../assets/hero/cursor.png';
import folderLargeImg from '../assets/hero/folder-lg.png';
import folderSmallAImg from '../assets/hero/folder-sm.png';
import folderSmallBImg from '../assets/hero/folder-sm-b.png';
import finderImg from '../assets/hero/finder.png';
import launchpadImg from '../assets/hero/launchpad.png';
import figmaImg from '../assets/hero/figma.png';
import illustratorImg from '../assets/hero/illustrator.png';
import photoshopImg from '../assets/hero/photoshop.png';
import githubImg from '../assets/hero/github.png';

const DOCK_ICONS = [
  { src: finderImg, label: 'Finder' },
  { src: launchpadImg, label: 'Launchpad' },
  { src: figmaImg, label: 'Figma' },
  { src: illustratorImg, label: 'Adobe Illustrator' },
  { src: photoshopImg, label: 'Adobe Photoshop' },
];

function SelectionHandles() {
  return (
    <div className="hero__selection" aria-hidden="true">
      <span className="hero__handle hero__handle--tl" />
      <span className="hero__handle hero__handle--tr" />
      <span className="hero__handle hero__handle--bl" />
      <span className="hero__handle hero__handle--br" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <img src={bgImg} alt="" aria-hidden="true" className="hero__bg" decoding="async" />
      <div className="hero__vignette" aria-hidden="true" />

      <img src={folderLargeImg} alt="" aria-hidden="true" className="hero__folder hero__folder--lg" decoding="async" />
      <img
        src={folderSmallAImg}
        alt=""
        aria-hidden="true"
        className="hero__folder hero__folder--sm-a"
        decoding="async"
      />
      <img
        src={folderSmallBImg}
        alt=""
        aria-hidden="true"
        className="hero__folder hero__folder--sm-b"
        decoding="async"
      />

      <div className="hero__center">
        <h1 className="hero__title" aria-label="Portfolio by Herry">
          <span aria-hidden="true">PORTFOLI</span>
          <span className="hero__smiley" aria-hidden="true">
            <img src={smileyImg} alt="" decoding="async" />
            <SelectionHandles />
            <img src={cursorImg} alt="" className="hero__cursor" decoding="async" />
          </span>
        </h1>
        <p className="hero__byline">
          <span className="hero__byline-by">by</span>
          <span>Herry</span>
        </p>
      </div>

      <nav className="hero__dock" aria-label="Toolbox">
        {DOCK_ICONS.map((icon) => (
          <span key={icon.label}>
            <img src={icon.src} alt={icon.label} />
          </span>
        ))}
        <a href="https://github.com/AqsaHerryPrastyo" target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="GitHub profile" />
        </a>
      </nav>
    </section>
  );
}
