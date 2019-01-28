<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
<header style="height:20px; background: #f3a683;" class="mb-2"></header>
<div class="container m-l-4">
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    @include('flash::message')
    <div class="row">
        <div class="col flex-center">
            <h1>{{ $article->titre }}</h1>
        </div>
    </div>
    <div class="row">
        <div class="col flex-center">
            <img src="{{ asset('storage/' . $article->image) }}" alt="image">
        </div>
    </div>
    <div class="row">
        <div style="font-size: 20px;" class="col flex-center form-control">
            {{ $article->contenu }}
        </div>
    </div>
    <div class="row">
        <a href="{{ route('article.create') }}">Créer un nouvel article</a>
    </div>
    <div class="row">
        <a href="{{ route('article.edit', $article->id) }}">Modifier cet article</a>
    </div>
</div>
<footer style="height:20px; background: #f3a683;" class="mt-2"></footer>
</body>
</html>
