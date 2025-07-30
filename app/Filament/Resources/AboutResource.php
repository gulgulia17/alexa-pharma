<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutResource\Pages;
use App\Models\About;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class AboutResource extends Resource
{
    protected static ?string $model = About::class;

    protected static ?string $navigationIcon = 'heroicon-o-information-circle';
    protected static ?string $navigationGroup = 'Website Content';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('title')->required(),
            Forms\Components\TextInput::make('subtitle'),
            Forms\Components\Textarea::make('who_we_are')->required()->columnSpanFull(),
            Forms\Components\Textarea::make('mission')->required()->columnSpanFull(),
            Forms\Components\Textarea::make('vision')->required()->columnSpanFull(),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\About::route('/'),
        ];
    }
}
