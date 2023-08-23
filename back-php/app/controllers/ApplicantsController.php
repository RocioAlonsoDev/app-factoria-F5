<?php 

use Database\DatabaseConnection;

class ApplicantsController extends UsersController{

    public function index(){
        $dbConnection = new DatabaseConnection;

        try{
            $query="SELECT * from applicants";

            $connection = $dbConnection -> connect();
            $statement = $connection->prepare($query);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $dbConnection -> disconnect();
            return $statement;
        }catch(Exception $e){
            die("Error: ".$e);
        }

    }

    function get($id){
        $dbConnection = new DatabaseConnection;

        try{
            $query="SELECT * from applicants WHERE ApplicantID=".$id;

            $connection = $dbConnection -> connect();
            $statement = $connection->prepare($query);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $dbConnection -> disconnect();
            return $statement;
        }catch(Exception $e){
            die("Error: ".$e);
        }
    }

    function create($data){
        $dbConnection = new DatabaseConnection;

        try{

            
            $query="INSERT INTO applicants (Status,Birthdate,Gender,BootcampID,Pronoun,
            Address,PhoneNumber,DNI,applicationDate,UserID) VALUES ()";

            $connection = $dbConnection -> connect();
            $statement = $connection->prepare($query);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $dbConnection -> disconnect();
            return $statement;
        }catch(Exception $e){
            die("Error: ".$e);
        }
    }

    
}

?>