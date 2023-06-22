<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;
    protected $products = "product_tikis";
    function type_products() {
        return $this->hasMany(type_products::class);
    }


}
