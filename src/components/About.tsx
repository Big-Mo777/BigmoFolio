import { Code2, Rocket, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Sérieux & Rigueur',
      description: 'Je livre des projets de qualité, dans les délais convenus, avec un code propre et maintenable.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Capacité à livrer',
      description: 'De l\'idée au déploiement, je gère l\'intégralité du processus de développement.',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Passion technologique',
      description: 'Toujours à jour avec les dernières technologies et les meilleures pratiques du web moderne.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Vision long terme',
      description: 'Je construis des solutions évolutives pensées pour grandir avec votre entreprise.',
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-gray-100 dark:from-cyan-900/30 dark:to-gray-900 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:rotate-1 hover:scale-[1.02] shadow-sm hover:shadow-md">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍💻</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Bigmo</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in">
              Je suis Bigmo (AGNIDE Mohamed Fadul), développeur fullstack passionné par la création d’applications concrètes et utiles.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in">
              J’ai une expérience pratique avec React, Next.js, Node.js, et Tailwind CSS.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in">
              Mon approche est simple : résoudre des problèmes réels, avec du code propre, maintenable et évolutif.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in">
              Je combine sens du design, logique de développement et souci du détail pour livrer des expériences digitales de qualité.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-cyan-50 dark:hover:bg-gray-800 transition-colors duration-200 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-lg flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
