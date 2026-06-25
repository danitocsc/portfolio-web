"use client";

import React from "react";
import Image from "next/image";

// Strict interface for Project data based on Figma requirements
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  tagline: string;
  likes: string;
  comments: string;
  date: string;
  rotation: string; // Tilted angle for the scrapbook feed feel
}

// Data mapped with portfolio assets and individual post details
// Data mapped with portfolio assets and individual post details
const projectsData: Project[] = [
  {
    id: "transporte-tijuana",
    title: "Rutas UNRC TJ: Mapa de Demanda",
    description: "Micrositio web interactivo desarrollado para el análisis, consulta y monitoreo en tiempo real de la demanda de transporte estudiantil para la UNRC Unidad Tijuana en su proyecto piloto 2025.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Python", "matplotlib", "MapLibre GL JS", "Vercel"],
    imageUrl: "/projects/transporte-tijuana.png",
    projectUrl: "https://transporte.tijuana.cloud/informe",
    tagline: "ROUTES & MAPS",
    likes: "1,821",
    comments: "54",
    date: "10 DE JUNIO",
    rotation: "rotate-[0.5deg]"
  },
  {
    id: "tijuana-cloud",
    title: "Tijuana Cloud: Soluciones TI",
    description: "Plataforma de servicios de TI para pequeñas y medianas empresas en Tijuana. Ofrece hosting web rápido, correo corporativo, CRM Odoo, dashboards interactivos y automatizaciones personalizadas.",
    technologies: ["Astro", "Tailwind CSS", "IT Services"],
    imageUrl: "/projects/tijuana-cloud.png",
    projectUrl: "https://tijuana.cloud/",
    tagline: "TI & CLOUD SERVICES",
    likes: "2,891",
    comments: "86",
    date: "15 DE MAYO",
    rotation: "rotate-[1deg]"
  },
  {
    id: "pifi",
    title: "PIFI Industriales: Manufactura",
    description: "Plataforma moderna y optimizada construida con Astro y Tailwind CSS para una empresa proveedora de soluciones de manufactura (EPP, fixturas, calibración GD&T). Incluye diseño responsivo e integraciones de WhatsApp.",
    technologies: ["Astro", "Tailwind CSS"],
    imageUrl: "/projects/pifi.png",
    projectUrl: "https://pifi-web.vercel.app/",
    tagline: "MANUFACTURING",
    likes: "2,042",
    comments: "63",
    date: "28 DE MAYO",
    rotation: "rotate-[-0.5deg]"
  },
  {
    id: "estilo-visual",
    title: "Estilo Visual: Landing Taller",
    description: "Landing page altamente interactiva para un taller de diseño e impresión. Cuenta con un portafolio de proyectos con filtros dinámicos, animaciones geométricas e interfaz construida enteramente con Vainilla JS y CSS moderno.",
    technologies: ["HTML5", "Vanilla CSS", "JavaScript"],
    imageUrl: "/projects/estilo-visual.png",
    projectUrl: "https://estilo-visual.vercel.app/",
    tagline: "DESIGN & PRINT SHOP",
    likes: "3,102",
    comments: "115",
    date: "04 DE ABRIL",
    rotation: "rotate-[-1.5deg]"
  },
  {
    id: "alertabc",
    title: "AlertaBC: Clima Real-Time",
    description: "Aplicación web que monitoriza en tiempo real condiciones meteorológicas en Baja California (Tijuana y Ensenada) integrando Open-Meteo API, almacenamiento histórico e interfaces analíticas con Plotly.js.",
    technologies: ["Python", "Flask", "Plotly.js", "Open-Meteo API"],
    imageUrl: "/projects/alertabc.png",
    projectUrl: "https://alertabc.vercel.app/",
    tagline: "WEATHER MONITOR",
    likes: "1,240",
    comments: "42",
    date: "23 DE JUNIO",
    rotation: "rotate-[-1deg]"
  }
];

export default function ProjectsCollage() {
  return (
    <section className="relative w-full py-16 px-4 z-10 select-text">
      {/* The Instagram Posts list in 3 columns on desktop */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {projectsData.map((project) => (
          <a 
            key={project.id}
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black border-4 border-black rounded-[35px] shadow-[12px_12px_0px_#000] overflow-hidden flex flex-col min-h-[550px] w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#000] cursor-pointer hover:no-underline"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between border-b-4 border-black px-5 py-3 bg-slate-950 text-white flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-slate-800 flex-shrink-0">
                  <Image
                    src="/profile.png"
                    alt="Avatar"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="font-sans text-left min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[18px] text-white tracking-tight leading-none truncate">@danielcruztj</span>
                    <svg className="w-4 h-4 text-blue-500 fill-current flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mt-0.5 truncate">Tijuana, BC, México.</span>
                </div>
              </div>
              
              {/* Sticker / Pill */}
              <div className="bg-yellow-400 text-black font-black uppercase text-[10px] px-2 py-0.5 border-2 border-black rotate-[-2deg] flex-shrink-0">
                {project.tagline}
              </div>
            </div>

            {/* Post Image Container (16:9 aspect ratio inside the card to leave more space for text) */}
            <div className="relative aspect-[16/9] w-full border-b-4 border-black bg-slate-950 overflow-hidden flex-shrink-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 600px"
                priority={project.id === "alertabc"}
              />
            </div>

            {/* Action Bar (Icons) */}
            <div className="flex items-center justify-between px-5 py-2 bg-neutral-100 border-b border-black/10 flex-shrink-0">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-sm font-black text-neutral-800">
                  <svg className="w-4.5 h-4.5 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{project.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-black text-neutral-800">
                  <svg className="w-4.5 h-4.5 text-black fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>{project.comments}</span>
                </div>
              </div>
              <svg className="w-4.5 h-4.5 text-black fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            {/* Bottom Content Area: Caption, Tech and Date */}
            <div className="flex-1 flex flex-col justify-between p-5 text-left">
              <div className="flex flex-col gap-4 flex-1">
                <div className="text-sm leading-relaxed text-neutral-800">
                  <span className="font-black text-black mr-1.5">@danielcruztj</span>
                  <span className="font-black text-blue-700 mr-2">{project.title}</span>
                  <span className="font-medium text-neutral-700">{project.description}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs font-mono font-black text-neutral-400 mr-0.5">TECH:</span>
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-extrabold border-2 border-black bg-yellow-100 text-black shadow-[2px_2px_0px_#000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
