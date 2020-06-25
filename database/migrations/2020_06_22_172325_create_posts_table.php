<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePostsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('posts', function(Blueprint $table)
		{
			$table->bigInteger('id', true);
			$table->text('link', 65535)->nullable();
			$table->text('image', 65535)->nullable();
			$table->bigInteger('user_id')->unsigned()->nullable();
			$table->bigInteger('approved_by')->unsigned()->nullable();
			$table->text('posted_link', 65535)->nullable();
			$table->text('posted_for', 65535)->nullable();
			$table->integer('audience_count_id')->unsigned()->nullable();
			$table->string('status', 45)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('posts');
	}

}
