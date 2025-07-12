<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/products', function () {
    $products = \App\Models\Product::all();
    return view('products.index', ['products' => $products]);
});
