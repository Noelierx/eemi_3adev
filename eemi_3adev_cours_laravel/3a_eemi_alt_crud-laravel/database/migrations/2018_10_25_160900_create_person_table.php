<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('persons', function (Blueprint $table) {
      $table->increments('id');

      $table->string('name', 100)->nullable()->comment('prenom de la personne');
      $table->string('surname', 100)->nullable();
      $table->string('email', 100)->unique();
      $table->string('password', 191);
      $table->boolean('check');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('persons');
  }
}
