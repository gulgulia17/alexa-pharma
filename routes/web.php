<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('about', function () {
    return Inertia::render('web/about');
})->name('about');

Route::get('contact', function () {
    return Inertia::render('web/contact');
})->name('contact');

Route::get('products', function () {
    return Inertia::render('web/products');
})->name('products');

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