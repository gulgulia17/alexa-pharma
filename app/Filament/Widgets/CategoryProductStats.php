<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use App\Models\Category;
use Filament\Widgets\StatsOverviewWidget\Card;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class CategoryProductStats extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Card::make('Total Categories', Category::count())
                ->description('All categories in the system')
                ->icon('heroicon-o-rectangle-stack')
                ->color('success'),

            Card::make('Featured Categories', Category::where('is_featured', true)->count())
                ->description('Highlighted categories')
                ->icon('heroicon-o-star')
                ->color('warning'),

            Card::make('Total Products', Product::count())
                ->description('All products')
                ->icon('heroicon-o-cube')
                ->color('primary'),

            Card::make('Featured Products', Product::where('is_featured', true)->count())
                ->description('Highlighted products')
                ->icon('heroicon-o-sparkles')
                ->color('info'),
        ];
    }
}
