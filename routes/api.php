<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
#import controller animal
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

#endpoint animal

Route::get("/animals", [AnimalController::class, "index"]);

Route::post ("/animals", [AnimalController::class, "store"]);

Route::put("/animals/{id}", [AnimalController::class, "update"]);

Route::delete("/animals/{id}", [AnimalController::class, "destroy"]);

#Routing Students

Route::get("/students", [StudentsController::class, "index"]);

Route::get("/students/{id}", [StudentsController::class, "show"]);

Route::post("/students", [StudentsController::class, "store"]);

Route::put("/students/{id}", [StudentsController::class, "update"]);

Route::delete("/students/{id}", [StudentsController::class, "destroy"]);
