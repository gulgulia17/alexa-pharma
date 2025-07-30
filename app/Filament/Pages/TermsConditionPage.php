<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Concerns\InteractsWithForms;
use App\Models\StaticPage;
use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Notifications\Notification;

class TermsConditionPage extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $title = 'Terms & Conditions';
    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Static Pages';
    protected static ?string $navigationLabel = 'Terms & Conditions';
    protected static string $view = 'filament.pages.static';
    protected static bool $shouldRegisterNavigation = true;
    protected static ?int $navigationSort = 1;

    public StaticPage $record;
    public array $data = [];

    public function mount(): void
    {
        $this->record = StaticPage::where('slug', 'terms')->firstOrFail();
        $this->form->fill($this->record->toArray());
    }

    public function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('title')->disabled(),
            RichEditor::make('content')->columnSpanFull(),
        ])
            ->model($this->record)
            ->statePath('data');
    }

    public function save(): void
    {
        $this->record->update($this->form->getState());
        Notification::make()->title('Updated')->success()->send();
    }
}
