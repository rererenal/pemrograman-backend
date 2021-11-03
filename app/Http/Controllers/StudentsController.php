<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Echo_;

use function PHPSTORM_META\elementType;

class StudentsController extends Controller
{
    function index(){
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
}
