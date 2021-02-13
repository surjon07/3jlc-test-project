<?php

use Illuminate\Http\Request;

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

// POST /person - It should be able to store data with the following fields
//  - first_name (required)
//  - middle_name
//  - last_name (required)
//  - birthdate (required) | format: Y-m-d
//  - address_1 (required)
//  - address_2
//  - city_or_municipality (required)
//  - province (required)
//  - postcode (required)
//  - salary

// GET /persons - It should be able to list all persons that have been stored. List the following
//  - id
//  - first_name
//  - last_name
//  - salary

// GET /person/{id} - It should be able to see all details of a person by its id. It should display the following fields
//  - first_name
//  - middle_name
//  - last_name
//  - birthdate
//  - address_1
//  - address_2
//  - city_or_municipality
//  - province
//  - postcode
//  - salary

// PUT /person/{id} - It should be able to update a person's information by its id. It should accept the following fields
//  - first_name
//  - middle_name
//  - last_name
//  - birthdate | format: Y-m-d
//  - address_1
//  - address_2
//  - city_or_municipality
//  - province
//  - postcode
//  - salary

// DELETE /person/{id} - It should be able to delete a person's information by its id.

Route::get(     '/persons',     'WebService@ReadPersons');
Route::get(     '/person/{id}', 'WebService@ReadPerson');
Route::post(    '/person',      'WebService@CreatePerson');
Route::put(     '/person/{id}', 'WebService@UpdatePerson');
Route::delete(  '/person/{id}', 'WebService@DeletePerson');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
