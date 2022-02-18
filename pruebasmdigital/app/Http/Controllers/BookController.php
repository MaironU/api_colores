<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\BorrowedBook;
use App\Models\Lector;
use App\Traits\MessageTrait;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    use MessageTrait;

    private $book;
    private $lector;

    public function __construct(Book $book, Lector $lector){
        $this->book = $book;
        $this->lector = $lector;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = $this->book->get();
        return $this->successResponse($books);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            DB::beginTransaction();
            $this->book::create($request->all());

            DB::commit();
            return $this->showMessage("Libro Creado Correctamente");
        }catch(\Exception $e){
            return $this->errorResponse("Error al crear libro", 500);
            DB::rollback();
        }
    }

    public function BorrowBook(Request $request){
        try{
            DB::beginTransaction();
            $book = $this->book->where('id', $request->book_id)->first();
            $lector = $this->lector->where('id', $request->lector_id)->first();

            if($book->borrowed == "SI") return $this->errorResponse("El libro no está disponible porque ya ha sido prestado");

            $lector->borrowed_books()->attach($request->book_id);
            $book->borrowed = "SI";
            $book->save();

            DB::commit();
            return $this->showMessage("Libro Prestado Correctamente");
        }catch(\Exception $e){
            return $this->errorResponse("Error al prestar el libro", 500);
            DB::rollback();
        }
    }

    public function ReturnBook(Request $request){
        try{
            DB::beginTransaction();
            $book = $this->book->where('id', $request->book_id)->first();
            $lector = $this->lector->where('id', $request->lector_id)->first();

            $lector->borrowed_books()->detach($request->book_id);
            $book->borrowed = "NO";
            $book->save();

            DB::commit();
            return $this->showMessage("Libro Devuelto Correctamente");
        }catch(\Exception $e){
            return $e;
            return $this->errorResponse("Error al devolver el libro", 500);
            DB::rollback();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        try{
            return $this->successResponse($book);
        }catch(\Exception $e){
            return $this->errorResponse("Libro no existe");
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
