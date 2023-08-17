<?php
use Database\DatabaseConnection;

class userModel{
    private $PDO;

    public function __construct(){
        require_once("c://xampp/htdocs/app-factoria-F5/back-php/app/database/DatabaseConnection.php");
        $conn = new DatabaseConnection();
        $this->PDO = $conn->connect();
        
    }
   //$this->PDO->exec("USE app-factoria-f5");
    public function insert($LastName,$FirstName,$Email,$Password){
        $sql = "INSERT INTO users (LastName,FirstName,Email,Password) 
        VALUES(?,?,?,?)";
        $statement = $this->PDO-> prepare($sql);
        $statement -> execute([$LastName,$FirstName,$Email,$Password]);

       /* $statement = $this->PDO->prepare("INSERT INTO users VALUES(null,:LastName,:FirstName,:Email,:Password)");
        $statement->bindParam(":LastName",$LastName);
        $statement->bindParam(":FirstName",$FirstName);
        $statement->bindParam(":Email",$Email);
        $statement->bindParam(":Password",$Password);
        
        return($statement->execute()) ? $this->PDO->lastInsertId() : false ;*/
    }
    // public function show($id){
    //     $statement = $this->PDO->prepare("SELECT * FROM tasks where id = :id limit 1");
    //     $statement->bindParam(":id",$id);
    //     return ($statement->execute()) ? $statement->fetch() : false ;
    // }
    // public function index(){
    //     $statement = $this->PDO->prepare("SELECT * FROM tasks");
    //     return ($statement->execute()) ? $statement->fetchAll() : false;
    // }
    // public function update($id,$title,$todo_task){
    //     $statement = $this->PDO->prepare("UPDATE tasks SET title = :title, todo_task = :todo_task WHERE id = :id");
    //     $statement->bindParam(":id",$id);
    //     $statement->bindParam(":title",$title);
    //     $statement->bindParam(":todo_task",$todo_task);
    //     return ($statement->execute()) ? $id : false;
    // }
    // public function delete($id){
    //     $statement = $this->PDO->prepare("DELETE FROM tasks where id = :id");
    //     $statement->bindParam(":id",$id);
    //     return ($statement->execute()) ? true : false ;
    // }
}





?>