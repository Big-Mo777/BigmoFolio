# Configuration du Formulaire de Contact avec Formspree

Ce portfolio utilise **Formspree** pour gérer l'envoi des messages du formulaire de contact directement vers votre email.

## Étapes de configuration

### 1. Créer un compte Formspree

1. Rendez-vous sur [https://formspree.io/](https://formspree.io/)
2. Cliquez sur "Get Started" ou "Sign Up"
3. Créez un compte gratuit (le plan gratuit permet 50 soumissions/mois)

### 2. Créer un nouveau formulaire

1. Une fois connecté, cliquez sur "+ New Form"
2. Donnez un nom à votre formulaire (ex: "Portfolio Contact Form")
3. Entrez l'email où vous souhaitez recevoir les messages
4. Cliquez sur "Create Form"

### 3. Récupérer votre Form ID

Après la création du formulaire, Formspree vous fournira un **Form ID** qui ressemble à ceci :
```
https://formspree.io/f/YOUR_FORM_ID
```

Par exemple : `https://formspree.io/f/xpznvgza`

### 4. Intégrer le Form ID dans le code

Ouvrez le fichier `src/components/Contact.tsx` et remplacez `YOUR_FORM_ID` par votre véritable Form ID :

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Devient :

```typescript
const response = await fetch('https://formspree.io/f/xpznvgza', {
```

### 5. Tester le formulaire

1. Lancez votre application : `npm run dev`
2. Remplissez le formulaire de contact
3. Envoyez un message test
4. Vérifiez votre boîte email pour voir le message reçu

## Alternative : EmailJS

Si vous préférez utiliser **EmailJS** au lieu de Formspree :

### Configuration EmailJS

1. Créez un compte sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Installez le package EmailJS :

```bash
npm install @emailjs/browser
```

5. Modifiez le fichier `Contact.tsx` :

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  } catch (error) {
    setStatus('error');
    setTimeout(() => setStatus('idle'), 5000);
  }
};
```

## Personnalisation des emails reçus

### Avec Formspree
- Connectez-vous à votre dashboard Formspree
- Allez dans les paramètres du formulaire
- Vous pouvez personnaliser :
  - L'adresse email de réception
  - Les notifications
  - Les réponses automatiques
  - Les webhooks

### Avec EmailJS
- Dans votre template EmailJS, vous pouvez utiliser des variables :
  - `{{from_name}}` : nom de l'expéditeur
  - `{{from_email}}` : email de l'expéditeur
  - `{{message}}` : message reçu

## Conseils de sécurité

1. **Ne committez jamais vos clés API** dans Git (pour EmailJS)
2. **Utilisez des variables d'environnement** pour les informations sensibles
3. **Activez le reCAPTCHA** sur Formspree pour éviter le spam
4. **Limitez les soumissions** pour éviter les abus

## Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que vous avez bien remplacé `YOUR_FORM_ID`
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que votre compte Formspree est bien activé

### Je ne reçois pas les emails
- Vérifiez vos spams
- Vérifiez l'adresse email configurée dans Formspree
- Vérifiez que le formulaire s'est bien soumis (status 200)

### Limite de soumissions atteinte
- Passez à un plan payant Formspree
- Ou utilisez EmailJS qui offre 200 emails/mois gratuits

## Support

- Documentation Formspree : [https://help.formspree.io/](https://help.formspree.io/)
- Documentation EmailJS : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
