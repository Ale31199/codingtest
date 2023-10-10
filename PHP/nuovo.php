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
      <input name="email" type="email"><br>
      Name:<br>
      <input name="name" type="text"><br>
      Password:<br>
      <input name="pass" type="password"><br><br>
      <input value="register" type="submit">
    </form>





</body>
</html>



<?php

$servername = '127.0.0.1';
$username = 'alessio';
$password = 'caccamella.31199';
$dbname = 'test';


$sql = new mysqli($servername, $username, $password, $dbname);

if ($sql -> connect_error){
    die('Error' . $sql->connect_error);
};


if ($_SERVER['REQUEST_METHOD' === 'POST']){
    $email = $_POST['email'];
    $name = $_POST['name'];
    $pass  = $_POST['pass'];
    $id = rand(0, 99999999);

    if(empty($email) || empty($name) || empty($pass)){
        echo 'Please insert the data';
    } else {
        $srv = "INSERT INTO testtable (Email, Username, Password, Id) VALUES ('$email', '$name', '$pass', '$id')";
    };

    if($sql-> query($srv) === TRUE){
        echo 'data sent successfully';
    } else {
        echo 'Error during sending data';
    }
}




?>