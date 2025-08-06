<?php

namespace App\Models;

use App\Enums\ContactRequestType;
use Illuminate\Database\Eloquent\Model;

class ContactRequest extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'subject',
        'message',
        'city',
        'state',
        'experience',
        'type',
    ];

    protected $casts = [
        'type' => ContactRequestType::class,
    ];
}
