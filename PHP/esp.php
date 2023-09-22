<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="esp.php" method="post">
        Email:<br>
        <input type='email' name='email'><br>
        Username:<br>
        <input type='text' name='user'><br>
        Password:<br>
        <input type='password' name='pass'><br>
        <input type='submit' value='Register'><br>
    </form>
</body>
</html>




<?php
$servername= '127.0.0.1';
$username = 'alessio';
$password = 'caccamella.31199';
$dbname = 'test';


$sql= new mysqli($servername, $username, $password, $dbname);

if($sql -> connect_error){
    die('Error connecting server' .$sql-> connect_error);
};



if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
$email = $_POST['email'];
$user = $_POST['user'];
$pass = $_POST['pass'];
$id = rand(0, 99999999);


if(empty($email) || empty($user) || empty($pass)){
    echo'Please insert data';
} else {
    $srv = "INSERT INTO testtable(Email, Username, Password, Id) VALUES('$email', '$user', '$pass', '$id')";
};

if ($sql -> query($srv)=== TRUE){
    echo 'Data sent successfully';
} else {
    echo 'Error sending Data';
}


}



?>