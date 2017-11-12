# ionic-tutorial1
Ionic tutorial1 : getting started

# Créer une nouvelle application ionic
```sh
ionic start ionic-tutorial1 sidemenu
```
Plusieurs autres templates sont disponibles pour créer un nouveau projet (tabs : pour une application basée sur les onglets, blank, super ou tutorial)

# Démarrer l'application et tester dans un navigateur
```sh
cd ionic-tutorial1
ionic serve
```
Cette instruction ouvre une page `http://localhost:8100/` dans le navigateur dans la quelle on peut tester le fonctionnement de notre application.

# Ajouter une nouvelle page :
Pour ajouter une nouvelle page on va utiliser Ionic CLI :
```sh
ionic generate page Exemple1
```
Cette commande va générer les fichiers pour la page Exemple1 :
```diff
+ src/pages/exemple1/exemple1.ts
+ src/pages/exemple1/exemple1.module.ts
+ src/pages/exemple1/exemple1.scss
+ src/pages/exemple1/exemple1.html
```
Il faut maintenant l'ajouter au Menu principale de l'application. Voilà les changements à faire : 

- Fichier `src/app/app.module.ts`
```ts
// ajouter l'import :
import { Exemple1Page } from './../pages/exemple1/exemple1';

// le tableau declarations :
declarations: [
    ... ,
    Exemple1Page
  ]

// le tableau entryComponents :
entryComponents: [
    ... ,
    Exemple1Page
  ]  
```
- Fichier `src/app/app.component.ts`
```ts
// ajouter l'import :
import { Exemple1Page } from './../pages/exemple1/exemple1';

// le tableau this.pages :
this.pages = [
      ... ,
      { title: 'Exemple1', component: Exemple1Page }
    ];
```
Et voilà ! 