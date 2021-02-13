<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
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
            $table->datetime('birth_date');
            $table->string('address_1');
            $table->string('address_2');
            $table->string('city_or_municipality');
            $table->string('province');
            $table->string('post_code');
            $table->float('salary');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });

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
