<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use App\Models\StaticPage;
use App\Http\Controllers\Controller;

class LegalController extends Controller
{
    public function show($slug)
    {
        $page = StaticPage::where('slug', $slug)->firstOrFail();

        return Inertia::render('web/static', [
            'title' => $page->title,
            'content' => $page->content,
        ]);
    }
}
