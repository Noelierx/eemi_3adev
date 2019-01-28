<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Formulaire film</title>
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->

  <style>
    /* Credit to bootsnipp.com for the css for the color graph */
    .colorgraph {
      height: 5px;
      border-top: 0;
      background: #c4e17f;
      border-radius: 5px;
      background-image: -webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
      background-image: -moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
      background-image: -o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
      background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
    }
  </style>
</head>
<body>

<div class="container">

  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
      <form role="form" action="{{ route('modifier-film', $movie->id) }}" method="post">
        {{ csrf_field() }}
        <h2>Modifier le film {{ $movie->title }}
          <small>It's free aussi.</small>
        </h2>
        <hr class="colorgraph">
        @include('flash::message')
        @if ($errors->any())
          <div class="alert alert-danger">
            <ul>
              @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
        @endif
        <div class="form-group">
          <input type="text" name="title" value="{{ old('title') ?? $movie->title }}" id="title" class="form-control input-lg" placeholder="Title" tabindex="3">
        </div>
        <div class="form-group">
          <input type="text" name="director" value="{{ old('director') ?? $movie->director }}" id="director" class="form-control input-lg" placeholder="Director" tabindex="3">
        </div>
        <div class="form-group">
          <input type="text" name="producer" value="{{ old('producer') ?? $movie->producer }}" id="producer" class="form-control input-lg" placeholder="Producer" tabindex="3">
        </div>
        <div class="form-group">
          <input type="date" name="release_date" value="{{ old('release_date') ?? $movie->release_date }}" id="release_date" class="form-control input-lg" placeholder="Release date" tabindex="3">
        </div>
        <div class="form-group">
          <select title="Genre" class="form-control input-lg" name="genre" id="genre">
            <option {{ old('genre') === 'action' || $movie->genre === 'action' ? 'selected' : 'selected' }} value="action">action</option>
            <option {{ old('genre') === 'adventure' || $movie->genre === 'adventure' ? 'selected' : '' }} value="adventure">adventure</option>
            <option {{ old('genre') === 'drama' || $movie->genre === 'drama' ? 'selected' : '' }} value="drama">drama</option>
            <option {{ old('genre') === 'comic' || $movie->genre === 'comic' ? 'selected' : '' }} value="comic">comic</option>
          </select>
        </div>
        <div class="form-group">
          <textarea name="synopsis" id="synopsis" cols="30" rows="10" class="form-control input-lg" placeholder="Synopsis">{{ old('synopsis') ?? $movie->synopsis }}</textarea>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-3 col-md-3">
					<span class="button-checkbox">
						<button type="button" class="btn" data-color="info" tabindex="7">Active</button>
            <input type="checkbox" {{ old('active') === '1' || $movie->active === '1' ? 'checked' : '' }} name="active" id="active" class="hidden" value="1">
					</span>
          </div>
        </div>

        <hr class="colorgraph">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" tabindex="7">
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  $(function () {
    $('.button-checkbox').each(function () {

      // Settings
      var $widget = $(this),
        $button = $widget.find('button'),
        $checkbox = $widget.find('input:checkbox'),
        color = $button.data('color'),
        settings = {
          on: {
            icon: 'glyphicon glyphicon-check'
          },
          off: {
            icon: 'glyphicon glyphicon-unchecked'
          }
        };

      // Event Handlers
      $button.on('click', function () {
        $checkbox.prop('checked', !$checkbox.is(':checked'));
        $checkbox.triggerHandler('change');
        updateDisplay();
      });
      $checkbox.on('change', function () {
        updateDisplay();
      });

      // Actions
      function updateDisplay() {
        var isChecked = $checkbox.is(':checked');

        // Set the button's state
        $button.data('state', (isChecked) ? "on" : "off");

        // Set the button's icon
        $button.find('.state-icon')
          .removeClass()
          .addClass('state-icon ' + settings[$button.data('state')].icon);

        // Update the button's color
        if (isChecked) {
          $button
            .removeClass('btn-default')
            .addClass('btn-' + color + ' active');
        }
        else {
          $button
            .removeClass('btn-' + color + ' active')
            .addClass('btn-default');
        }
      }

      // Initialization
      function init() {

        updateDisplay();

        // Inject the icon if applicable
        if ($button.find('.state-icon').length == 0) {
          $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
        }
      }

      init();
    });
  });
</script>


</body>
</html>