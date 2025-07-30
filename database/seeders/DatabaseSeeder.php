<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategoryTableSeeder::class,
            ProductTableSeeder::class,
            TestimonialsTableSeeder::class,
            AwardsTableSeeder::class,
            WhyChooseUsTableSeeder::class,
            AboutsTableSeeder::class,
            FaqsTableSeeder::class,
            StaticPagesTableSeeder::class,
            SettingsTableSeeder::class
        ]);
    }
}
