<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'type',
        'compositions',
        'pack',
        'size',
        'packing',
        'image',
        'is_featured',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
    ];

    /**
     * Ensure custom accessors are included in JSON responses
     */
    protected $appends = [
        'full_pack_info',
        'type_label',
    ];

    const TYPES = [
        'capsule' => 'Capsule',
        'drop' => 'Drop',
        'dry_syrup' => 'Dry Syrup',
        'injection' => 'Injection',
        'lotion' => 'Lotion',
        'nutraceutical' => 'Nutraceutical',
        'ointment' => 'Ointment',
        'other_preparation' => 'Other Preparation',
        'solution' => 'Solution',
        'suspension' => 'Suspension',
        'syrup' => 'Syrup',
        'tablet' => 'Tablet',
    ];

    /**
     * Boot method to auto-normalize name & slug.
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($product) {
            $product->name = self::normalizeName($product->name);
            $product->slug = Str::slug($product->name);
        });
    }

    /**
     * Normalize product name (remove extra spaces & fix formatting).
     */
    public static function normalizeName($name)
    {
        $name = trim($name);
        $name = preg_replace('/\s*-\s*/', '-', $name);     // "SAFE -100" -> "SAFE-100"
        $name = preg_replace('/\s*\(\s*/', ' (', $name);   // "( LB )" -> "(LB)"
        $name = preg_replace('/\s*\)\s*/', ')', $name);
        $name = preg_replace('/\s+/', ' ', $name);
        return $name;
    }

    /**
     * Relationship: Get the category this product belongs to.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Accessor: Get full pack info as a formatted string.
     */
    public function getFullPackInfoAttribute()
    {
        $parts = array_filter([$this->pack, $this->size, $this->packing]);
        return implode(' | ', $parts);
    }

    /**
     * Accessor: Get user-friendly type label.
     */
    public function getTypeLabelAttribute()
    {
        return self::TYPES[$this->type] ?? ucfirst($this->type);
    }
}
