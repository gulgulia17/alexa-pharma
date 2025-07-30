<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Concerns\InteractsWithForms;

class Settings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $title = 'Website Settings';
    protected static ?string $navigationIcon = 'heroicon-o-cog';
    protected static ?string $navigationGroup = 'Settings';
    protected static ?string $navigationLabel = 'Site Settings';
    protected static string $view = 'filament.pages.settings';
    protected static bool $shouldRegisterNavigation = true;
    protected static ?int $navigationSort = 2;

    public Setting $record;
    public array $data = [];

    public function mount(): void
    {
        $this->record = Setting::first();
        $this->form->fill($this->record->toArray());
    }

    public function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('title')->label('Website Name')->required(),
            Textarea::make('description')->label('Description'),
            FileUpload::make('logo')->label('Logo')->directory('logos')->image()->maxSize(1024),
            TextInput::make('phone')->label('Phone'),
            TextInput::make('email')->label('Email')->email(),
            TextInput::make('address')->label('Address'),
            Textarea::make('footer_text')->label('Footer Text'),
        ])
            ->model($this->record)
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();
        $settings = Setting::first() ?? new Setting();
        $settings->fill($data)->save();

        Notification::make()
            ->title('Settings Updated Successfully')
            ->success()
            ->send();
    }
}
