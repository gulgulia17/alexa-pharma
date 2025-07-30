<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoryTableSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Tablets & Capsules',
            'Nutritional & Food Supplements',
            'Liquids, Drops & Dry Syrups',
            'Injections',
            'Ointments & Solutions',
            'Other Preparations',
            'Newly Added Products'
        ];

        foreach ($categories as $cat) {
            DB::table('categories')->insert([
                'name' => $cat,
                'slug' => Str::slug($cat),
                'description' => null,
                'icon' => null,
                'image' => null,
                'sku_count' => 0,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
