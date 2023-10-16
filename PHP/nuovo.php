<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<form action="nuovo.php" method="post">
 Email:<br>
 <input type="email" name="email"><br>
Username:<br>
<input type="text" name="user"><br>
Password:<br>
<input type="password" name="pass"><br><br>

<input type="submit" value="register"><br>
</form>






</body>
</html>





<?php

$servername= '127.0.0.1';
$username= 'alessio';
$password='caccamella.31199';
$dbname='finale';



$sql = new mysqli($servername, $username, $password, $dbname);

if($sql -> connect_error){
    die('Error connecting' .$sql -> connect_error);
} else{
    echo '';
}


if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $email  = $_POST['email'];
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $id = rand(0, 99999999);

    if(empty($email) || empty( $user) || empty($pass)){
        echo 'please insert the data';
    } else {
       $srv = "INSERT INTO finaletest (Email, Username, Password, Id) VALUES ('$email', '$user', '$pass', '$id')";
    }

    if ($sql -> query($srv) === TRUE){
   echo 'Data sent successfully to the Database';
    } else {
        echo 'Error while sending data, please retry.';
    }
}
?>