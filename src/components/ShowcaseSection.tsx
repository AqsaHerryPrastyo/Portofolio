import { ProjectModal } from './ProjectModal';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import mobileImg1 from 'figma:asset/e342842268c375685821a817a64714638068c540.png';
import mobileImg2 from 'figma:asset/9e460e619b86f004e3da8ddce1f5adcc5e2b85c1.png';
import mobileImg3 from 'figma:asset/bf2bfc5bdef3cd4126ed7f41ee77e167aae3a0e1.png';

// UI/UX - ObarKuy images
import uiuxImg1 from "figma:asset/2799799de0a1ea0ac1667f815684c56324e80f7e.png";
import uiuxImg2 from "figma:asset/e7dbd080df8d0d6d41f6bdeea51444c42d62a74c.png";
import uiuxImg3 from "figma:asset/f4efd32859bff778f81b8521efd1924deb23096a.png";
import uiuxImg4 from "figma:asset/f2e25abac928d43b3d0ceecfd8e35bc428eda980.png";
import uiuxImg5 from "figma:asset/fb1ce10721b187524634014c434ac289fd544dde.png";
import uiuxImg6 from "figma:asset/add155b114871f67d7b587c23470c0932ba693a8.png";

// UI/UX - PBL Repository images
import pblImg1 from "figma:asset/a37a908163610f03913dc1972cb34bd72193e8aa.png";
import pblImg2 from "figma:asset/301acb576dc5fec3e197a222a39f2ae5eb6287a6.png";
import pblImg3 from "figma:asset/d30859ef394b13d680586542cb6db0760c552c08.png";

// Laravel - SiLapor images
import laravelImg1 from "figma:asset/332203c62b8a8e27e814045988cc989cd7609aeb.png";
import laravelImg2 from "figma:asset/cb9edf8ecc1c5e0e0eb96466eaedba68b155a523.png";
import laravelImg3 from "figma:asset/04c54fcf51605b441f1716d111b6dc962024dfdf.png";

// Graphic Design - Oranji Studio images
import graphicImg1 from "figma:asset/c65dccf847946629cb225845ed2d81db78468da1.png";
import graphicImg2 from "figma:asset/f5cc1a1784fa7de90d911d4accbaba9861cf3d8f.png";
import graphicImg3 from "figma:asset/c385d3ae391fcad7800b669184f863e65a3d9131.png";

interface ProjectCategory {
  id: string;
  title: string;
  label: string;
  image: string;
  gradient: string;
}

interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  images: { src: string; alt: string }[];
  year: string;
  github?: string;
  instagram?: string;
}

