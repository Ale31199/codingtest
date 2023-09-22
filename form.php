<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="form.php" method="post">
     Email:<br>
     <input type="email" name="email"><br>
     Username:<br>
     <input type="text" name="user"><br>
     Password:<br>
     <input type="password" name="pass"><br><br><br>

     <input type="submit" value="Register"><br>

 

    </form>
</body>
</html>


<?php
$servername= '127.0.0.1';
$user = 'alessio';
$password = 'caccamella.31199';
$dbname= 'test';


$sql = new mysqli($servername, $user, $password, $dbname);

if ($sql -> connect_error){
    die('Error Connetcing' . $sql ->connect_error);
};


if ($_SERVER['REQUEST_METHOD'] === 'POST'){
$email = $_POST['email'];
$username = $_POST['user'];
$pass = $_POST['pass'];
$id = rand(0, 99999999);

if(empty($email) || empty($username) || empty($pass)){
    echo'Please insert your data';
} else {
    $srv = "INSERT INTO testtable(Email, Username, Password, Id) VALUES ('$email', '$user', '$pass', '$id')";
}

if($sql ->query($srv)=== TRUE){
    echo'Registration Successful';
} else{
    echo 'Error during registration';
};

}



?>