<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterMoviesTableRenameAventureColumn extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('movies', function (Blueprint $table) {
      $table->dropColumn('genre');
    });
    Schema::table('movies', function (Blueprint $table) {
      $table->enum('genre', ['action', 'adventure', 'drama', 'comic'])->after('title');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('movies', function (Blueprint $table) {
      $table->dropColumn('genre');
    });
    Schema::table('movies', function (Blueprint $table) {
      $table->enum('genre', ['action', 'aventure', 'drama', 'comic'])->after('title');
    });
  }
}
