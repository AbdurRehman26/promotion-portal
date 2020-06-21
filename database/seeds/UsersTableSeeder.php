<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		\DB::table('users')->delete();

		\DB::table('users')->insert(array (
		0 => 
		array (
		    'id' => 1,
		    'name' => 'Kazmi',
		    'email' => 'sydabdrehman@gmail.com',
		    'password' => bcrypt('sydabdrehman@gmail.com'),
		    'remember_token' => 'F8poPGkbyqQVMea9HiKE4BfERh1RRdvb4pvyL9nUEkQTAuTqHdEqe1xPOwSf',
		    'created_at' => '2019-09-28 05:27:36',
		    'updated_at' => '2019-09-28 05:27:36',
		)
		));

    }
}
