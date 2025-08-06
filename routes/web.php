<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\{
    HomeController,
    AboutController,
    ContactController,
    ProductController,
    SearchController,
    OpportunityController,
    LegalController
};
use App\Http\Controllers\DashboardController;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('about', [AboutController::class, 'index'])->name('about');
Route::get('contact', [ContactController::class, 'index'])->name('contact');
Route::post('contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('products', [ProductController::class, 'index'])->name('products');
Route::get('products/{product}', [ProductController::class, 'show'])->name('product.show');
Route::get('search', [SearchController::class, 'index'])->name('search');
Route::get('opportunity', [OpportunityController::class, 'index'])->name('opportunity');
Route::post('/opportunity', [OpportunityController::class, 'store'])->name('opportunity.store');

Route::get('privacy', [LegalController::class, 'show'])->defaults('slug', 'privacy-policy')->name('privacy');
Route::get('terms', [LegalController::class, 'show'])->defaults('slug', 'terms')->name('terms');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
