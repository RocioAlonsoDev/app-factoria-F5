<?php 

    namespace Database;
    use PDO;
    use PDOException;

    class DatabaseConnection {
        private $connection = null;

        public function connect () {

            try{

                $config = require __DIR__ . '/../config/config.php';

                $this->connection = new PDO('mysql:host='.$config["host"].';dbname='.$config['database'], $config['username'], $config['password']);

                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                return $this->connection;

            }catch(PDOException $e){

                return "Connection failed: " . $e->getMessage();

            }

        }
        
        public function disconnect(){
            $this->connection = null;
        }
    }

?>