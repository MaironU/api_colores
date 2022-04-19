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
        Color::create(["name" => "cerulean", "color" => "#98B2D1", "year" => "2000", "pantone_value" => "15-4020"]);
        Color::create(["name" => "fuchsia rose", "color" => "#C74375", "year" => "2001", "pantone_value" => "17-2031"]);
        Color::create(["name" => "true red", "color" => "#BF1932", "year" => "2002", "pantone_value" => "19-1664"]);
        Color::create(["name" => "aqua sky", "color" => "#7BC4C4", "year" => "2003", "pantone_value" => "14-4811"]);
        Color::create(["name" => "tigerlily", "color" => "#E2583E", "year" => "2004", "pantone_value" => "17-1456"]);
        Color::create(["name" => "blue turquoise", "color" => "#53B0AE", "year" => "2005", "pantone_value" => "15-5217"]);
        Color::create(["name" => "sand dollar", "color" => "#DECDBE", "year" => "2006", "pantone_value" => "13-1106"]);
        Color::create(["name" => "chili pepper", "color" => "#9B1B30", "year" => "2007", "pantone_value" => "19-1557"]);
        Color::create(["name" => "blue iris", "color" => "#5A5B9F", "year" => "2008", "pantone_value" => "18-3943"]);
        Color::create(["name" => "mimosa", "color" => "#F0C05A", "year" => "2009", "pantone_value" => "14-0848"]);
        Color::create(["name" => "turquoise", "color" => "#45B5AA", "year" => "2010", "pantone_value" => "15-5519"]);
        Color::create(["name" => "honeysuckle", "color" => "#D94F70", "year" => "2011", "pantone_value" => "18-2120"]);
    }
}
