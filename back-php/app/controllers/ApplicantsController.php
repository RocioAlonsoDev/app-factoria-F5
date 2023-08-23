<?php 

use Database\DatabaseConnection;
require 'UsersController.php';

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
            die("Error: ".$e->getMessage());
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
            die("Error: ".$e->getMessage());
        }
    }

    function create($data){
        $dbConnection = new DatabaseConnection;

        try{
            parent::createUser([
            'LastName'=>$data['LastName'],
            'FirstName'=>$data['FirstName'],
            'Email'=>$data['Email'],
            'Password'=>$data['Password']]);

            $userResult = parent::getUser(['Email'=>$data['Email'],'Password'=>$data['Password']]);

            $userData = $userResult->fetch(PDO::FETCH_ASSOC);
            
            $userID = $userData['UserID'];
            
            $query="INSERT INTO applicants (Status,Birthdate,Gender,BootcampID,Pronoun,
            Address,PhoneNumber,DNI,applicationDate,UserID) VALUES (?,?,?,?,?,?,?,?,?,?)";

            $connection = $dbConnection -> connect();
            $statement = $connection->prepare($query);
            $statement->execute([$data['Status'], $data['Birthdate'], $data['Gender'], $data['BootcampID'], $data['Pronoun'], $data['Address'], $data['PhoneNumber'], $data['DNI'], $data['applicationDate'], $userID]);

            $dbConnection -> disconnect();
            return true;
        }catch(Exception $e){
            die("Error: ".$e->getMessage());
        }
    }

    
}

?>