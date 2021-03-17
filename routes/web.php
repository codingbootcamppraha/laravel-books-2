<?php

use Illuminate\Http\Request;
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


Route::get('/info', function(){
    return public_path('uploads');
//    phpinfo();
});

Route::view('/upload', 'upload');
Route::view('/upload-react', 'upload-react');

Route::post('/upload', function(Request $request){

//    $filename = $request->file('picture')->store('profile_pictures', 'uploads');

//    return [
//        $request->file('picture')->getClientOriginalName(),
//        $request->file('picture')->getClientOriginalExtension(),
//        $request->file('picture')->getClientMimeType()
//    ];


    $filename = $request->file('picture')->storeAs('profile_pictures',
        $request->file('picture')->getClientOriginalName(),
        'uploads'
    );



    return $filename;

})->name('upload');


