<?php

class UserModel{
    private $UserID;
    private $LastName;
    private $FirstName;
    private $Email;
    private $Password;

    public function __constructor($LastName,$FirstName,$Email,$Password){
        $this->LastName=$LastName;
        $this->FirstName=$FirstName;
        $this->Email=$Email;
        $this->Password=$Password;
    }
}
?>