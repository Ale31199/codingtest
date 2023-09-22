<?php

/*
echo $_SESSION["username"] . '<br';
echo $_SESSION["password"] . '<br>';
*/
if(isset($_POST["logout"])){
    session_destroy();
    header("location: zprova2.php");
}


if(isset($_POST['register'])){
    session_start();
    header("location: zprova2.php");
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
    This is the homepage<br>
    <form action="zprova.php" method="post" >
<input type="submit" name="logout" value="logout">


<input type="submit" name="register" value="register">

    </form>
</body>
</html>