<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WhyChooseUsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('why_choose_us')->insert([
            [
                'title' => 'Quality Medicines',
                'description' => 'We provide only authentic medicines.',
                'icon' => 'fa-pills',
                'is_active' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
