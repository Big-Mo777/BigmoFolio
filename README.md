# Portfolio Professionnel - Bigmo (AGNIDE Mohamed Fadul)

Portfolio moderne et responsive pour développeur web fullstack, créé avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

- Design moderne et professionnel inspiré des startups/SaaS
- Totalement responsive (mobile, tablette, desktop)
- Navigation fluide avec menu hamburger mobile
- Animations et transitions élégantes
- Section Hero percutante avec call-to-actions
- Présentation détaillée des compétences avec barres de progression
- Galerie de projets avec descriptions et liens
- Formulaire de contact fonctionnel avec Formspree
- Footer avec liens sociaux

## Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Build tool moderne et rapide
- **Lucide React** - Icônes élégantes
- **Formspree** - Gestion du formulaire de contact

## Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd portfolio-bigmo
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez le formulaire de contact :
   - Suivez les instructions dans `SETUP_FORMSPREE.md`
   - Remplacez `YOUR_FORM_ID` dans `src/components/Contact.tsx`

4. Lancez le serveur de développement :
```bash
npm run dev
```

5. Ouvrez votre navigateur sur [http://localhost:5173](http://localhost:5173)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée le build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run typecheck` - Vérifie les types TypeScript

## Déploiement

### Vercel (Recommandé)

1. Installez Vercel CLI :
```bash
npm install -g vercel
```

2. Déployez :
```bash
vercel
```

Ou connectez votre repository GitHub à Vercel pour un déploiement automatique.

### Netlify

1. Build le projet :
```bash
npm run build
```

2. Déployez le dossier `dist` sur Netlify via leur interface web ou CLI :
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Installez gh-pages :
```bash
npm install --save-dev gh-pages
```

2. Ajoutez dans `package.json` :
```json
{
  "homepage": "https://votre-username.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Déployez :
```bash
npm run deploy
```

## Personnalisation

### Modifier les informations personnelles

1. **Hero Section** : `src/components/Hero.tsx`
   - Changez le nom, titre et description

2. **À propos** : `src/components/About.tsx`
   - Modifiez le texte de présentation

3. **Compétences** : `src/components/Skills.tsx`
   - Ajoutez ou supprimez des compétences
   - Ajustez les niveaux (pourcentages)

4. **Projets** : `src/components/Projects.tsx`
   - Ajoutez vos vrais projets
   - Mettez à jour les liens GitHub et live
   - Modifiez les descriptions et stacks

5. **Contact** : `src/components/Contact.tsx`
   - Changez l'email de contact
   - Modifiez la localisation

6. **Footer** : `src/components/Footer.tsx`
   - Mettez à jour les liens sociaux (GitHub, LinkedIn)

### Modifier les couleurs

Le thème utilise principalement la couleur cyan (`cyan-600`). Pour changer :

1. Cherchez toutes les occurrences de `cyan` dans les fichiers
2. Remplacez par une autre couleur Tailwind (ex: `blue`, `green`, `orange`)

Ou utilisez des couleurs personnalisées dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#votre-couleur',
        600: '#votre-couleur',
        700: '#votre-couleur',
      }
    }
  }
}
```

### Ajouter Google Analytics

Ajoutez dans `index.html` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Structure du projet

```
portfolio-bigmo/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Composant principal
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## Support et Contact

Pour toute question ou suggestion :
- Email : bigmo@example.com
- GitHub : [@bigmo](https://github.com/bigmo)

## Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

---

Créé avec ❤️ par Bigmo
