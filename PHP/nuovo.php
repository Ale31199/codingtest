<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="nuovo.php" method="post">
        email:<br>
        <input name="email" type="email"><br>
        username:<br>
        <input name="user" type="text"><br>
        password:<br>
        <input name="pass" type="password"><br>
        <input value="register now" type="submit"><br><br><br>

    </form>
</body>
</html>


<?php

$servername = '127.0.0.1';
$username= 'alessio';
$password ='caccamella.31199';
$dbname='finale';

$sql = new mysqli($servername, $username, $password, $dbname);

if ($sql-> connect_error){
    die('error connecting' . $sql ->connect_error);
};

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $email = $_POST['email'];
    $user= $_POST['user'];
    $pass = $_POST['pass'];
    $id = rand(0,99999999);

    if (empty($email) || empty($user)|| empty($pass)){
        echo 'please fill the data form';
    } else {
        $srv = "INSERT INTO finaletest (Email, Username, Password, Id) VALUES ('$email', '$user', '$pass', '$id')";
    };

    if ($sql ->query($srv)=== TRUE){
        echo 'data sent successfully';
    } else {
        echo 'Error sending data, retry';
    }
}



?>