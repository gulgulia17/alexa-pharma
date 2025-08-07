<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('web/products', [
            'categories' => Category::withCount('products')->get(),
            'products' => Product::with('category')->where('is_featured', 1)->get(),
            'sku_count' => Product::count()
        ]);
    }

    public function show($product)
    {
        $category = Category::where('slug', $product)->firstOrFail();
        $products = Product::where('category_id', $category->id)->get();

        return Inertia::render('web/product/details', [
            'category' => $category,
            'products' => $products
        ]);
    }
}
