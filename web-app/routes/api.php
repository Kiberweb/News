<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\HashtagController;

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

Route::get('/news-link/', [NewsController::class, 'issetLink']);
Route::get('news', [NewsController::class, 'index']);
Route::get('news/{name}', [NewsController::class, 'show']);
Route::get('news-to-hashtag', [NewsController::class, 'hashtagToNews']);
Route::post('news', [NewsController::class, 'store']);
Route::put('news/{id}', [NewsController::class, 'update']);
Route::delete('news/{id}', [NewsController::class, 'destroy']);

Route::get('/hashtag-link/', [HashtagController::class, 'issetLink']);
Route::get('hashtag', [HashtagController::class, 'index']);
Route::get('hashtag/{id}', [HashtagController::class, 'show']);
Route::post('hashtag-to-news', [HashtagController::class, 'news']);
Route::put('hashtag/{id}', [HashtagController::class, 'update']);
Route::delete('hashtag/{id}', [HashtagController::class, 'destroy']);
