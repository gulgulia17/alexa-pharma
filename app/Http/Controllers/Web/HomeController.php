<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Testimonial;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('welcome', [
            'productCount' => Product::count(),
            'testimonials' => Testimonial::where('is_featured', 1)->get(),
        ]);
    }
}
