<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Movie
 *
 * @property int $id
 * @property string $title
 * @property string $type
 * @property string|null $synopsis
 * @property string $director C'est le réalisateur !
 * @property string|null $producer
 * @property string $genre
 * @property string $release_date
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereDirector($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereGenre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereProducer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereReleaseDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereSynopsis($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Movie whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Movie extends Model
{
    protected $fillable = [
      'title',
      'synopsis',
      'director',
      'producer',
      'genre',
      'release_date',
      'active',
    ];
}
