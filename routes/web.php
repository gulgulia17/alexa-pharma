<?php

use App\Models\About;
use App\Models\Award;
use App\Models\Category;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'settings' => Setting::first(),
        'productCount' => Product::count(),
        'about' => About::first(),
        'categories' => Category::where('is_featured', 1)->get(),
        'awards' => Award::where('is_featured', 1)->get(),
        'testimonials' => Testimonial::where('is_featured', 1)->get(),
    ]);
})->name('home');

Route::get('about', function () {
    return Inertia::render('web/about');
})->name('about');

Route::get('contact', function () {
    return Inertia::render('web/contact');
})->name('contact');

Route::get('products', function () {
    return Inertia::render('web/products', [
        'categories' => Category::withCount('products')->get(),
        'products' => Product::with('category')->where('is_featured', 1)->get()
    ]);
})->name('products');

Route::get('products/{product}', function ($product) {
    $category = Category::where('slug', $product)->first();
    $products = Product::where('category_id', $category->id)->get();

    return Inertia::render('web/product/details', [
        'category' => $category,
        'products' => $products
    ]);
})->name('product.show');

Route::get('search', function () {
    return Inertia::render('web/search');
})->name('search');

Route::get('opportunity', function () {
    return Inertia::render('web/opportunity');
})->name('opportunity');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
