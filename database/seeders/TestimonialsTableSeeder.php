<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('testimonials')->insert([
            [
                'name' => 'John Doe',
                'location' => 'New York',
                'message' => 'Excellent service and friendly staff!',
                'rating' => 5,
                'photo' => null,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
