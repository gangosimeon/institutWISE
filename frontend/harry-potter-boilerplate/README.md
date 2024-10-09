## Wise Institut Classroom - Harry Potter Website 🎓

Ce projet consiste à créer un site web consacré à l'univers de Harry Potter. L'objectif est de créer un site attractive pour les fans de l'univers de Harry Potter tout en respectant les principes de conception web moderne.
Notre site doit contenir:
- Barre de navigation: Une barre de navigation bien visible avec un grand titre et des sections correspondant aux principaux thèmes du site (personnages, magies, herbologies).
-  Message de bienvenue: Introduction engageante sur Harry Potter, l'œuvre de J.K. Rowling et son impact.
-  Thèmes principaux:
    - [ ] `Personnages` : Un focus sur les trois protagonistes principaux.
    - [ ] `Magies` : Une explication des trois types de magie courants dans l'univers.
   - [ ] `Herbologies` : Description des trois plantes magiques importantes.
    Ces trois éléments doivent être présenter sous forme de cartes avec une animation au survol.
-  Pied de page: Inclut une description du site, les droits d'auteur et un lien vers mon GitHub .


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

- URL Github de la solution:[Solution]( https://github.com/gangosimeon/institutWISE/tree/main/frontend/harry-potter-boilerplate)

---

## 📌 Mon processus
- Préparer un éditeur de texte
  .Visual Studio Code
- Créer un fichier HTML
  .index.html
- Structure de page HTML utilisée
```
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>HARRY POTTER</title>
		<link rel="icon" href="/assets/icons/favicon.ico"/>
		<meta name="description" content="L'univers magique de Harry Potter">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/styles/index.css">
	</head>
	<body>
		<header>
			<nav class="navbar" id="navbar">
			</nav>
		</header>
		<main id="mainSection">
			<section id="welcome">

			</section>
			<section id="cards">

			</section>
			<section id="personnages">
				
			</section>
			<section id="magie">
				
			</section>
			<section id="herbologies">
				
			</section>
			<footer>
				
			</footer>
		</main>
	</body>
</html>
```

- Ajouter du contenu
![html](https://github.com/user-attachments/assets/952d1099-20d1-47a0-a88c-46f80c478efa)
- Ajouter du css pour organiser et rendre ma page agréable à la vue
![css](https://github.com/user-attachments/assets/175df1b0-5399-4222-a882-f17f7b8d86e0)

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

J'ai appris importer et utiliser la police "harryp" pour l'ensemble de la page grâce à `@font-face`.
J'ai également appris à utiliser les flexbox:

Voici des extraits de code:

```css
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}



@font-face {
  font-family:harryp ;/*Nom a utiliser sur le web*/
  src: url(/assets/fonts/harryp.ttf);
}
```


### ⚫ Développement continu

Dans mes projets futurs, je souhaite continuer à me concentrer sur plusieurs concepts clés du développement Web fullstack que je n’ai pas encore totalement maîtrisés. Cela inclut le perfectionnement de mes compétences en JavaScript, notamment la maîtrise des frameworks comme React et Node.js. J’aimerais approfondir ma compréhension des architectures RESTful et GraphQL, ainsi que des méthodologies DevOps pour une gestion plus efficace du déploiement et de la maintenance d’applications Web. Par ailleurs, je veux affiner mes connaissances sur la sécurité des applications Web, les tests automatisés, et l’optimisation des performances front-end et back-end pour fournir des solutions à la fois robustes et évolutives.

### ⚫ Ressources utiles

- [w3school](https://www.w3schools.com/) - Cela m'a aidé à voir plus clairement les effets des attributs CSS. J'ai vraiment aimé ce modèle et je l'utiliserai à l'avenir.
- [flexboxfroggy](https://flexboxfroggy.com/#fr) - Cet article est incroyable et m'a aidé à enfin comprendre les floxbox. Je le recommande à tous ceux qui apprennent encore ce concept.

---

## 📌 Auteur

- Site Web - [Ajoutez votre portfolio ici si vous en avez un](https://www.votre-site.com)
- Github - [@gangosimeon](https://github.com/gangosimeon)

---

## 📌 Remerciements

Je tiens à remercier l'institut WISE et ses formateurs pour leur soutien et leur engagement à m'aider dans mon parcours pour devenir développeur Web fullstack.

