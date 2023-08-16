<?php

use PHPUnit\Framework\TestCase;

class DatabaseConnectionTest extends TestCase {

    public function test_databaseConnection() {

        //Setup
        $dbConnection = new DatabaseConnection;


        //Action
        $dbConnection -> connect();

        $expected = [
            
        ];

        //Assert
        $this->assertEquals($expected, $result);
    }


}

?>