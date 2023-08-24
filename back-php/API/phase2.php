<?php
include '../app/controllers/Phase2Controller.php';
require_once __DIR__ . '/../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');

$phase2 = new Phase2Controller;

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){ 
        $result=$phase2->get($_GET['id']);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));
    }
    //consulta de todos los registros
    else{
        $result=$phase2->index();    
        echo json_encode($result->fetchAll());
    }
    header("HTTP/1.1 200 OK");
    exit();
}

 if($_POST['METHOD']=='POST'){
     unset($_POST['METHOD']);
     $jornadapuertasabiertas=$_POST['JornadaPuertasAbiertas'];
     $sesioninformativa=$_POST['SesionInformativa'];
     $talleresprebootcamp=$_POST['TallerPreBootcamp'];
     $talleresf5=$_POST['TalleresF5'];
     $freecodecamp=$_POST['FreeCodeCamp'];
     $validation=$_POST['Validation'];
     $aplicantID=$_POST['ApplicantID'];
     $query="INSERT into phase2(JornadaPuertasAbiertas,SesionInformativa,TallerPreBootcamp,TalleresF5,FreeCodeCamp,Validation,ApplicantID) values ($jornadapuertasabiertas, $sesioninformativa,  $talleresprebootcamp, $talleresf5, $freecodecamp, $validation, $aplicantID)";
     $queryAutoIncrement="SELECT MAX(Phase2ID) as Phase2ID from phase2";
     $result=methodPost($query, $queryAutoIncrement);
     echo json_encode($result);
     header("HTTP/1.1 200 OK");
     exit();
 }

 if($_POST['METHOD']=='PUT'){
     unset($_POST['METHOD']);
     $phase2ID=$_GET['Phase2ID'];
     $jornadapuertasabiertas=$_POST['JornadaPuertasAbiertas'];
     $sesioninformativa=$_POST['SesionInformativa'];
     $talleresprebootcamp=$_POST['TallerPreBootcamp'];
     $talleresf5=$_POST['TalleresF5'];
     $freecodecamp=$_POST['FreeCodeCamp'];
     $validation=$_POST['Validation'];
     $aplicantID=$_POST['ApplicantID'];
     $query="UPDATE applicants SET JornadaPuertasAbiertas='$jornadapuertasabiertas', SesionInformativa='$sesioninformativa', TallerPreBootcamp= '$talleresprebootcamp', TalleresF5=' $talleresf5', FreeCodeCamp='$freecodecamp', Validation=', $validation', ApplicantID='$aplicantID' WHERE Phase2ID='$phase2ID'";
     $result=methodPut($query);
     echo json_encode($result);
     header("HTTP/1.1 200 OK");
     exit();
 }

 if($_POST['METHOD']=='DELETE'){
     unset($_POST['METHOD']);
     $phase2ID=$_GET['Phase2ID'];
     $query="DELETE FROM phase2 WHERE Phase2ID='$phase2id'";
     $result=methodDelete($query);
     echo json_encode($result);
     header("HTTP/1.1 200 OK");
     exit();
 }

 header("HTTP/1.1 400 Bad Request");
?>