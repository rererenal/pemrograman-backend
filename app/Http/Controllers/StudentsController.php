<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Echo_;

use function PHPSTORM_META\elementType;

class StudentsController extends Controller
{
    public function index(){
        $students = Student::all();

        if (count($students) > 0){
            $data = [
                'message' => 'Get all students',
                'resource' => $students
            ];
            return response()->json($data,200);

        }
        else {
            $data = [
                'message' => 'Data not found'
            ];
            return response()->json($data,404);
        }
    }

    public function show($id){
        $student = Student::find($id);

        $data = [
            'message' => 'Get Details Student',
            'resource' => $student
        ];

        return response()->json($data,200);

    }

    public function store(Request $request){
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Student succesfully created',
            'resource' => $student
        ];

        return response()->json($data,201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        if ($student){
            $student->update([
                'nama' => $request->nama ?? $student -> nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ]);

            $data = [
                'message' => 'Data Update Succesfully',
                'resource' => $student
            ];

            return response()->json($data,200);

        }
        else {

            $data = [
                'message' => 'Data Not Found'
            ];

            return response()->json($data,404);

        }

    }

    public function destroy($id){
        $student = Student::find($id);

        if ($student){
            $student->delete();

            $data = [
                'message' => 'Data Has Been Deleted'
            ];

            return response()->json($data,200);
        }

        else {
            $data = [
                'message' => 'Delete Unsuccesfull'
            ];

            return response()->json($data,404); 
        }
    }
}
