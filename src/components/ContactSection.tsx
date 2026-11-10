import { Linkedin, MessageCircle, MapPin, ExternalLink, Github } from 'lucide-react';
import { GradientDecoration } from './GradientDecoration';
import svgPaths from "../imports/svg-8nyjavqfdl";
import imgFrame5 from "figma:asset/d7380f96469e40689a739f087f761349035f78c3.png";

function G() {
  return (
    <div className="absolute inset-y-0 left-0 w-[45%] max-w-[220px] flex items-center justify-start opacity-20 pointer-events-none mix-blend-plus-lighter pl-4 md:pl-6" data-name="g391">
      <svg className="w-full h-[55%] object-contain" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 468.503 483">
        <g id="g391">
          <path d={svgPaths.p1d5db400} fill="var(--fill-0, white)" id="path387" />
          <path d={svgPaths.p31ab5a70} fill="var(--fill-0, white)" id="path388" />
          <path d={svgPaths.p258084c0} fill="var(--fill-0, white)" id="path389" />
          <path d={svgPaths.p1e7bf80} fill="var(--fill-0, white)" id="path390" />
          <path d={svgPaths.p26623500} fill="var(--fill-0, white)" id="path391" />
        </g>
      </svg>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 md:px-16 py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <GradientDecoration />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-purple-500">Together</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Have a project in mind? Feel free to reach out through any of these channels
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12 auto-rows-[minmax(160px,auto)] md:auto-rows-[190px]">

          {/* Map - Large Card */}
          <a
            href="https://maps.google.com/?q=Denpasar,Bali,Indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/15 hover:border-white/25 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Map Image */}
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwbWFwfGVufDF8fHx8MTc2NTE3Mzc5MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Map of Bali"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Pin Badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/80 text-white backdrop-blur-sm">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Bali, Denpasar</p>
                <p className="text-white/80 text-xs">Indonesia</p>
              </div>
            </div>
          </a>

          {/* Instagram - Long Bar */}
          <a
            href="https://www.instagram.com/oranji.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 relative group overflow-hidden rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-[#061100]" />
            
            {/* Blurred background image */}
            <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                alt="Orange blur background" 
                src={imgFrame5} 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-[1.5s] ease-out" 
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-between h-full p-6 md:p-8">
              
              {/* Decorative Logo SVG */}
              <G />

              {/* Right side text */}
              <div className="w-full flex flex-col items-end justify-center text-right">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                  Oranji Studio
                </h3>
                <p className="text-sm md:text-base text-white/90 font-medium tracking-wide mt-1 drop-shadow-md">
                  Creative Design Agency
                </p>

                <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 group-hover:text-white group-hover:bg-white/20 transition-all text-xs font-semibold">
                  <span>Visit Instagram</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6281234419881"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-green-600/20 hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/20 text-green-400 group-hover:bg-green-500/30 group-hover:scale-110 transition-all">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  +62 812 3441 9881
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aqsaprastya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-blue-600/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  Aqsa Herry Prasetya
                </p>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AqsaHerryPrastyo"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-110 transition-all">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  @DrWallace
                </p>
              </div>
            </div>
          </a>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Aqsa Herry Prasetya. All rights reserved.</p>
          <p>Designed and built with care in Bali.</p>
        </footer>
      </div>
    </section>
  );
}