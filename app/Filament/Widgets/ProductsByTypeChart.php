<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use App\Models\Category;
use Filament\Widgets\ChartWidget;

class ProductsByTypeChart extends ChartWidget
{
    protected static ?string $heading = 'Products by Category & Type';
    protected int|string|array $columnSpan = 'full';

    protected function getData(): array
    {
        // Fetch all categories (for labels)
        $categories = Category::pluck('name', 'id')->toArray();
        $types = Product::TYPES;

        // Initialize dataset structure
        $dataset = [];
        foreach ($types as $key => $label) {
            $dataset[$key] = array_fill_keys(array_keys($categories), 0);
        }

        // Query product counts grouped by category and type
        $products = Product::selectRaw('category_id, type, COUNT(*) as total')
            ->groupBy('category_id', 'type')
            ->get();

        foreach ($products as $product) {
            if (isset($dataset[$product->type][$product->category_id])) {
                $dataset[$product->type][$product->category_id] = $product->total;
            }
        }

        // Convert dataset for chart.js format
        $datasets = [];
        $colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1', '#ec4899', '#14b8a6', '#8b5cf6', '#6b7280'];
        $colorIndex = 0;

        foreach ($dataset as $typeKey => $values) {
            $datasets[] = [
                'label' => $types[$typeKey] ?? ucfirst($typeKey),
                'data' => array_values($values),
                'backgroundColor' => $colors[$colorIndex % count($colors)],
            ];
            $colorIndex++;
        }

        return [
            'datasets' => $datasets,
            'labels' => array_values($categories), // X-axis categories
        ];
    }

    protected function getType(): string
    {
        return 'bar'; // grouped bar chart
    }
}
