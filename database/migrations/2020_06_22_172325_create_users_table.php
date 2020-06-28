<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->bigInteger('id', true)->unsigned();
			$table->integer('role_id')->unsigned();
			$table->string('first_name');
			$table->string('last_name')->nullable();
			$table->string('email')->unique();
			$table->string('password')->nullable();
			$table->text('provider_access_token', 65535)->nullable();
			$table->string('provider_id')->nullable();
			$table->string('provider')->nullable();
			$table->string('expires_in')->nullable();
			$table->text('image', 65535)->nullable();
			$table->string('remember_token', 100)->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
