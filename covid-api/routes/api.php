<?php

use App\Http\Controllers\CovidController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

#Route GET COVID-API
//get all resource
Route::get("/patients", [CovidController::class, 'index']);

//get detail resource
Route::get("/patients/{id}", [CovidController::class, 'show']);


#Route POST COVID-API
Route::post("/patients", [CovidController::class, 'store']);

#Route PUT COVID-API
Route::put("/patients/{id}", [CovidController::class, 'update']);

#Route DELETE COVID-API
Route::delete("/patients/{id}", [CovidController::class, 'destroy']);
