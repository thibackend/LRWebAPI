<?php

namespace Database\Seeders;

use App\Models\products;
use App\Models\type_products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $type_product = type_products::pluck('id')->all();
        $faker = Faker::create();
        if ($type_product) :
            // Generate fake data for products
            for ($i = 0; $i < 10; $i++) {
                $product = new products();
                $product->type_product_id = $faker->randomElement($type_product);
                $product->img = $faker->image('public/storage/images', 200, 200, null, false);
                $product->name = $faker->word;
                $product->price = $faker->randomFloat(2, 10, 1000);
                $product->desc = $faker->paragraph;
                $product->qty = $faker->numberBetween(1, 100);
                $product->star = $faker->numberBetween(1, 5);
                $product->status = $faker->boolean(80); // 80% chance of being true
                $product->save();
            }
        else :
            echo "NOT FOUND TYPE PRODUCT";
        endif;
    }
}
