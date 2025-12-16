import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const el = document.documentElement;
    if (next === 'dark') el.classList.add('dark');
    else el.classList.remove('dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      void 0;
    }
  };

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#accueil" className="text-2xl font-bold text-gray-900 dark:text-white">
            Bigmo<span className="text-cyan-600">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Basculer le thème"
              className="rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
