<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('testimonials')->truncate();
        DB::table('testimonials')->insert([
            [
                'name' => 'Rajesh Sharma',
                'location' => 'Mumbai, Maharashtra',
                'message' => 'Alexa Biopharma has been our trusted partner for years. Their commitment to quality and timely delivery is truly impressive.',
                'rating' => 5,
                'photo' => null,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Priya Menon',
                'location' => 'Bengaluru, Karnataka',
                'message' => 'We appreciate the professionalism and customer support. Their WHO-GMP facilities give us confidence in every product.',
                'rating' => 5,
                'photo' => null,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Arvind Patel',
                'location' => 'Ahmedabad, Gujarat',
                'message' => 'High-quality and affordable solutions — Alexa Biopharma is playing a key role in helping us serve our patients better.',
                'rating' => 4,
                'photo' => null,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sunita Rao',
                'location' => 'Hyderabad, Telangana',
                'message' => 'Their team is extremely reliable. From order to delivery, everything is smooth and transparent.',
                'rating' => 5,
                'photo' => null,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Vikram Singh',
                'location' => 'Delhi NCR',
                'message' => 'Alexa Biopharma consistently meets our expectations with top-notch pharmaceutical products and excellent service.',
                'rating' => 5,
                'photo' => null,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
