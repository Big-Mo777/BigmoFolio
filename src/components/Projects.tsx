import { useEffect, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import shotEcommerce from './images/Capture d’écran_17-12-2025_113731_project-ecommerce-rho-jet.vercel.app.jpeg';
import shotReflex from './images/Capture d’écran_17-12-2025_11380_reflex-click-challenge-mvp.vercel.app.jpeg';
import shotIlluxtra from './images/Capture d’écran_17-12-2025_113832_illuxtra.soarstartup.com.jpeg';
import shotTyping from './images/Capture d’écran_17-12-2025_113858_typing-as-bigmo-dly2.vercel.app.jpeg';
import shotFadulTask from './images/Capture d’écran_17-12-2025_113928_fadul-task.vercel.app.jpeg';

export default function Projects() {
  const projects = [
    {
      title: 'Application de messagerie instantanée',
      description: 'Messagerie temps réel avec authentification, WebSocket, API REST et blocage de contacts.',
      stack: ['Node.js', 'Go (Gin)', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Application e-commerce',
      description: 'Plateforme avec gestion de produits, panier et commandes. Structuration propre de l’API.',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://project-ecommerce-rho-jet.vercel.app/',
      githubUrl: 'https://github.com/Big-Mo777/project_ecommerce',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Reflex Click Challenge',
      description: 'Jeu web interactif basé sur la rapidité. Gère l’état, les scores et les animations UI.',
      stack: ['React', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://reflex-click-challenge-mvp.vercel.app/',
      githubUrl: 'https://github.com/Big-Mo777/Reflex_Click_Challenge_MVP',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Portfolio personnel',
      description: 'Mon portfolio en ligne, optimisé pour performance, design et conversion.',
      stack: ['React / Next.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Typing as Bigmo',
      description: 'Site de test de frappe avec fonctionnalités avancées de suivi de performance et de comparaison avec d\'autres utilisateurs.',
      stack: ['React', 'Tailwind CSS'],
      liveUrl: 'https://typing-as-bigmo-dly2.vercel.app/',
      githubUrl: 'https://github.com/Big-Mo777/typing-as-bigmo',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      title: 'Banque d\'Images',
      description: 'Plateforme de stockage et partage d\'images avec authentification, galerie d\'images, et fonctionnalités de recherche avancée.',
      stack: ['React', 'laravel', 'MySQL', 'JWT'],
      liveUrl: "https://illuxtra.soarstartup.com/",
      githubUrl: 'https://github.com/Big-Mo777/Illuxtra',
      gradient: 'from-yellow-500 to-orange-500',
    }
  ];

  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  const localScreenshots: Record<string, string> = {
    'project-ecommerce-rho-jet.vercel.app': shotEcommerce,
    'reflex-click-challenge-mvp.vercel.app': shotReflex,
    'illuxtra.soarstartup.com': shotIlluxtra,
    'typing-as-bigmo-dly2.vercel.app': shotTyping,
    'fadul-task.vercel.app': shotFadulTask,
  };

  const openPreview = (url: string, title: string) => {
    if (!url || url === '#') return;
    setPreview({ url, title });
  };
  const closePreview = () => setPreview(null);

  function PreviewWindow({
    url,
    title,
    gradient,
    onOpen,
  }: {
    url: string;
    title: string;
    gradient: string;
    onOpen: () => void;
  }) {
    useEffect(() => void 0, []);
    let host = '';
    try {
      host = new URL(url).hostname;
    } catch {
      host = '';
    }
    const shot = host ? localScreenshots[host] : '';
    const hasUrl = url && url !== '#';

    return (
      <div
        className={`h-48 bg-gradient-to-br ${gradient} p-3 flex items-center justify-center cursor-pointer`}
        onClick={onOpen}
        title={hasUrl ? 'Ouvrir l’aperçu' : 'Aperçu indisponible'}
      >
        <div className="w-full max-w-md h-full rounded-xl shadow-inner ring-1 ring-black/10 dark:ring-white/10 overflow-hidden bg-white/95 dark:bg-gray-900/90">
          <div className="flex items-center gap-1 px-3 py-2 border-b border-black/10 dark:border-white/10 bg-gray-50 dark:bg-gray-800">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <div className="ml-3 text-xs truncate text-gray-600 dark:text-gray-300">
              {hasUrl ? getHostname(url) : 'Aperçu indisponible'}
            </div>
          </div>
          {hasUrl && shot ? (
            <img
              src={shot}
              alt={`Aperçu de ${title}`}
              loading="lazy"
              className="w-full h-[calc(100%-28px)] object-cover object-top bg-white dark:bg-gray-900"
            />
          ) : (
            <div className="w-full h-[calc(100%-28px)] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <div className="text-center">
                <div className="text-gray-700 dark:text-gray-200 text-5xl">💻</div>
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">Aperçu indisponible</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section id="projets" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets réalisés
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une sélection de mes réalisations qui démontrent mon expertise technique et ma capacité à livrer des solutions complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col hover:-translate-y-1 hover:scale-[1.01]"
            >
              <PreviewWindow
                url={project.liveUrl}
                title={project.title}
                gradient={project.gradient}
                onOpen={() => openPreview(project.liveUrl, project.title)}
              />

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm font-medium">Voir code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {preview && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            onClick={closePreview}
          >
            <div
              className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="text-sm text-gray-700 dark:text-gray-300 truncate">{getHostname(preview.url)}</div>
                <button
                  className="rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={closePreview}
                  aria-label="Fermer l’aperçu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="aspect-video bg-white dark:bg-gray-900">
                <iframe
                  src={preview.url}
                  title={preview.title}
                  className="w-full h-full"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
