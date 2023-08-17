<?php
    require_once("c://xampp/htdocs/app-factoria-F5/back-php/app/controller/userController.php");
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        
        $LastName = isset($_POST['LastName']) ? htmlspecialchars($_POST['LastName']) : '';
        $FirstName = isset($_POST['FirstName']) ? htmlspecialchars($_POST['FirstName']) : '';
        $Email = isset($_POST['Email']) ? htmlspecialchars($_POST['Email']) : '';
        $Password = isset($_POST['Password']) ? htmlspecialchars($_POST['Password']) : '';
       
    $obj = new userController();
    $obj->store($LastName,$FirstName,$Email,$Password);
    }
?>