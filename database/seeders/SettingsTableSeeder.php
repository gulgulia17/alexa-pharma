<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('settings')->insert([
            'title'       => 'My Pharmacy',
            'description' => 'Best pharmacy in town with quality medicines.',
            'logo'        => null,
            'phone'       => '+91 98765 43210',
            'email'       => 'info@pharmacy.com',
            'address'     => '123 Health Street, New Delhi',
            'footer_text' => '© 2025 My Pharmacy. All rights reserved.',
            'created_at'  => now(),
            'updated_at'  => now(),
        ]);
    }
}
