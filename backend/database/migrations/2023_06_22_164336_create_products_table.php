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
            $table->unsignedBigInteger('type_product_id');
            $table->string('name');
            $table->string('img');
            $table->decimal('price', 8, 2);
            $table->text('desc')->nullable();
            $table->integer('qty');
            $table->integer('star');
            $table->boolean('status')->default(true);
            $table->foreign('type_product_id')->references("id")->on('type_products');
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
