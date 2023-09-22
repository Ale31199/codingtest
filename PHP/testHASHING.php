<?php
$password = 'caccamella333';


$hash = password_hash($password, PASSWORD_DEFAULT);



if(password_verify("caccamella333", $hash)){
    echo'youre logged in';
} else {
    echo 'not correct';
}



// hashing = trasforma data sensibili (password) in lettere, num, o simboli
//nascondendo l'originale dalle terze parti

?>

