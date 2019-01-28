<?php

namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests\ArticleRequest;
use App\Traits\FileManager;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
  use FileManager;

  /**
   * Afficher la liste des articles
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $data['articles'] = app(Article::class)->get(['id', 'titre', 'contenu', 'image']);

    return view('article.list', $data);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return view('article.form-create');
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int $article
   *
   * @return \Illuminate\Http\Response
   */
  public function edit($article)
  {
    $data['article'] = app(Article::class)->find($article); // me donne l'article de la BDD
    if (!is_null($data['article'])) {
      return view('article.form-create', $data);
    }

    return abort(404);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\ArticleRequest $request
   *
   * @return \Illuminate\Http\Response
   */
  public function store(ArticleRequest $request)
  {
    try {
      // (ne pas oublier de faire la commande "php artisan storage:link", la premiere fois)
      // on recupere l'image s'il y en a une
      if ($request->hasFile('image')) {
        $inputFileRequest = $request->file('image');
        $extension        = $inputFileRequest->extension();
        $width            = 500;
        $height           = 'ratio';
        $outputFileName   = time() . '_' . $request->file('image')->getClientOriginalName();
        $dirInStorage     = 'articles/images';

        $path = $this->resizeAndStoreImageFile($extension, $inputFileRequest, $width, $height, $dirInStorage, $outputFileName);
      } else {
        $path = 'placeholder.png';
      }
      $tab          = $request->all();
      $tab['image'] = $path;
      Article::create($tab);
      flash('Creation de l\'article OK')->success();
    } catch (\Exception $e) {
      flash('Erreur lors de la creation de l\'article')->error();
    }

    return redirect()->route('article.index');
  }

  /**
   * Display the specified resource.
   *
   * @param  int $id
   *
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $data['article'] = app(Article::class)->find($id);

    return view('article.display', $data);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\ArticleRequest $request
   * @param  int $id
   *
   */
  public function update(ArticleRequest $request, $id)
  {
    $article = app(Article::class)->find($id);
    if (!is_null($article)) {
      $article->titre   = $request->titre;
      $article->contenu = $request->contenu;
      if ($request->hasFile('image')) {
        $inputFileRequest = $request->file('image');
        $extension        = $inputFileRequest->extension();
        $width            = 500;
        $height           = 'ratio';
        $outputFileName   = time() . '_' . $request->file('image')->getClientOriginalName();
        $dirInStorage     = 'articles/images';

        $path = $this->resizeAndStoreImageFile($extension, $inputFileRequest, $width, $height, $dirInStorage, $outputFileName);
        Storage::disk('public')->delete($article->image);
        $article->image = $path;
      }
      $updated = $article->update();
      if ($updated) {
        flash($article->titre . ' a bien été modifié.')->success();
      } else {
        flash($article->titre . ' n\'a pas été modifié.')->error();
      }

      return redirect()->route('article.index');
    }
    abort('402', 'unauthorized use');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int $id
   *
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    try {
      $article = app(Article::class)->find($id);
      try {
        $article->delete();
      } catch (\Exception $ex) {
        abort('404', $ex->getMessage());
      }
    } catch (ModelNotFoundException $e) {
      abort('404', $e->getMessage());
    }

    flash('Supression de ' . $article->titre . ' OK')->success();

    return redirect()->route('article.index');
  }
}
