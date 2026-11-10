import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  images: ProjectImage[];
  year: string;
  github?: string;
  instagram?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | ProjectDetail[] | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      // Keep focus inside the dialog while it is open.
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const projects = Array.isArray(project) ? project : [project];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={projects.map((p) => p.title).join(', ')}
        className="relative w-full max-w-5xl max-h-[90dvh] overflow-y-auto overscroll-contain bg-card/95 backdrop-blur-md border border-white/10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky action bar keeps close reachable above the scrolling content */}
        <div className="sticky top-0 z-20 flex justify-end bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/95 to-transparent px-4 pt-4 pb-6">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="w-11 h-11 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content - Multiple Projects */}
        {projects.map((projectItem, projectIndex) => (
          <div key={projectIndex} className="px-4 pb-6 sm:px-6 sm:pb-8 md:px-12 md:pb-12 pt-0">
            {/* Separator between projects */}
            {projectIndex > 0 && (
              <div className="my-8 md:my-12 border-t border-white/10" />
            )}

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  {projectItem.year}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {projectItem.title}
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                {projectItem.subtitle}
              </p>

              {/* External Links */}
              {(projectItem.github || projectItem.instagram) && (
                <div className="flex gap-3 mb-6">
                  {projectItem.github && (
                    <a
                      href={projectItem.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-all hover:scale-105"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                  {projectItem.instagram && (
                    <a
                      href={projectItem.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-all hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      View on Instagram
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-3">About</h3>
              <p className="text-gray-300 leading-relaxed">
                {projectItem.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {projectItem.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Images Gallery */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectItem.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm text-white">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