export function ShowcaseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | ProjectDetail[] | null>(null);
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  // Project details data
  const projectDetails: Record<string, ProjectDetail | ProjectDetail[]> = {
    flutter: {
      title: 'JAWARA',
      subtitle: 'Jaga Warga Pintar - Community Management App',
      description: 'Aplikasi mobile Flutter untuk manajemen warga dan RT/RW. Fitur lengkap mulai dari manajemen data warga, iuran bulanan, marketplace komunitas, hingga pengumuman real-time. Dilengkapi dengan OCR untuk scan bukti transfer otomatis dan dashboard analytics untuk administrator.',
      tech: ['DART', 'FLUTTER', 'C++', 'CMAKE', 'SWIFT', 'GOLANG', 'REST API'],
      images: [
        { src: mobileImg1, alt: 'JAWARA Login Screen' },
        { src: mobileImg2, alt: 'JAWARA Dashboard Admin' },
        { src: mobileImg3, alt: 'JAWARA Keuangan Management' }
      ],
      year: '2025'
    },
    uiux: [
      {
        title: 'NOBARKUY',
        subtitle: 'Social Movie Streaming & Watch Party Platform',
        description: 'Platform streaming film interaktif dengan fitur nonton bareng (Nobar). User dapat membuat watch party groups, streaming film bersama teman, dan berinteraksi secara real-time. Dilengkapi dengan personalized recommendations, news film terbaru, continue watching, dan berbagai genre seperti drama, action, dan lainnya. UI/UX dirancang dengan focus pada social engagement dan ease of use.',
        tech: ['FIGMA', 'UI DESIGN', 'UX RESEARCH', 'PROTOTYPING', 'USER FLOW', 'WIREFRAMING', 'DESIGN SYSTEM', 'MOBILE FIRST'],
        images: [
          { src: uiuxImg1, alt: 'NobarKuy Startup Screen' },
          { src: uiuxImg2, alt: 'NobarKuy Home - Movie Catalog' },
          { src: uiuxImg3, alt: 'NobarKuy Nobar - Watch Party Groups' },
          { src: uiuxImg4, alt: 'NobarKuy Edit Profile' },
          { src: uiuxImg5, alt: 'NobarKuy Search & Genre' },
          { src: uiuxImg6, alt: 'NobarKuy Movie Detail' }
        ],
        year: '2024'
      },
      {
        title: 'PBL REPOSITORY',
        subtitle: 'Project-Based Learning Repository',
        description: 'Platform repositori digital untuk Project-Based Learning (PBL) kampus yang memungkinkan orang luar melihat showcase project apa saja yang dikerjakan di kampus. Menampilkan dashboard analytics dengan total 157 projects, running projects, involved students dan lecturers. Dilengkapi dengan sistem tracking progress, status management (Complete, In Progress, Pending), dan search/filter functionality. Memudahkan visitor untuk eksplorasi berbagai project mahasiswa dari berbagai semester.',
        tech: ['FIGMA', 'UI DESIGN', 'UX RESEARCH', 'DASHBOARD DESIGN', 'DATA VISUALIZATION', 'USER INTERFACE', 'WEB DESIGN'],
        images: [
          { src: pblImg1, alt: 'PBL Repository Login' },
          { src: pblImg2, alt: 'PBL Repository Dashboard' },
          { src: pblImg3, alt: 'PBL Repository Projects List' }
        ],
        year: '2024'
      }
    ],
    laravel: {
      title: 'SILAPOR',
      subtitle: 'Sistem Manajemen Pelaporan & Perbaikan Fasilitas Kampus',
      description: 'Aplikasi web Laravel untuk sistem manajemen pelaporan dan perbaikan fasilitas kampus. Platform ini memungkinkan mahasiswa dan staff melaporkan kerusakan fasilitas secara online, dengan fitur tracking progress perbaikan real-time. Dashboard admin menampilkan analytics lengkap (Total Pengguna: 5, Total Fasilitas: 3, Total Gedung: 1, Total Ruangan: 14). Dilengkapi dengan manajemen pengguna berbasis role (Admin, Mahasiswa, Dosen, Sarpras, Teknisi), manajemen periode, ruang, tipe fasilitas, unit fasilitas, dan gedung. Open source di GitHub dengan dokumentasi lengkap.',
      tech: ['PHP', 'LARAVEL', 'MYSQL', 'BLADE', 'BOOTSTRAP', 'JAVASCRIPT', 'REST API', 'AUTHENTICATION'],
      images: [
        { src: laravelImg1, alt: 'SiLapor Login Screen' },
        { src: laravelImg2, alt: 'SiLapor Dashboard Admin' },
        { src: laravelImg3, alt: 'SiLapor Manajemen Pengguna' }
      ],
      year: '2025',
      github: 'https://github.com/User-425/SiLapor'
    },
    graphics: {
      title: 'ORANJI STUDIO',
      subtitle: 'Graphic Design & Branding Portfolio',
      description: 'Koleksi karya desain grafis dan branding dari Oranji Studio. Mencakup berbagai proyek seperti branding "Ngangsu Kaweruh" dengan logo monogram yang elegant, merchandise design (cap, stationery, business card), sticker collection dengan playful orange theme, dan berbagai kampanye visual seperti "Speak Without Limits", subscription discount cards, dan showcase portfolio. Setiap desain dibuat dengan perhatian detail tinggi, menggunakan typography yang kuat, dan color palette yang konsisten untuk menciptakan identitas visual yang memorable.',
      tech: ['ADOBE PHOTOSHOP', 'ADOBE ILLUSTRATOR', 'ADOBE INDESIGN', 'FIGMA', 'BRANDING', 'TYPOGRAPHY', 'VISUAL IDENTITY', 'PRINT DESIGN'],
      images: [
        { src: graphicImg1, alt: 'Ngangsu Kaweruh - Brand Identity & Merchandise' },
        { src: graphicImg2, alt: 'Oranji Studio - Sticker Collection & Branding' },
        { src: graphicImg3, alt: 'All Masterpiece in One Place - Portfolio Showcase' }
      ],
      year: '2024',
      instagram: 'https://www.instagram.com/oranji.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (projectDetails[categoryId]) {
      setSelectedProject(projectDetails[categoryId]);
      setIsModalOpen(true);
    }
  };

  const categories: (ProjectCategory & { className: string })[] = [
    {
      id: 'uiux',
      title: 'UI/UX Design',
      label: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWdufGVufDF8fHx8MTc2NTE3Mzc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-600/20 to-pink-600/20',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'flutter',
      title: 'Mobile Apps',
      label: 'Flutter & Android',
      image: 'https://images.unsplash.com/photo-1763301349994-bf4e6799da10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHV0dGVyJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2NTE3Mzc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-600/20 to-cyan-600/20',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'laravel',
      title: 'Web Development',
      label: 'Laravel & PHP',
      image: 'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJhdmVsJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY1MTczNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-600/20 to-blue-600/20',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'graphics',
      title: 'Graphic Design',
      label: 'Branding & Visual Identity',
      image: 'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNjUxMzQxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-pink-600/20 to-purple-600/20',
      className: 'md:col-span-1 md:row-span-1'
    }
  ];

  const allProjectsList = [
    {
      id: 'nobarkuy',
      title: 'NOBARKUY',
      label: 'UI/UX DESIGN',
      year: '2024',
      image: uiuxImg1,
      projectData: (projectDetails.uiux as ProjectDetail[])[0]
    },
    {
      id: 'pbl',
      title: 'PBL REPOSITORY',
      label: 'UI/UX DESIGN',
      year: '2024',
      image: pblImg1,
      projectData: (projectDetails.uiux as ProjectDetail[])[1]
    },
    {
      id: 'jawara',
      title: 'JAWARA',
      label: 'MOBILE APPS',
      year: '2025',
      image: mobileImg1,
      projectData: projectDetails.flutter as ProjectDetail
    },
    {
      id: 'silapor',
      title: 'SILAPOR',
      label: 'WEB DEVELOPMENT',
      year: '2025',
      image: laravelImg1,
      projectData: projectDetails.laravel as ProjectDetail
    },
    {
      id: 'oranji',
      title: 'ORANJI STUDIO',
      label: 'GRAPHIC DESIGN',
      year: '2024',
      image: graphicImg1,
      projectData: projectDetails.graphics as ProjectDetail
    }
  ];

  return (
    <section id="showcase" className="relative px-6 md:px-16 py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {!isViewAllOpen ? (
        <>
          {/* Section Header */}
          <div className="relative z-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-2 font-sans tracking-tight">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-xl">
                A selection of my recent work across web, mobile, and design.
              </p>
            </div>
            <button 
              onClick={() => setIsViewAllOpen(true)}
              className="px-6 py-3 rounded-full border border-white/10 text-white/90 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"
            >
              View All
            </button>
          </div>

          {/* Clean 2-Column Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-[#141414] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 flex flex-col border border-white/[0.02]"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={category.image}
                    alt={`${category.title}`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="flex justify-between items-center p-8 bg-[#141414]">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500 text-xs font-semibold tracking-[0.2em] uppercase">
                      {category.label}
                    </p>
                    <h3 className="text-white text-2xl font-medium tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Tag / Icon */}
                  <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/5 transition-all duration-300">
                    <span className="text-sm font-medium">2024</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Header: All Projects */}
          <div className="relative z-10 mb-12 max-w-7xl mx-auto flex flex-col gap-8">
            <button 
              onClick={() => setIsViewAllOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors self-start w-fit px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] cursor-pointer group"
            >
              <ArrowUpRight size={18} className="rotate-[-135deg] group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
              <span className="text-sm font-medium tracking-wide">Back</span>
            </button>
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-2 font-sans tracking-tight">
                All Projects
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-xl">
                A complete archive of my work across various disciplines.
              </p>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {allProjectsList.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-[#141414] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 flex flex-col border border-white/[0.02]"
                onClick={() => {
                  setSelectedProject(project.projectData);
                  setIsModalOpen(true);
                }}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={project.image}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="flex justify-between items-center p-8 bg-[#141414]">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500 text-xs font-semibold tracking-[0.2em] uppercase">
                      {project.label}
                    </p>
                    <h3 className="text-white text-2xl font-medium tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tag / Icon */}
                  <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/5 transition-all duration-300">
                    <span className="text-sm font-medium">{project.year}</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  );
}