<?php
$capitals = array('usa'=> 'washington dc', 'japan'=>'kyoto', 'south korea'=>'seoul',  'india'=> 'new dehli');

//$capitals['usa'] = 'las vegas';
/*
$keys = array_keys($capitals);
$value = array_values($capitals);

//usa is the key and washington is the value

foreach($keys as $key){
    echo "{$key} <br>";
    }

    foreach($keys as $key){
        echo "{$key} <br>";
        }
    

foreach($capitals as $key=> $value){
echo "{$key} {$value} <br>";
}
*/


$capital = $capitals[$_POST["country"]];

echo "the capital is {$capital}";



?>
<!doctype html>
<html>
<head>

</head>

<body>

<form action="test3.php" method="post">
<p>Enter a country</p>
<input type="text" name="country">
<input type="submit" > 
</form>
   
</body>


</html> 

