<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'type',
        'composition',
        'strength',
        'pack',
        'packing',
        'category',
        'image',
    ];
}
