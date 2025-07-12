<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = require database_path('data/products.php');

        foreach ($products as $product) {
            \App\Models\Product::create([
                'slug' => $product['id'],
                'name' => $product['name'],
                'type' => $product['type'],
                'composition' => $product['composition'],
                'strength' => $product['strength'] ?? null,
                'pack' => $product['pack'],
                'packing' => $product['packing'],
                'category' => $product['category'],
                'image' => $product['image'],
            ]);
        }
    }
}
