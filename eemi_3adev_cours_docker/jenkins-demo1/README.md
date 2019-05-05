# TP Docker

Avant de commencer j'ai créé un compte sur le site [hub.docker.com](https://hub.docker.com/), j'ai ensuite créé un repository. 

Ce repository nous permettra de créer nos containers image mais aussi d'en récupérer. 

## First step 

Dans un premier temps, nous allons créer un dockerfile. Ce dockerfile nous permettra de récupérer une image déjà existante de Jenkins.

Le code est présent dans le dossier Dockerfile. 

Ensuite on run un docker build pour construire l'image. 

## Second step 

### Lancement de Jenkins 

On récupère l'identifiant de notre image avec la commande docker images

Cette commande nous permet de récupérer l'identifiant de notre image. 

On lance ensuite la commande 

'docker run -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock'

### Configuration de Jenkins

En lançant localhost:8080 on arrive sur la page de configuration de Jenkins. 

On installe ensuite les plugins suggérés. 

## Third Step 

On créé ensuite un pipeline (Pipeline script from SCM). 

Dans la configuration de ce pipeline, il faut lui préciser le lien du repository. 

## Fourth Step 

Création du JenkisFile qui permettra de clone le repo, d'installer node, de faire des test et d'accéder aux credentials.

## Fifth Step 

On lance le build, puis on se rend sur [hub.docker.com](https://hub.docker.com/) pour voir son image créée. 