<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Color;
use App\Traits\ApiResponser;
use App\Http\Requests\ColorRequest;
use Illuminate\Support\Facades\DB;

class ColorController extends Controller
{
    use ApiResponser;

    private $color;

    public function __construct(Color $color){
        $this->color = $color;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $colores = $this->color->select('id', 'name', 'color')->get();
        return $this->successResponse($colores, $request->xml);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ColorRequest $request)
    {
        try{
            DB::beginTransaction();
            $color = $this->color::create($request->all());
            DB::commit();
            return $this->successResponse($color, $request->xml, "Color created successfully");
        }catch(\Exception $e){
            DB::rollback();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        try{
            $color = $this->color->findOrFail($id);
            return $this->successResponse($color, $request->xml);
        }catch(\Exception $e){
            return $this->errorResponse("Color not found",$request->xml, 404);
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
        try{
            DB::beginTransaction();
            $data = $request->all();
            $color = $this->color->findOrFail($id);
            $color->update($data);

            DB::commit();
            return $this->successResponse($color, $request->xml, "Color updated successfully");
        }catch(\Exception $e){
            return $this->errorResponse("Color not found", $request->xml, 404);
            DB::rollback();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        try{
            $color = $this->color->findOrFail($id);
            $color->delete();
            return $this->successResponse($color, $request->xml, "Color removed successfully");
        }catch(\Exception $e){
            return $this->errorResponse("Color not found", $request->xml, 404);
        }
    }
}
