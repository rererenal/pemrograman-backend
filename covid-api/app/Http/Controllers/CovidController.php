<?php

namespace App\Http\Controllers;

use App\Models\Covid;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Echo_;

class CovidController extends Controller
{
    #membuat controller get
    public function index(){
        #mengambil semua data dan disimpan pada varible untuk di return
        $user_get = Covid::all();
        #handle problem ketika data kosong
        if ($user_get){
            $resource = [
                'messagge' => 'Get All Data',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource,200);
        }

        else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource,404);
        }
    }

    public function show($id){
        $user_get = Covid::find($id);

        if ($user_get){
            $resource = [
                'messagge' => 'Get Detail Data',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource,200);
        }
        else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource,404);
        }

    }

    public function search($name){
        echo $name;
    }

    public function positive(){
        echo 'test';
    }

    public function recovered(){
        echo 'test';
    }

    public function dead(){
        echo 'test';
    }

    #membuat controller post

    public function store(Request $request){
        //menangkap input user
        $input = [
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'in_date_at' => $request->in_date_at,
            'out_date_at' => $request->out_date_at
        ];
        //memasukan input pada varible sementara untuk direturn
        //memasukan input ke database
        $user_input = Covid::create($input);

        $resource = [
            'message' => 'New Patient Has Been Added Successfully',
            'resource' => $user_input
        ];

        return response()->json($resource,201);
    }

    #controller put

    public function update(Request $request, $id){
        $user_response = Covid::find($id);

        if ($user_response){
            $user_response->update([
                'name' => $request->name ?? $user_response->name,
                'phone' => $request->phone ?? $user_response->phone,
                'address' => $request->address ?? $user_response->address,
                'status' => $request->status ?? $user_response->status,
                'in_date_at' => $request->in_date_at ?? $user_response->in_date_at,
                'out_date_at' => $request->out_date_at ?? $user_response->out_date_at
            ]);
            $resource = [
                'messagge' => 'Update Successfully',
                'resource' => $user_response
            ];

            return response()->json($user_response,201);
        }

        else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_response
            ];

            return response()->json($user_response,404);
        }
    }

    #controller delete

    public function destroy($id){
        $user_get = Covid::find($id);

        if ($user_get){
            $user_get->delete();

            $resource = [
                'messagge' => 'Data Successfully Deleted',
                'resource' => $user_get
            ];

            return response()->json($resource,204);
        }

        else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];

            return response()->json($resource,404);
        }
    }


}
