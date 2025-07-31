<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('products/search', function (Request $request) {
    $query = $request->get('query', '');

    if (!$query) {
        return response()->json([]);
    }

    $products = Product::with('category')
        ->where('name', 'LIKE', "%{$query}%")
        ->orWhere('type', 'LIKE', "%{$query}%")
        ->orWhere('pack', 'LIKE', "%{$query}%")
        ->orWhere('size', 'LIKE', "%{$query}%")
        ->orWhere('packing', 'LIKE', "%{$query}%")
        ->orWhereJsonContains('compositions', $query)
        ->orWhereHas('category', function ($q) use ($query) {
            $q->where('name', 'LIKE', "%{$query}%");
        })
        ->get();

    return response()->json($products);
});
