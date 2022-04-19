<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Color::create(["name" => "cerulean", "color" => "#98B2D1"]);
        Color::create(["name" => "fuchsia rose", "color" => "#C74375"]);
        Color::create(["name" => "true red", "color" => "#BF1932"]);
        Color::create(["name" => "aqua sky", "color" => "#7BC4C4"]);
        Color::create(["name" => "tigerlily", "color" => "#E2583E"]);
        Color::create(["name" => "blue turquoise", "color" => "#53B0AE"]);
        Color::create(["name" => "sand dollar", "color" => "#DECDBE"]);
        Color::create(["name" => "chili pepper", "color" => "#9B1B30"]);
        Color::create(["name" => "blue iris", "color" => "#5A5B9F"]);
        Color::create(["name" => "mimosa", "color" => "#F0C05A"]);
        Color::create(["name" => "turquoise", "color" => "#45B5AA"]);
        Color::create(["name" => "honeysuckle", "color" => "#D94F70"]);
    }
}
