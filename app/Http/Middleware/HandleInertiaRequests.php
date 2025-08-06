<?php

namespace App\Http\Middleware;

use App\Models\About;
use App\Models\Award;
use App\Models\Setting;
use Inertia\Middleware;
use App\Models\Category;
use Tighten\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Cache;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn(): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',

            // Cached for 24 hours (1440 minutes)
            'settings' => Cache::remember('settings_cache', 1440, fn() => Setting::first()),
            'about' => Cache::remember('about_cache', 1440, fn() => About::first()),
            'categories' => Cache::remember(
                'featured_categories_cache',
                1440,
                fn() =>
                Category::where('is_featured', 1)->get()
            ),
            'awards' => Cache::remember(
                'featured_awards_cache',
                1440,
                fn() =>
                Award::where('is_featured', 1)->get()
            ),
        ];
    }
}
