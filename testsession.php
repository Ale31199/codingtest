 <?php
if(isset($_POST["login"])){

    if (!empty($_POST["username"]) && !empty($_POST["password"])){

        $_SESSION["username"] = $_POST["username"];
        $_SESSION["password"] = $_POST["password"];

        header("location: testsesHOME.php");

    }else {
        echo "missing username or password";
    }
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
 <form action="testsession.php" method="post">
username:<br>
<input type="text" name="username">
password:<br>
<input type="password" name="password">
<input type="submit" name="login" value="login">




 </form>    



</body>
</html>