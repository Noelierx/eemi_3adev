##Apres avoir recuperer un projet Laravel, config + commandes de bases :

- copier le .env. example en .env
- renseigner la BDD + user + mot de passe dans votre .env
- creer votre BDD sous MySQL (si vous ne l'avez pas)
- taper la commande `composer update`
- taper la commande `php artisan key:generate`
- taper la commande `php artisan migrate`
- taper la commande `php artisan storage:link`

##Pour creer une migration

Une migration est une structure de table de BDD. Elle est obligatoirement liée à un fichier Model.
Lorsque nous créons une migration, nous devons créer le fichier Model qui va avec.
Laravel propose 2 commandes pour créer un fichier migration et un fichier Model. Mais nous pouvons effectuer les 2 créations en une seule commande :
- `php artisan make:model -m MonModel`

Si nous voulions le faire en deux commandes :

Commande pour créer un fichier migration qui va créer la table (par convention les noms de table portent un S) :
- `php artisan make:migration create_movies_table --create=movies`

Commande pour créer un fichier model
- `php artisan make:model Movie`

####################################################

Commande pour créer un fichier migration qui va modifier une table
- `php artisan make:migration alter_movies_table --table=movies`

Commande pour créer ou modifier la table à partir du fichier migration
- `php artisan migrate`

Commande pour annuler la derniere migration
- `php artisan migrate:rollback`

## Commandes IDE helper
`php artisan ide-helper:generate`
 
`php artisan ide-helper:meta`
     
`php artisan ide-helper:models`