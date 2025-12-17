import { Code2, Server, ShieldCheck, Database, GitBranch, Cloud, Wind, Code } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML / CSS / JavaScript', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'API REST', level: 90 },
        { name: 'JWT / Auth', level: 85 },
      ],
    },
    {
      category: 'Bases de données',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      category: 'Autres',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Déploiement (Vercel, Render)', level: 85 },
      ],
    },
  ];

  const skillIcon = (name: string) => {
    switch (name) {
      case 'React':
        return <Code2 size={18} className="text-cyan-600" />;
      case 'Next.js':
        return <Code size={18} className="text-gray-700 dark:text-gray-300" />;
      case 'Tailwind CSS':
        return <Wind size={18} className="text-cyan-600" />;
      case 'HTML / CSS / JavaScript':
        return <Code size={18} className="text-gray-700 dark:text-gray-300" />;
      case 'Node.js':
        return <Server size={18} className="text-emerald-600" />;
      case 'API REST':
        return <Cloud size={18} className="text-cyan-600" />;
      case 'JWT / Auth':
        return <ShieldCheck size={18} className="text-indigo-600" />;
      case 'PostgreSQL':
        return <Database size={18} className="text-blue-600" />;
      case 'MySQL':
        return <Database size={18} className="text-yellow-600" />;
      case 'Git/GitHub':
        return <GitBranch size={18} className="text-gray-700 dark:text-gray-300" />;
      case 'Déploiement (Vercel, Render)':
        return <Cloud size={18} className="text-cyan-600" />;
      default:
        return <Code size={18} className="text-gray-700 dark:text-gray-300" />;
    }
  };

  return (
    <section id="competences" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une stack technologique moderne et complète pour créer des applications web performantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-cyan-600 rounded mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2 items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gray-100 dark:bg-gray-800">
                          {skillIcon(skill.name)}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-cyan-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-600 to-cyan-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Et toujours en apprentissage continu pour rester à la pointe de la technologie
          </p>
        </div>
      </div>
    </section>
  );
}
