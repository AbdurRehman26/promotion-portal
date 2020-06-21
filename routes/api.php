<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('user', 'Api\V1\UserController')->except([
             'edit'
        ]);Route::resource('page', 'Api\V1\PageController')->except([
             'edit'
        ]);Route::resource('post', 'Api\V1\PostController')->except([
             'edit'
        ]);