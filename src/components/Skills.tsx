export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Go (Gin)', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'API REST', level: 90 },
        { name: 'WebSocket', level: 80 },
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
      category: 'Outils & Autres',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'JWT', level: 85 },
        { name: 'Docker', level: 75 },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une stack technologique moderne et complète pour créer des applications web performantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-cyan-600 rounded mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-cyan-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
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
          <p className="text-gray-600 text-lg">
            Et toujours en apprentissage continu pour rester à la pointe de la technologie
          </p>
        </div>
      </div>
    </section>
  );
}
