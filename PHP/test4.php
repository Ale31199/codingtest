
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="test4.php" method="post">

 <input type="radio" name="credit" value="visa" >Visa<br>
 <input type="radio"name="credit" value="american express"> American Express <br>
 <input type="radio" name="credit" value="mastercard">Mastercard <br>
 <input type="submit" name="login" value="login">


    </form>

</body>
</html>

<?php
if (isset($_POST['login'])){

    if(isset($_POST['credit'])){
        $credit = $_POST['credit'];
    }

    switch($credit){
        case 'visa';
        echo 'you selected visa';
        break;

        case 'american express';
        echo 'you selected american express';
        break;

        case 'mastercard';
        echo 'you selected mastercard';
        break;

        default:  echo 'please select a payment method';
    }
   
}




?>


