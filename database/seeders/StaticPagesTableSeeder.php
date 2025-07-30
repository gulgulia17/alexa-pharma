<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StaticPagesTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('static_pages')->insert([
            [
                'slug' => 'privacy-policy',
                'title' => 'Privacy Policy',
                'content' => 'Your privacy is important to us.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'terms',
                'title' => 'Terms & Conditions',
                'content' => 'Your Terms & Conditions is important to us.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
