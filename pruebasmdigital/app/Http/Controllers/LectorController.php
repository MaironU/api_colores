<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lector;
use App\Traits\MessageTrait;
use Illuminate\Support\Facades\DB;

class LectorController extends Controller
{
    use MessageTrait;

    private $lector;

    public function __construct(Lector $lector){
        $this->lector = $lector;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lectors = $this->lector::with('borrowed_books')->get();
        return $this->successResponse($lectors);
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
            $this->lector::create($request->all());

            DB::commit();
            return $this->showMessage("Lector Creado Correctamente");
        }catch(\Exception $e){
            return $this->errorResponse("Error al crear lector", 500);
            DB::rollback();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lector = $this->lector::with('borrowed_books')
        ->where('id', $id)->first();
        try{
            return $this->successResponse($lector);
        }catch(\Exception $e){
            return $this->errorResponse("Lector no existe");
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
