<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'title',
        'description',
        'logo',
        'phone',
        'email',
        'address',
        'footer_text'
    ];
}
