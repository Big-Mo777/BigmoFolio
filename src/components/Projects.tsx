import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Application de Messagerie Instantanée',
      description: 'Plateforme de chat en temps réel avec authentification sécurisée, salons de discussion et notifications push. Architecture scalable supportant des milliers d\'utilisateurs simultanés.',
      stack: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Plateforme E-commerce',
      description: 'Solution e-commerce complète avec gestion de catalogue produits, panier d\'achat, système de paiement sécurisé et tableau de bord administrateur.',
      stack: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Application Mobile de Jeu',
      description: 'Jeu interactif mobile avec système de score en temps réel, classements, achievements et expérience utilisateur fluide.',
      stack: ['React Native', 'Go (Gin)', 'MySQL', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'To-Do List Intelligente',
      description: 'Application de gestion de tâches avec authentification, catégorisation intelligente, rappels et synchronisation multi-appareils.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Portfolio Interactif',
      description: 'Site portfolio moderne et responsive avec animations fluides, formulaire de contact et optimisations SEO avancées.',
      stack: ['React', 'Tailwind CSS', 'EmailJS'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets réalisés
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une sélection de mes réalisations qui démontrent mon expertise technique et ma capacité à livrer des solutions complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-white text-6xl">💻</div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    Voir le site
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
