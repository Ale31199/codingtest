<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

<?php


setcookie("fav_food", "pizza", time() + (86400 * 2), "/");
setcookie("fav_drink", "cola", time() + (86400 * 2), "/");
setcookie("fav_dessert", "ice_cream", time() + (86400 * 2), "/");

foreach($_COOKIE as $key => $value){
    echo "{$key} = {$value} <br>";
}
 if (isset($_COOKIE["fav_food"])){
echo "buy some {$_COOKIE["fav_food"]}";
 } else {
    echo "I don't know your favorite food";
 }

?>

