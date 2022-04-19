<?php

namespace App\Traits;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

trait ApiResponser
{
    protected function successResponse($data, $xml = false, $message = null, $code = 200)
	{
        if($xml == 1){
            return response()->xml([
                'data'          => $data->toArray(),
                'message'       => $message,
                'response'      => true,
                'code'          => $code,
            ]);
        }else{
            return response()->json([
                'data'          => $data,
                'message'       => $message,
                'response'      => true,
                'code'          => $code,
            ]);
        }
	}

	protected function errorResponse($message, $xml = false, $code, $response = false)
	{
        if($xml == 1){
            return response()->xml([
                'error'         => $message,
                'response'      => $response,
                'code'          => $code,
            ]);
        }else{
            return response()->json([
                'error'         => $message,
                'response'      => $response,
                'code'          => $code,
            ]);
        }
    }

    protected function showMessage($message, $xml = false, $code = 200, $response = true)
    {
        if($xml == 1){
            return response()->xml([
                'message'       => $message,
                'response'      => $response,
                'code'          => $code,
            ]);
        }else{
            return response()->json([
                'message'       => $message,
                'response'      => $response,
                'code'          => $code,
            ]);
        }

    }
}
