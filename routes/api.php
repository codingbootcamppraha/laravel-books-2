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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


//       /api/token
Route::post('/token', 'Api\UserController@token');

//                                              only if authenticated through Sanctum
Route::get('/user', 'Api\UserController@user')->middleware('auth:sanctum');

//                                                   only if authenticated through Sanctum
Route::post('/logout', 'Api\UserController@logout')->middleware('auth:sanctum');


//      /api/books
Route::get('/books', 'Api\BookController@index');

//      /api/categories
Route::get('/categories', 'Api\CategoryController@index');

// book of the week
//      /api/book-of-the-week
Route::get('/book-of-the-week', 'Api\BookController@bookOfTheWeek');

// latest books
//      /api/books/latest
Route::get('/books/latest', 'Api\BookController@latest');

// detail of a book
//      /api/books/123
Route::get('/books/{book_id}', 'Api\BookController@show');

// handle the review form's submission
//       /api/books/review/123
Route::post('/books/review/{book_id}', 'Api\BookController@review');

// get detail about this user's review of a book
//      /api/books/review/123
Route::get('/books/review/{book_id}', 'Api\BookController@showReview');