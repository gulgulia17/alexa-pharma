<?php

namespace App\Filament\Resources;

use Filament\Tables;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Models\ContactRequest;
use Filament\Resources\Resource;
use App\Enums\ContactRequestType;
use Filament\Tables\Columns;
use App\Filament\Resources\ContactRequestResource\Pages;

class ContactRequestResource extends Resource
{
    protected static ?string $model = ContactRequest::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit(\Illuminate\Database\Eloquent\Model $record): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Full Name')
                    ->disabled(),

                Forms\Components\TextInput::make('email')
                    ->label('Email Address')
                    ->disabled(),

                Forms\Components\TextInput::make('phone')
                    ->label('Phone Number')
                    ->disabled(),

                Forms\Components\TextInput::make('city')
                    ->label('City')
                    ->disabled(),

                Forms\Components\TextInput::make('state')
                    ->label('State')
                    ->disabled(),

                Forms\Components\Select::make('type')
                    ->label('Form Type')
                    ->options([
                        ContactRequestType::Contact->value => 'Contact',
                        ContactRequestType::Opportunity->value => 'Opportunity Inquiry',
                    ])
                    ->disabled(),

                Forms\Components\Select::make('experience')
                    ->label('Pharma Experience')
                    ->options([
                        'fresher' => 'Fresher',
                        '1-3' => '1–3 Years',
                        '3-5' => '3–5 Years',
                        '5+' => '5+ Years',
                    ])
                    ->disabled(),

                Forms\Components\Textarea::make('message')
                    ->label('Message')
                    ->rows(6)
                    ->disabled(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Columns\TextColumn::make('name')->searchable(),
                Columns\TextColumn::make('email')->searchable(),
                Columns\BadgeColumn::make('type')
                    ->label('Form Type')
                    ->colors([
                        ContactRequestType::Contact->value => 'primary',
                        ContactRequestType::Opportunity->value => 'success',
                    ])
                    ->formatStateUsing(fn(ContactRequestType $state) => $state->label())
                    ->sortable(),
                Columns\TextColumn::make('phone')->label('Phone')->toggleable(),
                Columns\TextColumn::make('city')->label('City')->toggleable(),
                Columns\TextColumn::make('state')->label('State')->toggleable(),
                Columns\TextColumn::make('experience')->label('Experience')->toggleable(),
                Columns\TextColumn::make('created_at')->label('Submitted At')->dateTime('d M Y, h:i A')->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        ContactRequestType::Contact->value => 'Contact',
                        ContactRequestType::Opportunity->value => 'Opportunity',
                    ])
                    ->label('Form Type'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContactRequests::route('/'),
            'view' => Pages\ViewContactRequest::route('/{record}'),
        ];
    }
}
