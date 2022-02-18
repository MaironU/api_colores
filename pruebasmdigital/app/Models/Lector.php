<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lector extends Model
{
    use HasFactory;

    protected $fillable = ["name", "document_number", "address", "phone"];
    protected $table = "lectors";

    public function borrowed_books(){
        return $this->belongsToMany(Book::class, "borrowed_books")
        ->withTimestamps();
    }
}
