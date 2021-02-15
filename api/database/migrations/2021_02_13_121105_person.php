<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration;

class Person extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
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

        Schema::create('persons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('last_name');
            $table->date('birth_date'); 
            $table->string('address_1');
            $table->string('address_2');
            $table->string('city_or_municipality');
            $table->string('province');
            $table->string('post_code');
            $table->float('salary');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });

        DB::table('persons')->insert([
            'first_name'           => 'John Ray',
            'middle_name'          => 'L.',
            'last_name'            => 'Del Puerto',
            'birth_date'           => '1993-08-16',
            'address_1'            => 'Zone-4',
            'address_2'            => 'Barangay Tablon',
            'city_or_municipality' => 'CDOC',
            'province'             => 'Mis Or',
            'post_code'            => '9000',
            'salary'               => '30000'
        ]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persons');
    }
}
