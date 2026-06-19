import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_50%_-200px,rgba(99,102,241,0.20),transparent)] dark:bg-[radial-gradient(1200px_800px_at_50%_-200px,rgba(139,92,246,0.25),transparent)] dark:bg-gradient-to-b dark:from-slate-950 dark:via-indigo-950/50 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <header className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
        <span className="text-sm font-bold tracking-wide opacity-80 dark:text-indigo-300 dark:opacity-90">
          danitocsc
        </span>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-20 pt-10 flex flex-col gap-10">
        <section className="relative overflow-hidden rounded-3xl border border-black/[.06] dark:border-indigo-500/20 bg-white/70 dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-indigo-950/50 px-8 py-10 shadow-lg dark:shadow-indigo-500/10 backdrop-blur-md">
          <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-indigo-400/30 dark:from-fuchsia-500/40 dark:to-indigo-500/40 blur-2xl"></div>
          <div className="absolute -bottom-16 -right-24 h-56 w-56 rounded-full bg-gradient-to-tr from-sky-400/30 to-emerald-400/30 dark:from-sky-500/40 dark:to-emerald-500/40 blur-2xl"></div>
          
          <div className="relative flex flex-col items-center gap-8 sm:flex-row">
            <div className="relative">
              <div className="relative h-[160px] w-[160px] sm:h-[180px] sm:w-[180px] rounded-full p-[4px] bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-sky-400 dark:from-fuchsia-400 dark:via-indigo-400 dark:to-sky-300 shadow-xl dark:shadow-indigo-500/50">
                <div className="h-full w-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                  <Image
                    src="/profile.png"
                    alt="José Daniel Cruz Ponce"
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 rounded-full bg-emerald-500 px-3 py-1 text-[12px] border border-white dark:border-slate-900 text-white font-bold shadow-md">
                Disponible
              </div>
            </div>
            
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                José Daniel Cruz Ponce
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium mt-1 text-indigo-600 dark:text-indigo-400">
                AI Developer & Data Analyst
              </h2>
              <p className="mt-4 text-neutral-700 dark:text-slate-300 max-w-prose leading-relaxed">
                Transformo datos en conocimiento accionable mediante soluciones digitales, flujos de trabajo inteligentes y automatización con IA. Especialista en Next.js, Astro, LLMs y análisis de datos.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <a
                  href="mailto:josedcp1@gmail.com"
                  className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  josedcp1@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/danielcruztj/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#0077b5] hover:bg-[#005a8c] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/danitocsc"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-indigo-950/50 border border-black/[.06] dark:border-indigo-500/20 rounded-2xl p-8 shadow-md dark:shadow-indigo-500/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-2">⚙️ Habilidades Técnicas</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Herramientas y tecnologías con las que construyo soluciones eficientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-black/[.06] dark:border-indigo-500/20 bg-white/90 dark:bg-slate-800/60 p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
                Desarrollo Web & Backend
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/50 dark:bg-blue-500/20 dark:text-blue-100">TypeScript</span>
                <span className="px-3 py-1.5 rounded-lg border border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-500/50 dark:bg-yellow-500/20 dark:text-yellow-100">Python</span>
                <span className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-500/50 dark:bg-slate-500/20 dark:text-slate-100">Next.js</span>
                <span className="px-3 py-1.5 rounded-lg border border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/50 dark:bg-orange-500/20 dark:text-orange-100">Astro</span>
                <span className="px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-500/50 dark:bg-neutral-500/20 dark:text-neutral-100">Flask</span>
              </div>
            </div>

            <div className="rounded-xl border border-black/[.06] dark:border-indigo-500/20 bg-white/90 dark:bg-slate-800/60 p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
                IA & Automatización
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/20 dark:text-emerald-100">OpenAI API</span>
                <span className="px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/50 dark:bg-purple-500/20 dark:text-purple-100">Claude</span>
                <span className="px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/50 dark:bg-blue-500/20 dark:text-blue-100">Gemini</span>
                <span className="px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/50 dark:bg-rose-500/20 dark:text-rose-100">n8n</span>
                <span className="px-3 py-1.5 rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/50 dark:bg-cyan-500/20 dark:text-cyan-100">Agentes Autónomos</span>
              </div>
            </div>

            <div className="rounded-xl border border-black/[.06] dark:border-indigo-500/20 bg-white/90 dark:bg-slate-800/60 p-5 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
                Datos & Herramientas
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1.5 rounded-lg border border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/50 dark:bg-sky-500/20 dark:text-sky-100">SQL</span>
                <span className="px-3 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/50 dark:bg-indigo-500/20 dark:text-indigo-100">SQLite / PostgreSQL</span>
                <span className="px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/50 dark:bg-amber-500/20 dark:text-amber-100">Power BI</span>
                <span className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 text-red-700 dark:border-red-500/50 dark:bg-red-500/20 dark:text-red-100">Oracle Cloud</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">🔗 Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="group overflow-hidden rounded-2xl border border-black/[.06] dark:border-indigo-500/20 bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-indigo-950/40 shadow-md hover:shadow-lg dark:shadow-indigo-500/10 transition-all hover:scale-[1.01] backdrop-blur-sm flex flex-col">
              <div className="relative h-48 w-full overflow-hidden border-b border-black/[.06] dark:border-indigo-500/20">
                <Image
                  src="/projects/alertabc.png"
                  alt="Sistema de Alerta Temprana - AlertaBC"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    Sistema de Alerta Temprana - AlertaBC
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Aplicación web desarrollada en Python (Flask) que monitoriza en tiempo real las condiciones meteorológicas en Baja California (Tijuana y Ensenada) integrando Open-Meteo API, almacenamiento histórico e interfaces analíticas con Plotly.js.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Python</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Flask</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Plotly.js</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Open-Meteo API</span>
                  </div>
                </div>
                <a
                  href="https://alertabc.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors w-full text-center"
                >
                  Visitar Web
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-black/[.06] dark:border-indigo-500/20 bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-indigo-950/40 shadow-md hover:shadow-lg dark:shadow-indigo-500/10 transition-all hover:scale-[1.01] backdrop-blur-sm flex flex-col">
              <div className="relative h-48 w-full overflow-hidden border-b border-black/[.06] dark:border-indigo-500/20">
                <Image
                  src="/projects/tijuana-cloud.png"
                  alt="Tijuana Cloud"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    Tijuana Cloud
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Plataforma de servicios de TI para pequeñas y medianas empresas en Tijuana. Ofrece hosting web rápido, correo corporativo, CRM Odoo, dashboards interactivos y automatizaciones personalizadas.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Astro</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Tailwind CSS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">IT Services</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Odoo</span>
                  </div>
                </div>
                <a
                  href="https://tijuana.cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-semibold hover:bg-emerald-200 dark:hover:bg-emerald-500/40 transition-colors w-full text-center"
                >
                  Visitar Web
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-black/[.06] dark:border-indigo-500/20 bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-indigo-950/40 shadow-md hover:shadow-lg dark:shadow-indigo-500/10 transition-all hover:scale-[1.01] backdrop-blur-sm flex flex-col">
              <div className="relative h-48 w-full overflow-hidden border-b border-black/[.06] dark:border-indigo-500/20">
                <Image
                  src="/projects/transporte-tijuana.png"
                  alt="Transporte Universitario - Demanda"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    Rutas UNRC TJ - Mapa de Demanda
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Micrositio web interactivo desarrollado para el análisis, consulta y monitoreo en tiempo real de la demanda de transporte estudiantil para la UNRC Unidad Tijuana en su proyecto piloto 2025.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Next.js</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">React</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Tailwind CSS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Maps API</span>
                  </div>
                </div>
                <a
                  href="https://transporte.tijuana.cloud/mapa-demanda"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-4 py-2 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-500/40 transition-colors w-full text-center"
                >
                  Visitar Web
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-black/[.06] dark:border-indigo-500/20 bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-indigo-950/40 shadow-md hover:shadow-lg dark:shadow-indigo-500/10 transition-all hover:scale-[1.01] backdrop-blur-sm flex flex-col">
              <div className="relative h-48 w-full overflow-hidden border-b border-black/[.06] dark:border-indigo-500/20">
                <Image
                  src="/projects/pifi.png"
                  alt="PIFI Industriales"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-sky-600 dark:text-sky-400">
                    PIFI Industriales
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Plataforma moderna y optimizada construida con Astro y Tailwind CSS para una empresa proveedora de soluciones de manufactura (EPP, fixturas, calibración GD&T). Incluye diseño responsivo e integraciones de WhatsApp.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Astro</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Tailwind CSS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">WhatsApp API</span>
                  </div>
                </div>
                <a
                  href="https://pifi-web.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-4 py-2 bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 rounded-lg text-sm font-semibold hover:bg-sky-200 dark:hover:bg-sky-500/40 transition-colors w-full text-center"
                >
                  Visitar Web
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-black/[.06] dark:border-indigo-500/20 bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-indigo-950/40 shadow-md hover:shadow-lg dark:shadow-indigo-500/10 transition-all hover:scale-[1.01] backdrop-blur-sm flex flex-col">
              <div className="relative h-48 w-full overflow-hidden border-b border-black/[.06] dark:border-indigo-500/20">
                <Image
                  src="/projects/estilo-visual.png"
                  alt="Estilo Visual"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400">
                    Estilo Visual
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Landing page altamente interactiva para un taller de diseño e impresión. Cuenta con un portafolio de proyectos con filtros dinámicos, animaciones geométricas e interfaz construida enteramente con Vainilla JS y CSS moderno.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">HTML5</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Vanilla CSS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">JavaScript</span>
                  </div>
                </div>
                <a
                  href="https://estilo-visual.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 rounded-lg text-sm font-semibold hover:bg-fuchsia-200 dark:hover:bg-fuchsia-500/40 transition-colors w-full text-center"
                >
                  Visitar Web
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="text-sm text-neutral-600 dark:text-slate-400 bg-white/80 dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-indigo-950/50 border border-black/[.06] dark:border-indigo-500/20 rounded-xl p-6 shadow-sm dark:shadow-indigo-500/10 text-center">
          <p className="italic">
            "Mi objetivo es construir herramientas y productos que optimicen los procesos reales de las empresas usando la flexibilidad del desarrollo web moderno y la eficiencia de la inteligencia artificial."
          </p>
        </section>
      </main>
    </div>
  );
}
