<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;
    protected static ?string $navigationGroup = 'Website Content';
    protected static ?string $navigationIcon = 'heroicon-o-cube';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('category_id')
                ->relationship('category', 'name')
                ->required(),

            Forms\Components\TextInput::make('name')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('slug')
                ->maxLength(255)
                ->hint('Auto-generated if left empty'),

            Forms\Components\Select::make('type')
                ->options(Product::TYPES)
                ->default('tablet')
                ->required(),

            // JSON compositions as tags input
            Forms\Components\TagsInput::make('compositions')
                ->placeholder('Enter active ingredients...')
                ->suggestions(['Paracetamol', 'Cefixime', 'Azithromycin'])
                ->helperText('Add multiple compositions'),

            Forms\Components\TextInput::make('pack')
                ->label('Pack (e.g., 100mg)')
                ->maxLength(255),

            Forms\Components\TextInput::make('size')
                ->label('Size (e.g., 10x10)')
                ->maxLength(255),

            Forms\Components\TextInput::make('packing')
                ->label('Packing (e.g., Alu-Alu)')
                ->maxLength(255),

            Forms\Components\FileUpload::make('image')
                ->image()
                ->directory('products'),

            Forms\Components\Toggle::make('is_featured')
                ->label('Featured Product')
                ->default(false),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('category.name')->label('Category')->sortable(),

            Tables\Columns\TextColumn::make('name')->searchable(),

            Tables\Columns\TextColumn::make('slug')->searchable(),

            Tables\Columns\TextColumn::make('compositions_list')
                ->label('Compositions')
                ->limit(40)
                ->tooltip(fn($record) => $record->compositions_list),

            Tables\Columns\TextColumn::make('full_pack_info')
                ->label('Pack Info')
                ->badge(),

            Tables\Columns\TextColumn::make('type')
                ->label('Type')
                ->formatStateUsing(fn($state) => Product::TYPES[$state] ?? ucfirst($state))
                ->badge(),

            Tables\Columns\ImageColumn::make('image'),

            Tables\Columns\IconColumn::make('is_featured')->boolean(),

            Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),

            Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
        ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
