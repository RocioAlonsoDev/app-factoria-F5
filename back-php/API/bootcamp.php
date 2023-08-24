<?php
include '../app/controllers/BootcampController.php';

header('Access-Control-Allow-Origin: *');

$applicants = new BootcampController;

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){ 
        $result=$bootcamp->get($_GET['id']);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));
    }
    //consulta de todos los registros
    else{
        $result=$bootcamp->index();    
        echo json_encode($result->fetchAll());
    }
    header("HTTP/1.1 200 OK");
    exit();
}

 if($_POST['METHOD']=='POST'){
     unset($_POST['METHOD']);
     $startdate=$_POST['StartDate'];
     $enddate=$_POST['EndDate'];
     $coursename=$_POST['courseName'];
     $coursedescription=$_POST['courseDescription'];
     $query="INSERT into bootcamp(StartDate, EndDate, courseName, courseDescription) values ($startdate, $enddate, $coursename, $coursedescription)";
     $queryAutoIncrement="SELECT MAX(BootcampID) as BootcampID from bootcamp";
     $result=methodPost($query, $queryAutoIncrement);
     echo json_encode($result);
     header("HTTP/1.1 200 OK");
     exit();
 }

 if($_POST['METHOD']=='PUT'){
     unset($_POST['METHOD']);
     $bootcampID=$_GET['BootcampID'];
     $startdate=$_POST['StartDate'];
     $enddate=$_POST['EndDate'];
     $coursename=$_POST['courseName'];
     $coursedescription=$_POST['courseDescription'];
     $query="UPDATE bootcamp SET StartDate='$startdate', EndDate='$enddate', courseName= '$courseName', courseDescription='$courseescription'  WHERE BootcampID='$bootcampID'";
     $result=methodPut($query);
     echo json_encode($result);
     header("HTTP/1.1 200 OK");
     exit();
 }

 if($_POST['METHOD']=='DELETE'){
     unset($_POST['METHOD']);
     $bootcampID=$_GET['BootcampID'];
     $query="DELETE FROM bootcamp WHERE BootcampID='$bootcampID'";
     $result=methodDelete($query);
     echo json_encode($result);
     header("HTTP/1.1 200 OK");
    exit();
 }

 header("HTTP/1.1 400 Bad Request");
?>