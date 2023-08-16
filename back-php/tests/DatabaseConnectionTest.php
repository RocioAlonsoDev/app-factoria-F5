<?php

    use PHPUnit\Framework\TestCase;
    use Database\DatabaseConnection;

    class DatabaseConnectionTest extends TestCase {

        public function test_databaseConnection() {

            //Setup
            $dbConnection = new DatabaseConnection;

            //Action
            $expected = 'Connected successfully.';

            $result = $dbConnection -> connect();

            //Assert
            $this->assertEquals($expected, $result);
        }

    }

?>