<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsToHashtagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_to_hashtags', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_news');
            $table->unsignedBigInteger('id_hashtag');

            $table->foreign('id_news')
                ->references('id')
                ->on('news')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('id_hashtag')
                ->references('id')
                ->on('hashtags')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('news_to_hashtags', function (Blueprint $table) {
            $table->dropForeign('id_news');
            $table->dropForeign('id_hashtag');
        });

        Schema::dropIfExists('news_to_hashtags');
    }
}
