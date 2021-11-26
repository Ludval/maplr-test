# API

Le projet a été crée from scratch.

## Librairies utilisées

### [MySQL](https://www.mysql.com/fr/)

Driver NodeJS pour consommer une base de données MySQL.

### [TypeORM](https://typeorm.io/#/)

ORM pour faciliter l'utilisation de MySQL dans une application NodeJS.

### [Swagger](https://swagger.io/)

Outil permettant de générer une documentation des routes de l'API.

## Architecture

L'application suit le schéma suivant:

```
📦src
 ┣ 📂controllers // point d'entrée des routes
 ┣ 📂entities // modèle de données
 ┣ 📂repositories // communication avec la bdd
 ┣ 📂services // logique entre repositories et controllers
 ┗ 📜app.ts
```
