<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\type_products;
use Illuminate\Http\Request;

class TypeProductController extends Controller
{
    public function index()
    {
        $typeProducts = type_products::all();
        return response()->json($typeProducts);
    }

    public function store(Request $request)
    {
        $typeProduct = new  type_products();
        $typeProduct->name = $request->input('name');
        $typeProduct->save();
        return response()->json($typeProduct, 201);
    }

    public function show(string $typeProduct)
    {
        $typeProduct =type_products::find($typeProduct);
        return response()->json($typeProduct);
    }

    public function update(Request $request, string $id)
    {
        $typeProduct =type_products::find($id);
        $typeProduct->name= $request->input('name');
        $typeProduct->save();
        return response()->json($typeProduct);
    }

    public function destroy(type_products $typeProduct)
    {
        $typeProduct->delete();
        return response()->json(null, 204);
    }
}
