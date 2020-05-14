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
		    'id' => 8,
		    'name' => 'Kashif',
		    'email' => 'elysiussales2019@gmail.com',
		    'password' => bcrypt('123456'),
		    'remember_token' => 'F8poPGkbyqQVMea9HiKE4BfERh1RRdvb4pvyL9nUEkQTAuTqHdEqe1xPOwSf',
		    'created_at' => '2019-09-28 05:27:36',
		    'updated_at' => '2019-09-28 05:27:36',
		),
		1 => 
		array (
		    'id' => 10,
		    'name' => 'Hashim',
		    'email' => 'hashim@hmail.com',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2019-10-17 14:38:20',
		    'updated_at' => '2019-10-17 14:39:11',
		),
		2 => 
		array (
		    'id' => 13,
		    'name' => 'Michael Thomas Smejkal',
		    'email' => 'mts-berlin@gmx.de',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2019-11-06 06:18:39',
		    'updated_at' => '2020-02-18 10:24:59',
		),
		3 => 
		array (
		    'id' => 14,
		    'name' => 'William Pusch',
		    'email' => 'fff@eu.xlm',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2019-11-20 18:41:39',
		    'updated_at' => '2019-11-20 18:49:17',
		),
		4 => 
		array (
		    'id' => 15,
		    'name' => 'Rudolf Pusch',
		    'email' => 'rudolf.pusch@hotmail.de',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2019-11-21 11:33:12',
		    'updated_at' => '2019-11-25 09:00:44',
		),
		5 => 
		array (
		    'id' => 16,
		    'name' => 'Abdul',
		    'email' => 'hashim@gmail.com',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2019-11-23 19:50:39',
		    'updated_at' => '2019-11-24 07:09:24',
		),
		6 => 
		array (
		    'id' => 17,
		    'name' => 'Tanja Bader',
		    'email' => 't.bader@elysius.eu',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2019-11-25 15:44:34',
		    'updated_at' => '2019-11-25 15:45:05',
		),
		7 => 
		array (
		    'id' => 18,
		    'name' => 'kashif',
		    'email' => 'ap@gmail.com',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2020-01-19 15:14:07',
		    'updated_at' => '2020-01-19 15:14:07',
		),
		8 => 
		array (
		    'id' => 21,
		    'name' => 'Stephan Balling',
		    'email' => 's.balling@elysius.eu',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2020-03-03 12:40:22',
		    'updated_at' => '2020-03-03 12:40:28',
		),
		9 => 
		array (
		    'id' => 22,
		    'name' => 'yg',
		    'email' => 'iftihussain4u@gmail.com',
		    'password' => bcrypt("123456"),
		    'remember_token' => NULL,
		    'created_at' => '2020-03-12 10:33:00',
		    'updated_at' => '2020-03-12 10:33:00',
		),
		));

    }
}
