<?php
include 'database/DatabaseConnection.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="SELECT from tasks WHERE id=".$_GET['id'];
        $result=methodGet($query);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));
    }
    //consulta de todos los registros
    else{
        $query="SELECT * from rps";
        $result=methodGet($query);
        echo json_encode($result->fetchAll());

    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $userID=$_POST['UserID'];
    $query="INSERT into rps(UserID) values ($userID)";
    $queryAutoIncrement="SELECT MAX(RpsID) as RpsID from rps";
    $result=methodPost($query, $queryAutoIncrement);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $rpsID=$_GET['RpsID'];
    $userID=$_POST['UserID'];
    $query="UPDATE rps SET UserID='$userID'";
    $result=methodPut($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $rpsID=$_GET['RpsID'];
    $query="DELETE FROM rps WHERE RpsID='$rpsID'";
    $result=methodDelete($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
?>