<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		\DB::table('roles')->delete();

		\DB::table('roles')->insert(array (
		0 => 
		array (
		    'id' => 1,
		    'title' => 'admin',
		    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
		    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
		),
		1 => 
		array (
		    'id' => 2,
		    'title' => 'user',
		    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
		    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
		)
		
		));

    }
}
