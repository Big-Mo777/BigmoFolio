import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              Développeur Web Fullstack
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bigmo
            <br />
            <span className="text-gray-700">AGNIDE Mohamed Fadul</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Développeur web spécialisé dans la création d'applications performantes
          </p>

          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Je transforme vos idées en applications web concrètes, robustes et scalables
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projets"
              className="group px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Voir mes projets
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Me contacter
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2+</div>
              <div className="text-gray-600">Ans d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
