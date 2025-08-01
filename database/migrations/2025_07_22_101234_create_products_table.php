<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->string('name');
            $table->string('slug');
            $table->enum('type', ['tablet', 'capsule', 'syrup', 'dry_syrup', 'injection', 'ointment', 'solution', 'nutraceutical', 'other_preparation'])->nullable();
            $table->longText('compositions')->nullable();
            $table->string('pack')->nullable();
            $table->string('size')->nullable();
            $table->string('packing')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
