<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/afficher-formulaire', function () {
    return view('formulaire');
});

Route::post('/envoyer-formulaire', 'FormulaireController@enregistrerFormulaire')
    ->name('post-formulaire');

Route::get('/afficher-formulaire-film', 'MovieController@afficherFormulaire')->name('afficher-formulaire-film');
Route::post('enregistrer-film', 'MovieController@enregistrerFilm')->name('enregistrer-film');
Route::get('/modifier-film/{id}', 'MovieController@afficherFormulaireModification')->name('modifier-film');
Route::post('/modifier-film/{id}', 'MovieController@enregistrerModificationFilm')->name('modifier-film');

Route::resource('article', 'ArticleController');
Route::resource('commentaires', 'CommentaireController');