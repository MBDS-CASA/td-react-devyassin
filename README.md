[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/DTr5XncO)
# Session 1 : Concepts de bases React

## TD00 : Créer et initialiser un projet React 
1. Installer NodeJS
2. Créer un projet React en utilisant `Vite`
```
npm create vite@latest
```
3. Exécuter le projet
```
npm run dev
```
4. Essayer de modifier le contenu du fichier App.jsx puis enregistrer le fichier, vérifier que votre changement s'affiche instantannément dans le navigateur (pas besoin de recharger la page)
5. Remplacer le contenu du fichier index.ccs par celui inclut dans ce repository
6. Créer un commit avec le message "TD00 : Initialisation du projet"
7. Push


## TD01 : Votre premier composant React 
1. Créer un composant Header contenant les éléments suivant :
  - Logo de votre formation
  - Titre : "Introduction à React"
  - Sous-Titre : "A la découverte des premières notions de React"
2. Commit avec le message "TD01 : Ajouter un composant Header dans la page"
3. Créer un second composant MainContent, permettant d'afficher le text suivant "Ici, nous afficherons des informations interessantes :) "
3. Commit avec le message "TD01 : Ajouter un composant pour le contenu principal de la page"
4. Ajouter un composant Footer contenant le texte "Tous droits réservés - [Nom] [Prénom]" - Le texte doit s'afficher tout en bas de la page et centré au millieu
5. Commit avec le message "TD01 : Ajouter un footer"
6. Push 


## TD02 : Contenu dynamique 
1. Modifier le composant MainContent du TD précédent pour afficher le texte suivant "Bonjour, on est le [Jour], [Mois], [Annee] et il est [Heure]:[Minute]:[Second]"
2. Commit avec le message "TD02: Afficher la date et l'heure du jour"
3. Modifier le footer pour y afficher également l'année, au format "© [Annee] - [Prenom].[Nom], Tous droits réservés."
4. Commit avec le message "TD02 : Afficher l'année dans le Footer"
5. Push

## TD03 : Utiliser les propos 
1. Considérer les données du fichier data.json
2. Créer une fonction permettant de tirer alléatoirement un item de la liste
3. Créer un composant permettant d'afficher un élément du tableau.
>> Libre à vous de définir le style et la disposition des éléments (vous pouvez inclure des librairies css externes)
4. Commit avec le message "TD03 : Afficher les détails d'une note"
5. Push

## TD04 : Gestion d'événements 
1. Ajouter un menu en haut à gauche de votre application
2. Considérer les éléments suivants (Notes, Etudiants, Matières, A propos) 
3. Afficher une alerte contenu le text de l’élément cliqué
4. Commit avec le message “Add menu”
5. Push

# Session 02 : Gestion des listes dynamiques
## Objectifs de la session : 
- Manipuler des listes d'objets
- Utiliser de tableaux
- Gestion d'événements
- Utilisation de librairies (eg. material ui)
- Gestion dynamique de contenu

## Etape 1: Menu dynamique
- Modifier le composant du Menu pour utiliser une liste afin d'éviter la répétition de codes
- Faire en sorte que l'item selectionné dans le menu soit actif
- Créer un composent dédié pour chaque item du menu et afficher le bon composant en fonction du menu selectionné.
> Pour l'instant, afficher simplement un text avec le nom du menu dans le contenu de chaque composant, on les complètera dans les étapes suivantes
- Commit avec le messaage "TD04 : Gestion de menu dynamique"

## Etape 2: Gestion de données des composants 
Dans cette section, vous allez gérer le contenu des composants liés au menu en utilisant des liste d'objects statiques. Pour cela, récupérer les fichiers de données (notes.json, students.json, class.json et teachers.json) et importez les dans un dossier data de votre projet. 

> Attention, cette étape contient plusieurs tâches, une par menu 

1. Mettre à jour les dépendances du projet en y intégrant les libraries material ui [https://mui.com/material-ui/getting-started/installation/]
2. Se familliariser avec les composants Table [https://mui.com/material-ui/react-table/] -- Commencer par le Basic Table pour l'instant
3. Utiliser les fichiers de données pour remplir le contenu des différents composants en utilisant des tableaux
4. Commmiter avec le message "TD04: Remplir le contenu du composant [XXX]"
5. Push
> Répéter les étapes 1 à 5 pour tous les composants





 
