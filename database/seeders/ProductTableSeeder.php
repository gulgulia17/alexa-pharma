<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductTableSeeder extends Seeder
{
    public function run(): void
    {

        $products = collect(include '/home/muditubuntu/Downloads/products_seeder_array.php')
            ->map(function ($product) {

                $cleanName = $this->normalizeName($product['name']);

                return [
                    'category_id' => $product['category_id'],
                    'name'        => $cleanName,
                    'slug'        => Str::slug($cleanName),
                    'type'        => $product['type'] ?? 'other_preparation',

                    // Clean compositions JSON
                    'compositions' => $this->cleanCompositions($product['compositions'] ?? null),

                    // Normalize pack/size/packing
                    'pack'         => $this->normalizePack($product['pack'] ?? null),
                    'size'         => !empty($product['size']) ? trim($product['size']) : null,
                    'packing'      => !empty($product['packing']) ? trim($product['packing']) : null,

                    // Defaults
                    'image'        => $product['image'] ?? null,
                    'is_featured'  => $product['is_featured'] ?? false,
                    'created_at'   => now(),
                    'updated_at'   => now(),
                ];
            });

        DB::table('products')->insert($products->toArray());
    }

    private function cleanCompositions($compositions)
    {
        if (!$compositions) return json_encode([]);

        $decoded = is_string($compositions) ? json_decode($compositions, true) : $compositions;

        if (!is_array($decoded)) return json_encode([]);

        $decoded = array_map(fn($c) => ucfirst(trim($c)), $decoded);

        return json_encode(array_values(array_unique($decoded)));
    }

    private function normalizeName($name)
    {
        $name = trim($name);
        // Remove extra spaces around dashes and parentheses
        $name = preg_replace('/\s*-\s*/', '-', $name);        // SAFE -100 -> SAFE-100
        $name = preg_replace('/\s*\(\s*/', ' (', $name);      // (LB) -> (LB)
        $name = preg_replace('/\s*\)\s*/', ')', $name);
        // Collapse multiple spaces into one
        $name = preg_replace('/\s+/', ' ', $name);
        return $name;
    }

    private function normalizePack($pack)
    {
        if (!$pack) return null;

        $pack = trim($pack);
        // If only a number, append mg
        if (preg_match('/^\d+$/', $pack)) {
            $pack .= ' mg';
        }
        return $pack;
    }
}
