	<?php

use Illuminate\Database\Seeder;

class AudienceCountTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		\DB::table('audience_counts')->delete();

		\DB::table('audience_counts')->insert(array (
		0 => 
		array (
		    'id' => 1,
		    'max' => 100000,
		    'min' => 75000,
		    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
		    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
		)
		));

    }
}
