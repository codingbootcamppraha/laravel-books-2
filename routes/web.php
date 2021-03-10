<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');

Route::get('/books', 'BookController@index');

Route::get('/home', 'IndexController@home');
Route::get('/home/login', 'IndexController@home');

Route::view('/book/{book_id}/{path?}', 'book/detail')->where(['book_id' => '^\d+$', 'path' => '.*']);

// display the view auth/react when user comes to /login with GET
Route::view('/login', 'auth/react')->name('login');

// display the view auth/react when user comes to /register with GET
Route::view('/register', 'auth/react')->name('register');


Route::get('/register', function() {

    if (Auth::check()) {
        return redirect('/');
    } else {
        return view('auth/react');
    }

})->name('register');