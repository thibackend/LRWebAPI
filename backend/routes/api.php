<?php

use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\TypeProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(ProductController::class)
->group(
    function () {
        Route::get('products',"index");
        Route::get('products/{id}',"show");
        Route::post('products/{id}',"update");
        Route::post('products',"store");
        Route::delete('products/{id}',"destroy");
        
    }
);
Route::controller(TypeProductController::class)
->group(
    function () {
        Route::get('type_products',"index");
        Route::get('type_products/{id}',"show");
        Route::post('type_products/{id}',"update");
        Route::post('type_products',"store");
        Route::delete('type_products/{id}',"destroy");
        
    }
);
