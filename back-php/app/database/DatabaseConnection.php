<?php 

    namespace Database;
    use PDO;
    use PDOException;

    class DatabaseConnection {

        public function connect () {

            try{

                $config = require __DIR__ . '/../../config/config.php';

                $conn = new PDO('mysql:host='.$config["host"].';dbname='.$config['database'], $config['username'], $config['password']);

                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // return "Connected successfully.";

                return $conn;

            }catch(PDOException $e){

                return "Connection failed: " . $e->getMessage();

            }

        }
    }

?>