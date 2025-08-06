<?php

namespace App\Enums;

enum ContactRequestType: string
{
    case Contact = 'contact';
    case Opportunity = 'opportunity';

    public function label(): string
    {
        return match ($this) {
            self::Contact => 'Contact',
            self::Opportunity => 'Opportunity Inquiry',
        };
    }
}
