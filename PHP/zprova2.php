<?php

if (isset($_POST['register'])){

    if(!empty($_POST['email'] && $_POST['user']&& $_POST['pass'])){

       $_SESSION['email'] = $_POST['email'];
       $_SESSION['user'] = $_POST['user'];
       $_SESSION['pass'] = $_POST['pass'];

       echo 'Registration Completed!';

       header('location: zprova.php');
        
    } else{
        echo 'Email, Username & Password must be compiled';
    }

}


if (isset($_POST['back'])){
    session_destroy();
    header("location:zprova.php");
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Registration Page</h1>
<form action="zprova2.php" method="post">
Email:<br>
<input type="email" name="email"><br>
Username:<br>
<input type="text" name="user"><br>
Password:<br>
<input type="password" name="pass"><br>
<input type="submit" name= 'register' value="Register"><br><br><br><br>
<input type="submit" name ='back'value='Back to the Home Page'>

</form>    




</body>
</html>