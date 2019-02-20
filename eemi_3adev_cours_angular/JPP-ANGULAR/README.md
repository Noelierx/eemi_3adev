# JPPANGULAR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.
Il a été créé dans le cadre du cours d'Angular, pour nous familiariser avec la création de CRUD mais aussi la gestion de requête HTTP.

Rappel de l'énoncé : 
Dans un nouveau projet créer un "blog" utilisant l'api [JsonPlaceholder](https://jsonplaceholder.typicode.com/) et permettre de créer un nouvel article, modifier un article existant et en supprimer.

## Mettre à jour les modules 
 - Run `npm install` pour mettre à jour les modules
 - Run `npm install --save @angular/material @angular/cdk` pour ajouter material (parce que bootstrap y'en a marre)
 - Run `npm install --save rxjs-compat` pour la compatibilité avec RxJS
 - Run `yarn build` ou `ng build` pour vérifier que tout est ok
 
 Des librairies externes ont été utilisées pour réaliser ce projet comme RxJS et Material étant donné que la consigne que j'avais n'interdisait pas leur utilisation :
 - Tutoriel suivi pour intégrer Material dans mon projet angular : [Creating beautiful apps with angular material](https://auth0.com/blog/creating-beautiful-apps-with-angular-material/)
 - Ajout d'un "pre-built theme" : [Using pre-built theme](https://blog.thoughtram.io/angular/2017/05/23/custom-themes-with-angular-material.html#using-pre-built-themes)
 - Introduction à RxJS et notamment aux Observable : [Introduction à RxJS](https://www.julienpradet.fr/tutoriels/introduction-a-rxjs/), je voulais l'utiliser pour comprendre son fonctionnement mais aussi parce que je trouvais l'exercice adapté pour son utilisation.

## Development server

Run `ng serve` or `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
