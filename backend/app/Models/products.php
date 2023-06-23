<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;
    protected $products = "products";
    function type_products() {
        return $this->belongsTo(type_products::class);
    }


}
