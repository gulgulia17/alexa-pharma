<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FaqsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('faqs')->insert([
            [
                'question' => 'Do you offer home delivery?',
                'answer' => 'Yes, we provide free home delivery within the city.',
                'is_active' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
