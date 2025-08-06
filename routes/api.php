<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\SearchController;

Route::get('products/search', [SearchController::class, 'show']);
