<?php 

use Database\DatabaseConnection;

class UsersController{

    function getUser($data){
        $dbConnection = new DatabaseConnection;

        try{
            $query="SELECT UserID from users WHERE Email='".$data['Email']."' AND Password=".$data['Password'];

            $connection = $dbConnection -> connect();
            $statement = $connection->prepare($query);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            return $statement;
        }catch(Exception $e){
            die("Error: ".$e->getMessage());
        }
    }

    function createUser($data){
        $dbConnection = new DatabaseConnection;

        try{
            $query='INSERT INTO users(LastName,FirstName,Email,Password) VALUES (?,?,?,?)';

            $connection = $dbConnection -> connect();
            $statement = $connection->prepare($query);
            $statement->execute([$data['LastName'],$data['FirstName'],$data['Email'],$data['Password']]);
            
            $dbConnection -> disconnect();
            return true;
        }catch(Exception $e){
            die("Error: ".$e->getMessage());
        }
    }
}

?>