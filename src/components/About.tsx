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
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍💻</div>
                <div className="text-2xl font-bold text-gray-900">Bigmo</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Passionné par le développement web depuis plusieurs années, je me spécialise dans la création
              d'applications modernes et performantes qui résolvent des problèmes concrets.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mon approche combine expertise technique et vision business pour créer des solutions
              qui génèrent de la valeur réelle. Je ne me contente pas d'écrire du code : je construis
              des produits qui fonctionnent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Que vous soyez une startup qui lance son MVP ou une entreprise établie qui modernise
              son infrastructure, je mets mon expertise à votre service pour concrétiser votre vision.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors duration-200 border border-gray-200"
            >
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-lg flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
