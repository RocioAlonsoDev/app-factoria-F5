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
        $query="SELECT * from stack";
        $result=methodGet($query);
        echo json_encode($result->fetchAll());

    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $stackname=$_POST['StackName'];
    $bootcampID=$_POST['BootcampID'];
    $query="INSERT into stack(StackName,BootcampID) values ($stackname, $bootcampID)";
    $queryAutoIncrement="SELECT MAX(StackID) as StackID from stack";
    $result=methodPost($query, $queryAutoIncrement);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $stackID=$_GET['StackID'];
    $stackname=$_POST['StackName'];
    $bootcampID=$_POST['BootcampID'];
    $query="UPDATE stack SET StackName='$stackName', BootcampID='$bootcampID'";
    $result=methodPut($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $stackID=$_GET['StackID'];
    $query="DELETE FROM stack WHERE StackID='$stackID'";
    $result=methodDelete($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
?>