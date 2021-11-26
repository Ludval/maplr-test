# Front

Le projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Librairies utilisées

### [Angular Material](https://material.angular.io/)

Librarie de composant pour Angular basé sur le thème de Material.

### [Prettier](https://prettier.io/)

Formatteur de code.

### [Husky](https://typicode.github.io/husky/#/)

Package permettant l'utilisation facile des hooks de Git. Dans ce projet, utilisé pour le hook `pre-commit` afin d'automatiquement formatter les fichiers committés au format défini par Prettier.

## Architecture

L'application suit le schéma suivant:

```
📦app
┣ 📂components // composants partagés dans toute l'application
┃ ┣ 📂containers // composants "intelligents" qui contiennent de la logique
┃ ┣ 📂modals
┃ ┗ 📂views // composants "idiots" utilisés pour l'UI
┣ 📂pages
┃ ┗ 📂team // page lazy-loadé
┃ ┃ ┣ 📂components // composants utilisés uniquement la page
┃ ┃ ┃ ┗ 📂containers
┃ ┃ ┃ ┗ 📂modals
┃ ┃ ┃ ┗ 📂views
┃ ┃ ┣ 📂pages
┃ ┃ ┣ 📂shared // éléments partagés uniquement dans la page
┃ ┃ ┣ 📜team-routing.module.ts
┃ ┃ ┗ 📜team.module.ts
┣ 📂shared // éléments partagés dans toute l'application
┃ ┣ 📂directives
┃ ┣ 📂enums
┃ ┣ 📂interfaces
┃ ┣ 📂modules
┃ ┣ 📂services
┗ 📜app.module.ts
```
