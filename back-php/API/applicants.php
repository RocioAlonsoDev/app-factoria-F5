<?php
include '../app/controllers/ApplicantsController.php';
require_once __DIR__ . '/../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');

$applicants = new ApplicantsController;

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){ 
        $result=$applicants->get($_GET['id']);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));
    }
    //consulta de todos los registros
    else{
        $result=$applicants->index();    
        echo json_encode($result->fetchAll());
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);

    $data = ['FirtsName'=>$_POST['FirtsName'],
            'LastName'=>$_POST['LastName'],
            'Email'=>$_POST['Email'],
            'Password'=>$_POST['Password'],
            'Status'=>'Postulante',
            'Birthdate'=>$_POST['Birthdate'],
            'Gender'=>$_POST['Gender'],
            'BootcampID'=>$_POST['BootcampID'],
            'Pronoun'=>$_POST['Pronoun'],
            'Address'=>$_POST['Address'],
            'PhoneNumber'=>$_POST['PhoneNumber'],
            'DNI'=>$_POST['DNI'],
            'applicationDate'=>date("Y-m-d")];

    $result=$applicants->create($data);
    echo json_encode($result);
    header("HTTP/1.1 200 OK");
    exit();
}


//     
//     $query="INSERT into applicants(Status, Birthdate, Gender, Pronoun, Address, PhoneNumber, DNI, applicationDate) values ($status, $birthdate, $gender, $pronoun, $adress, $phonenumber, $dni, $applicationdate, $userID, $bootcampID)";
//     $queryAutoIncrement="SELECT MAX(ApplicantID) as ApplicantID from applicants";
//     $result=methodPost($query, $queryAutoIncrement);
//     echo json_encode($result);
//     header("HTTP/1.1 200 OK");
//     exit();
// }

// if($_POST['METHOD']=='PUT'){
//     unset($_POST['METHOD']);
//     $ApplicantID=$_GET['ApplicantID'];
//     $status=$_POST['Status'];
//     $birthdate=$_POST['Birthdate'];
//     $gender=$_POST['Gender'];
//     $pronoun=$_POST['Pronoun'];
//     $address=$_POST['Address'];
//     $phonenumber=$_POST['PhoneNumber'];
//     $dni=$_POST['DNI'];
//     $applicationdate=$_POST['applicationDate'];
//     $userID=$_POST['UserID'];
//     $bootcampID=$_POST['BootcampID'];

//     $query="UPDATE applicants SET Status='$status', Birthdate='$birthdate', Gender= '$gender', Pronoun='$pronoun', Address='$address', PhoneNumber=', $phonenumber', DNI='$dni', applicationDate='$applicationdate', UserID='$userID', BootcampID='$bootcampID' WHERE ApplicantID='$id'";
//     $result=methodPut($query);
//     echo json_encode($result);
//     header("HTTP/1.1 200 OK");
//     exit();
// }

// if($_POST['METHOD']=='DELETE'){
//     unset($_POST['METHOD']);
//     $ApplicantID=$_GET['ApplicantID'];
//     $query="DELETE FROM applicants WHERE ApplicantID='$id'";
//     $result=methodDelete($query);
//     echo json_encode($result);
//     header("HTTP/1.1 200 OK");
//     exit();
// }

// header("HTTP/1.1 400 Bad Request");
?>