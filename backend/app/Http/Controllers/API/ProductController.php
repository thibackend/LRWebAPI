<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = products::all();
        // if (!$products) :
        return response()->json($products);
        // endif;
        // return response()->json(['msg'=>'NO PRODUCT']);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'type_product_id' => 'required|exists:type_products,id',
            'name' => 'required|string',
            'img' => 'required|string',
            'price' => 'required|numeric',
            'desc' => 'nullable|string',
            'qty' => 'required|integer',
            'star' => 'required|integer',
            'status' => 'required|boolean',
        ]);

        $product = new products();
        $product->type_product_id = $request->input('type_product_id');
        $product->name = $request->input('name');
        $product->img = $request->input('img');
        $product->price = $request->input('price');
        $product->desc = $request->input('desc');
        $product->qty = $request->input('qty');
        $product->star = $request->input('star');
        $product->status = $request->input('status');
        $product->save();

        return response()->json($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $product = products::findOrFail($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'type_product_id' => 'required|exists:type_products,id',
            'name' => 'required|string',
            'img' => 'required|string',
            'price' => 'required|numeric',
            'desc' => 'nullable|string',
            'qty' => 'required|integer',
            'star' => 'required|integer',
            'status' => 'required|boolean',
        ]);

        $product = products::findOrFail($id);
        $product->type_product_id = $request->input('type_product_id');
        $product->name = $request->input('name');
        $product->img = $request->input('img');
        $product->price = $request->input('price');
        $product->desc = $request->input('desc');
        $product->qty = $request->input('qty');
        $product->star = $request->input('star');
        $product->status = $request->input('status');
        $product->save();

        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = products::findOrFail($id);
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
        //
    }
}
