<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormulaireController extends Controller
{
  public function enregistrerFormulaire(Request $request)
  {
    dd($request->all());
  }
}
