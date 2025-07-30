<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AwardsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('awards')->insert([
            [
                'title' => 'Best Pharmacy 2025',
                'description' => 'Awarded for outstanding customer service.',
                'image' => null,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
