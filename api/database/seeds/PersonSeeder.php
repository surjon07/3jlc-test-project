<?php

use App\Person;
use Illuminate\Database\Seeder;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = new Person;
        
        $data->first_name           = 'John Ray';
        $data->middle_name          = 'L.';
        $data->last_name            = 'Del Puerto';
        $data->birth_date           = '1993-08-16';
        $data->address_1            = 'Zone-4';
        $data->address_2            = 'Barangay Tablon';
        $data->city_or_municipality = 'CDOC';
        $data->province             = 'Mis Or';
        $data->post_code            = '9000';
        $data->salary               = '30000';

        $data->save();

    }
}
