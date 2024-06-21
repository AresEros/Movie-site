<?php

$host="localhost";
$user="root";
$pass="";
$db="login"
$conn=new mysql($host,$user,$pass,$db,$conn);
if($conn->connect_error){
    echo"faild to connect DB".$conn->connect_error;
}
?>