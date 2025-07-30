<?php

namespace App\Providers\Filament;

use Illuminate\{
    Session\Middleware\StartSession,
    Routing\Middleware\SubstituteBindings,
    View\Middleware\ShareErrorsFromSession,
    Foundation\Http\Middleware\VerifyCsrfToken
};
use Filament\{
    Pages,
    Panel,
    PanelProvider,
    Support\Colors\Color
};
use App\Filament\Pages\{
    PrivacyPolicyPage,
    TermsConditionPage
};
use Filament\Http\Middleware\{
    Authenticate,
    AuthenticateSession,
    DisableBladeIconComponents,
    DispatchServingFilamentEvent
};
use Illuminate\Cookie\Middleware\{
    EncryptCookies,
    AddQueuedCookiesToResponse
};

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->profile()
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
                PrivacyPolicyPage::class,
                TermsConditionPage::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
