import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-screen w-full bg-background">
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
    </>
  );
}
