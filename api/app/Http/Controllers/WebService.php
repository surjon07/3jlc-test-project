<?php

namespace App\Http\Controllers;

// import models
use App\Person;

use Illuminate\Http\Request;

class WebService extends Controller
{

    public function ReadPersons(Request $request) {

        return 
            json_encode(
                [
                    'data' => Person::all()
                ]
            );

    }
    public function ReadPerson(Request $request) {

        return 
            json_encode(
                [
                    'data' => Person::find($request->id)
                ]
            );

    }

    public function CreatePerson(Request $request) {

        $data = new Person;

        $data->first_name           = $request->first_name;
        $data->middle_name          = $request->middle_name;
        $data->last_name            = $request->last_name;
        $data->birth_date           = $request->birth_date;
        $data->address_1            = $request->address_1;
        $data->address_2            = $request->address_2;
        $data->city_or_municipality = $request->city_or_municipality;
        $data->province             = $request->province;
        $data->post_code            = $request->post_code;
        $data->salary               = $request->salary;

        $data->save();

        return json_encode(
            [
                "code"      => 200,
                "message"   => "Person created successfully!"
            ]
        );


    }
    
    public function UpdatePerson(Request $request) {

        // Check if the person exist.
        $data = Person::findOrFail($request->id);

        $data->first_name           = $request->first_name;
        $data->middle_name          = $request->middle_name;
        $data->last_name            = $request->last_name;
        $data->birth_date           = $request->birth_date;
        $data->address_1            = $request->address_1;
        $data->address_2            = $request->address_2;
        $data->city_or_municipality = $request->city_or_municipality;
        $data->province             = $request->province;
        $data->post_code            = $request->post_code;
        $data->salary               = $request->salary;

        $data->save();

        return json_encode(
            [
                "code"      => 200,
                "message"   => "Person updated successfully!"
            ]
        );

    }

    public function DeletePerson(Request $request) {

        $data = Person::findOrFail($request->id);
        $data->delete();

        return json_encode(
            [
                "code"      => 200,
                "message"   => "Data deleted successfully!"
            ]
        );

    }
}
