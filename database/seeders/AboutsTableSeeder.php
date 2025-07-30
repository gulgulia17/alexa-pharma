<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('abouts')->insert([
            [
                'title' => 'About Our Pharmacy',
                'subtitle' => 'Caring for your health',
                'who_we_are' => 'We are a trusted pharmacy serving the community.',
                'mission' => 'To provide safe and affordable healthcare.',
                'vision' => 'To be the leading healthcare provider in the region.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
