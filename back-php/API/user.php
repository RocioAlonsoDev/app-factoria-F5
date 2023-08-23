<?php
include 'database/DatabaseConnection.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="SELECT from users WHERE id=".$_GET['id'];
        $result=methodGet($query);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));
    }
    //consulta de todos los registros
    else{
        $query="SELECT * from users";
        $result=methodGet($query);
        echo json_encode($result->fetchAll());

    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $lastname=$_POST['LastName'];
    $firstname=$_POST['FirstName'];
    $email=$_POST['Email'];
    $password=$_POST['Password'];
    $query="INSERT into users(LastName,FirstName,Email,Password) values ($lastname, $firstname, $email, $password)";
    $queryAutoIncrement="SELECT MAX(UserID) as UserID from users";
    $result=methodPost($query, $queryAutoIncrement);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $userID=$_GET['UserID'];
    $lastname=$_POST['LastName'];
    $firstname=$_POST['FirstName'];
    $email=$_POST['Email'];
    $password=$_POST['Password'];
    $query="UPDATE users SET LastName='$lastname', FirstName='$firstname', Email='$email', Password='$password'";
    $result=methodPut($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $userID=$_GET['UserID'];
    $query="DELETE FROM users WHERE UserID='$userID'";
    $result=methodDelete($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
?>