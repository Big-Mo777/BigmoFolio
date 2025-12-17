import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 rounded-full text-sm font-semibold mb-4 text-gradient-animate">
              Développeur Fullstack
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-up">
            Développeur Fullstack — Je transforme des idées en applications concrètes
            <br />
            <span className="text-gray-700 dark:text-gray-300 sr-only">AGNIDE Mohamed Fadul</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in">
            Je conçois et développe des applications web modernes, performantes et orientées utilisateurs. Mon objectif : livrer des produits réels, propres et maintenables.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Je transforme vos idées en applications web concrètes, robustes et scalables
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projets"
              className="group px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Voir mes projets
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-white dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-200 flex items-center gap-2 hover:scale-[1.02]"
            >
              <Mail size={20} />
              Me contacter
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-400">Ans d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
