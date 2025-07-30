<?php

namespace App\Filament\Resources\AboutResource\Pages;

use App\Filament\Resources\AboutResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class About extends EditRecord
{
    protected static string $resource = AboutResource::class;

    public \Illuminate\Database\Eloquent\Model|int|string|null $record;
    public ?array $data = [];

    public function mount($record = 1): void
    {
        parent::mount($record);
        $this->form->fill(array_merge(
            $this->record->toArray(),
            ['data' => []],
        ));
    }
}
