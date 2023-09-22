<?php

header('Access-Control-Allow-Origin: *');


$servername = "127.0.0.1";
$username = "alessio";
$password = "caccamella.31199";
$dbname = "test";

$srv = new mysqli($servername, $username, $password, $dbname);

if($srv -> connect_error){
    die('Error Connecting'.  $srv -> connect_error);
}

$id = rand(0, 99999999);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; 
    $user = $_POST['username'];  
    $pass = $_POST['password'];

if(empty($_POST['email'] && $_POST['username'] && $_POST['password'])){

    echo 'Email, Username and Passoword are required';
} else{

$sql = "INSERT INTO testtable (Email, Username, Password, Id) VALUES ('$email', '$user', '$pass', '$id')";


    if ($srv->query($sql) === TRUE){
        echo 'Dati inviati con successo';
    } else {
        echo "Errore nell'invio dei dati";
    }

}

}

$srv->close();

/*

per filtrare in modo corretto gli input si mette filter:


$email = filter_input(INPUT_POST, $email, FILTER_SANITIZE_EMAIL)
$age = filter_input(INPUT_POST, $age, FILTER_SANITIZE_NUMBER_INT)
$user = filter_input(INPUT_POST, $user, FILTER_SANITIZE_SPECIAL_CHART)
$age = filter_input(INPUT_POST, $age, FILTER_VALIDATE_INT)
$email = filter_input(INPUT_POST, $email, FILTER_VALIDATE_EMAIL)

*/
?>


