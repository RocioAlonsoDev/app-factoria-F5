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
        $query="SELECT * from requirements";
        $result=methodGet($query);
        echo json_encode($result->fetchAll());

    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $datatype=$_POST['DataType'];
    $requirementname=$_POST['RequirementName'];
    $bootcampID=$_POST['BootcampID'];
    $query="INSERT into requirements(DataType, RequirementName, BootcampID) values ($title, $todo_task)";
    $queryAutoIncrement="SELECT MAX(RequirementID) as RequirementID from requirements";
    $result=methodPost($query, $queryAutoIncrement);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $requirementID=$_GET['RequirementID'];
    $datatype=$_POST['DataType'];
    $requirementname=$_POST['RequirementName'];
    $bootcampID=$_POST['BootcampID'];
    $query="UPDATE requirements SET DataType='$datatype', RequirementName='$requirementname', BootcampID='$bootcampID' WHERE RequirementID='$requirementID'";
    $result=methodPut($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $requirementID=$_GET['RequirementID'];
    $query="DELETE FROM requirements WHERE RequirementID='$requirementID'";
    $result=methodDelete($query);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
?>