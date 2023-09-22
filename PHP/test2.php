<?php
$x = $_POST["x"];
$y = $_POST["y"];
$total = null;

//$total = abs ($x);
//$total = round ($x);
//$total = floor ($x);
//$total = ceil ($x);
//$total = pow($x, $y);
//$total = sqrt($x);
//$total = max($x);
//$total = min($x);
//$total = rand(1, 6);
echo $total
?>


<!doctype html>
<html>
<head>

</head>

<body>
    <!-- per action significa in che file inviare i dati-->
    <form action="test2.php" method="post">
      <p>x:</p>
      <input type="text" name="x">
      <p>y:</p>
      <input type="text" name="y">
      <input type="submit" value="total">

    </form>
</body>


</html> 

