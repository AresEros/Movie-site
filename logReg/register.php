<?php 

include 'connect.php'

if(isset($_POST['signUp'])){
    $firstName=$_POST['fName'];
    $lastName=$_POST['lName'];
    $Email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

    $checkEmail="SELECT * From users Where email='$Email'";
    $result=$conn->query($checkEmail);
    if($result->num_rows>0){
        echo"Email Address Already Exist";
    }
    else{
        $insertQuery="INSERT INTO users (firstName,lasteName,Email,password)
                        VALUES ('$firstName','$lastName','$Email','$password')";
            if($conn->quary($insertQuary)==TRUE){
                header("location:index.php");
            }
            else{
                echo"Error:".conn->error;
            }
    }
}

if(isset($_POST['signIn'])){
    $Email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password) ;

    $sql="SELECT users WHERE email='$Email' and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['EMAIL']=$row['email'];
        header("Location:homepage.php");
        exit();
    }
    else{
        echo"Not Found, Incorrect Email or Password";
    }
}
?>