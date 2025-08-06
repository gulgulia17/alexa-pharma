<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    public function index()
    {
        return Inertia::render('web/search');
    }

    public function show(Request $request)
    {
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
            ->orWhere('compositions', 'LIKE', "%{$query}%")
            ->orWhereHas('category', function ($q) use ($query) {
                $q->where('name', 'LIKE', "%{$query}%");
            })
            ->get();

        return response()->json($products);
    }
}
