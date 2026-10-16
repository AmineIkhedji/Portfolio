# Portfolio — Ikhedji Amine

Portfolio personnel présentant mon parcours, mes compétences, mes formations et
mes projets en développement web, mobile et logiciel.

**Site en ligne :** [amineikhedji.github.io/Portfolio](https://amineikhedji.github.io/Portfolio/)

## Aperçu

- Interface responsive avec thèmes clair et sombre
- Contenu disponible en français et en anglais
- Pages de détail et galeries pour les projets
- Navigation animée et apparitions au défilement
- Contact protégé par Cloudflare Turnstile et un Cloudflare Worker

## Technologies

- HTML5
- CSS3
- JavaScript natif
- GitHub Pages pour l'hébergement statique
- Cloudflare Workers et Turnstile pour la vérification du contact

## Configuration du contact

GitHub Pages ne fournit pas de serveur . Le site demande donc une
vérification Turnstile, puis le Worker Cloudflare renvoie l'adresse uniquement
si le jeton est valide.

