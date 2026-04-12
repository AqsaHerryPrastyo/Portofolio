import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <>
      <Header />
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        theme="dark"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff'
          }
        }}
      />
      <main className="min-h-screen w-full bg-background">
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
    </>
  );
}