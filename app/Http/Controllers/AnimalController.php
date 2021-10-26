<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller{

    public $animal = ["Ayam", "Babi", "Kuda"];

    function index(){
        for ($x = 0; $x < count($this->animal); $x++){
            echo "Hewan ke - ", $x+1,  " adalah " ,$this->animal[$x], "\n";
        }
    }

    function store(Request $request){
        array_push($this->animal, $request->nama);

        $this->index();
    }

    function update(Request $request, $id){
        $this->animal[$id] = $request->nama;

        $this->index();
    }

    function destroy($id){
        array_splice($this->animal, $id, $id);

        $this->index();
    }
}
