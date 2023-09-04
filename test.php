<?php

$servername = "127.0.0.1";
$username = "alessio";
$password = "caccamella.31199";
$dbname = "nuvola";

// Crea la connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

try {
    // Query di selezione
    $sql_select = "SELECT * FROM `testtabella`";
    $result_select = $conn->query($sql_select);

    // Esegui l'insert solo se hai effettivamente una connessione e la query di selezione è andata a buon fine
    if ($result_select) {
        $sql_insert = "INSERT INTO `testtabella` (`Name`, `Surname`, `Email`, `Password`)
                       VALUES ('Alessio', 'Santillo', 'alessiosantillo31199@gmail.com', 'caccamella.31199')";
        if ($conn->query($sql_insert) === TRUE) {
            echo "Inserimento completato con successo";
        } else {
            echo "Errore nell'inserimento: " . $conn->error;
        }
    }
} catch (Exception $e) {
    echo "Errore: " . $e->getMessage();
}

// Chiudi la connessione
$conn->close();
?>
