# Wise Institut Classroom - Harry Potter Website 🎓

Ce document est un template de README destiné à accompagner les exercices ou les challenges techniques, il permet de décrire de manière claire et concise le contexte et les objectifs du défi, ainsi que les compétences et les technologies utilisées pour le relever. Il est important de souligner que l'ensemble du projet devra être archivé sur un référentiel GitHub. Cela mettra en valeur vos compétences et vous aidera à constituer un portfolio bien fourni de projets.

> Veuillez remplacer cette section par une description du projet dans son ensemble, en tenant compte du contexte demandé.

---

## 📌 Table des matières

- [Vue d'ensemble](#-vue-densemble)
  - [Le défi](#le-defi)
  - [Capture d'écran](#capture-décran)
  - [Liens](#liens)
- [Mon processus](#mon-processus)
  - [Construit avec](#construit-avec)
  - [Ce que j'ai appris](#ce-que-jai-appris)
  - [Développement continu](#developpement-continu)
  - [Ressources utiles](#ressources-utiles)
- [Auteur](#auteur)
- [Remerciements](#remerciements)

> Modifiez cette note si besoin et mettez à jour la table des matières en fonction des sections que vous conservez.

---

## 📌 Vue d'ensemble

### ⚫ Le défi

**`Contenu du site`**
- [ ] Inclure une `barre de navigation` conviviale avec un `grand titre` et les sections `représentant les thèmes` principaux du site.
- [ ] Rédiger un `message de bienvenue` engageant qui présente brièvement l'univers de Harry Potter, l'œuvre de J.K. Rowling, et son impact culturel en `3 à 4 paragraphes`.
- [ ] Ajouter un `titre captivant` qui introduit les différents `thèmes` abordés sur le site.
- Présenter les `trois thèmes principaux` sous forme de `cartes`:
  - [ ] `Les personnages`: Mettre en lumière les trois protagonistes principaux et leur importance dans l'histoire.
  - [ ] `Les magies`: Explorer les trois types de magie les plus courants, en expliquant leur rôle dans les aventures.
  - [ ] `Les herbologies`: Décrire les trois plantes magiques les plus utilisées, en précisant leurs propriétés et applications.
- Le `pied de page` (footer) contiendra:
  - [ ] `Description du site`: Un résumé de l'objectif et du contenu du site.
  - [ ] `Droits d'auteur`: Mentionner le copyright, par exemple: &copy; Raja Rakotonirina - 2024.
  - [ ] `Liens` (facultatif): Ajouter un lien vers compte GitHub ou site personnel pour les visiteurs intéressés.

**`HTML`**

- [ ] Créer une structure HTML5 sémantique pour un site consacré à l'univers de Harry Potter.
- [ ] Ajouter des métadonnées dans la balise `<head>`, telles que des informations sur l'auteur, les mots-clés et l'encodage du fichier.
- [ ] Utiliser des balises sémantiques telles que `<header>`, `<nav>`, `<section>`, `<footer>`, `<div>` pour structurer correctement la page.
- [ ] Créer une navigation avec des liens entre les différentes sections du site.
- [ ] Utiliser des balises de texte structurées comme `<h1>`, `<h3>`, `<p>`, et `<span>` pour présenter le contenu de manière claire.
- [ ] Inclure des images avec des balises `<img>` et ajouter des attributs `alt` appropriés pour l'accessibilité.

**`CSS`**

- [ ] Importer et utiliser la police "harryp" pour l'ensemble de la page grâce à `@font-face`.
- [ ] Ajouter une image de fond (Poudlard) qui reste fixe et couvre toute la page, tout en étant bien centrée.
- [ ] Créer une barre de navigation avec des liens interactifs :
  - [ ] Les liens doivent être de couleur `blanche`.
  - [ ] Au survol, les liens doivent changer en `#b2aef4` (bleu clair).
- [ ] Organiser le contenu avec des marges et du padding pour que les éléments soient bien espacés et faciles à lire sur tous les écrans.
- [ ] Ajouter des animations aux 3 thèmes de Harry Potter (personnages, herbologies, magies) : Quand on passe la souris dessus, les cartes doivent s'agrandir légèrement et avoir une ombre moins prononcée.
- [ ] Appliquer des ombres aux éléments (thèmes) pour leur donner un effet visuel de profondeur (ombre plus forte par défaut et ombre légère au survol).
- [ ] Utiliser des `media queries` pour rendre la page adaptable aux petits écrans : Ajuster la taille des cartes et des marges pour que tout s'affiche correctement sur mobile.
- [ ] La couleur de fond de l'en-tête et du pied de page doit être `#5e58c6` (violet).
- [ ] Le texte dans l'en-tête doit être `blanc`.

> Cette section décrit les objectifs à atteindre pour le défi et ne devrait pas être modifiée.

### ⚫ Capture d'écran

`[capture d'écran ici ...]`
![monSiteHarryPotter](https://github.com/user-attachments/assets/391a461a-af46-4430-ae15-dc9d5eab63d1)

### ⚫ Liens

- URL Github de la solution: https://github.com/gangosimeon/institutWISE/tree/main/frontend/harry-potter-boilerplate

---

## 📌 Mon processus

### ⚫ Construit avec

- Balises HTML5 sémantiques
- Propriétés personnalisées CSS
- Flexbox + Media queries
- [React](https://reactjs.org/) - Librairie JavaScript
- [Material-UI](https://mui.com/) - Composants UI personnalisés
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS le plus populaire
- [Sass](https://sass-lang.com/) - Préprocesseur CSS
- [Redux](https://redux.js.org/) - Gestionnaire d'état
- [TypeScript](https://www.typescriptlang.org/) - Type checker
  ...

> Ce ne sont que des exemples. Supprimez cette note et remplacez la liste ci-dessus par vos propres choix.

### ⚫ Ce que j'ai appris

Utilisez cette section pour récapituler certaines de vos principales leçons apprises en travaillant sur ce projet. Rédiger ces informations et fournir des exemples de code pour les aspects que vous souhaitez mettre en avant est un excellent moyen de renforcer vos connaissances.

Voici comment ajouter des extraits de code:

```html
<h1>Un peu de code HTML dont je suis fier</h1>
```

```css
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}

*Import et utilisation la police "harryp" pour l'ensemble de la page grâce à `@font-face`. */

@font-face {
  font-family:harryp ;/*Nom a utiliser sur le web*/
  src: url(/assets/fonts/harryp.ttf);
}
```

```js

```

> Supprimez cette note et le contenu de cette section et remplacez-le par vos propres apprentissages en ajoutant des petits commentaires expliquant les aspects que vous avez appris.

### ⚫ Développement continu

Utilisez cette section pour décrire les domaines sur lesquels vous souhaitez continuer à vous concentrer dans vos projets futurs. Il peut s'agir de concepts que vous ne maîtrisez pas encore totalement ou de techniques que vous avez trouvées utiles et que vous souhaitez affiner et perfectionner.

> Supprimez cette note et le contenu de cette section et remplacez-le par vos propres plans de développement continu.

### ⚫ Ressources utiles

- [Exemple de ressource 1](https://www.example.com) - Cela m'a aidé pour XYZ. J'ai vraiment aimé ce modèle et je l'utiliserai à l'avenir.
- [Exemple de ressource 2](https://www.example.com) - Cet article est incroyable et m'a aidé à enfin comprendre XYZ. Je le recommande à tous ceux qui apprennent encore ce concept.

> Supprimez cette note et remplacez la liste ci-dessus par les ressources qui vous ont aidé durant le défi. Elles pourraient être utiles pour quiconque consulte votre solution ou pour vous-même lorsque vous reviendrez sur ce projet dans le futur.

---

## 📌 Auteur

- Site Web - [Ajoutez votre portfolio ici si vous en avez un](https://www.votre-site.com)
- Github - [@gangosimeon](https://github.com/gangosimeon)

---

## 📌 Remerciements

C'est ici que vous pouvez remercier toutes les personnes qui vous ont aidé sur ce projet. Peut-être avez-vous travaillé en équipe ou vous êtes-vous inspiré de la solution de quelqu'un d'autre.

