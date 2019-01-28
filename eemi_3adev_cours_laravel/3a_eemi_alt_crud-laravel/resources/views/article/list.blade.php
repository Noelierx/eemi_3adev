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
    <table>
        <tr>
            <th>id</th>
            <th>titre</th>
            <th>contenu</th>
            <th>image</th>
            <th>modifier</th>
            <th>supprimer</th>
        </tr>
        @foreach($articles as $article)
            <tr>
                <td>{{ $article->id }}</td>
                <td>{{ $article->titre }}</td>
                <td>{{ $article->contenu }}</td>
                <td><img src="{{ asset('storage/' . $article->image) }}" width=50 alt="{{ $article->image }}"></td>
                <td><a href="{{ route('article.edit', $article->id) }}">modifier</a></td>
                <td>
                    <form action="{{ route('article.destroy', $article->id) }}" onsubmit="return confirm('ok pour la suppression ?')" method="POST">
                        @method('DELETE')
                        @csrf
                        <button type="submit" style="display: inline-block;">supprimer</button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>
</div>
<footer style="height:20px; background: #f3a683;" class="mt-2"></footer>
</body>
</html>
