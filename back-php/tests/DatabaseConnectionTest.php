<?php

    use PHPUnit\Framework\TestCase;
    use Database\DatabaseConnection;

    class DatabaseConnectionTest extends TestCase {

        public function test_databaseConnection() {

            //Setup
            $dbConnection = new DatabaseConnection;

            //Action
            $expected = 'object';
            $conn = $dbConnection -> connect();
            $result = gettype($conn);

            //Assert
            $this->assertEquals($expected, $result);
            echo 'Returned PDO Object';

        }

        public function test_query() {

            //Setup
            $dbConnection = new DatabaseConnection;
            $sql = 'SELECT LastName FROM users WHERE UserID = 1'; 

            //Action
            $conn = $dbConnection -> connect();

            foreach ($conn->query($sql) as $row) {
                $result = $row['LastName'];
            }
            $expected = 'Prueba';

            //Assert
            $this->assertEquals($expected, $result);
            echo ' Query executed successfully';

        }

    }

?>