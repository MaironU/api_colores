<?php
    namespace App\Traits;

    trait MessageTrait {

        protected function successResponse($data, $message = null, $code = 200){
            return response()->json([
                'data'          => $data,
                'message'       => $message,
                'response'      => true,
                'code'          => $code,
            ]);
        }

        protected function errorResponse($message, $code = 404, $response = false){
            return response()->json([
                'error'         => $message,
                'response'      => $response,
                'code'          => $code,
            ]);
        }

        protected function showMessage($message, $code = 200, $response = true){
            return response()->json([
                'message'       => $message,
                'response'      => $response,
                'code'          => $code,
            ]);
        }
    }
?>
