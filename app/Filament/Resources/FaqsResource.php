<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FaqsResource\Pages;
use App\Filament\Resources\FaqsResource\RelationManagers;
use App\Models\Faqs;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class FaqsResource extends Resource
{
    protected static ?string $model = Faqs::class;
    protected static ?string $navigationGroup = 'Website Content';
    protected static ?string $navigationIcon = 'heroicon-o-question-mark-circle';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Textarea::make('question')->required(),
                Forms\Components\Textarea::make('answer')->required(),
                Forms\Components\Toggle::make('is_active'),
                Forms\Components\TextInput::make('sort_order')->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('question')->searchable(),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('sort_order')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFaqs::route('/'),
            'create' => Pages\CreateFaqs::route('/create'),
            'edit' => Pages\EditFaqs::route('/{record}/edit'),
        ];
    }
}
