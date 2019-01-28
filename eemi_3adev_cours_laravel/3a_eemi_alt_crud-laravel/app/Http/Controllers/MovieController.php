<?php

namespace App\Http\Controllers;

use App\Movie;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Http\Request;

class MovieController extends Controller
{
  public function afficherFormulaire()
  {
    return view('formulaire-film');
  }

  public function enregistrerFilm(Request $request)
  {
    // avant d'enregistrer nous devons verifier nos champs
    $request->validate([
      'title'        => 'required|string|max:60',
      'synopsis'     => 'nullable|string',
      'director'     => 'required|string|max:60',
      'producer'     => 'required|string|max:60',
      'genre'        => 'required|in:action,drama,comic,adventure',
      'release_date' => 'required|date',
      'active'       => 'nullable|boolean',
    ]);

    // enregisrement methode save()

//    $movie               = new Movie();
//    $movie->title        = $request->title;
//    $movie->synopsis     = $request->synopsis;
//    $movie->director     = $request->director;
//    $movie->producer     = $request->producer;
//    $movie->genre        = $request->genre;
//    $movie->release_date = $request->release_date;
//    $movie->active       = $request->active ?? 0;
//
//    $save = $movie->save(); // return TRUE si c bon, FALSE si c pas bon
    //    if ($save) {
//      // indiquer un message de succes
//    } else {
//      // indiquer un message d'erreur
//    }

//------------------------------ OU enregistrement methode MassAssignement
    try {
      $data           = $request->all();
      $data['active'] = array_key_exists('active', $data) && $data['active'] == 1 ? 1 : 0;
      app(Movie::class)->create($data);
      flash('Film enregistré avec succès')->success();
    } catch (MassAssignmentException $e) {
      // message d'erreur et redirection
      flash('Erreur lors de l\'enregisrement veuillez réessayer ou contacter l\'administrateur')->error();
    }

    return redirect()->route('afficher-formulaire-film');
  }

  public function afficherFormulaireModification($id)
  {
    $data['movie'] = Movie::find($id);

    return view('formulaire-modification-film', $data);
  }

  public function enregistrerModificationFilm(Request $request, $id)
  {
    $request->validate([
      'title'        => 'required|string|max:60',
      'synopsis'     => 'nullable|string',
      'director'     => 'required|string|max:60',
      'producer'     => 'required|string|max:60',
      'genre'        => 'required|in:action,drama,comic,adventure',
      'release_date' => 'required|date',
      'active'       => 'nullable|boolean',
    ]);

    $movie               = Movie::find($id);
    $movie->title        = $request->title;
    $movie->synopsis     = $request->synopsis;
    $movie->director     = $request->director;
    $movie->producer     = $request->producer;
    $movie->genre        = $request->genre;
    $movie->release_date = $request->release_date;
    $movie->active       = $request->active ?? 0;
    $save                = $movie->update();

    if ($save) {
      flash('Film modifié avec succès')->success();
    } else {
      flash('Erreur lors de la modif veuillez réessayer ou contacter l\'administrateur')->error();
    }

    return redirect()->back();
  }
}
