<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('web/about');
    }
}
