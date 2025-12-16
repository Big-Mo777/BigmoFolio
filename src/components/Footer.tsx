import { Github, Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Big-Mo777',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/fadulagnide',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:fadulagnide01@gmail.com',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bigmo<span className="text-cyan-500 dark:text-cyan-400">.</span>
            </h3>
            <p className="text-gray-400 dark:text-gray-400 leading-relaxed">
              Développeur web fullstack passionné par la création d'applications
              modernes et performantes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <a href="#accueil" className="block text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Accueil
              </a>
              <a href="#apropos" className="block text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                À propos
              </a>
              <a href="#competences" className="block text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Compétences
              </a>
              <a href="#projets" className="block text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Projets
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Me suivre</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 dark:text-gray-400 text-sm">
                <a href="mailto:fadulagnide01@gmail.com" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  fadulagnide01@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-400 text-sm">
            &copy; {currentYear} Bigmo (AGNIDE Mohamed Fadul). Tous droits réservés.
          </p>
          <p className="text-gray-400 dark:text-gray-400 text-sm flex items-center gap-1">
            Créé avec <Heart size={16} className="text-red-500 dark:text-red-400" /> et React
          </p>
        </div>
      </div>
    </footer>
  );
}
