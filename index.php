<?php
    $jsonString = file_get_contents("dane.json");
    $data = json_decode($jsonString, true);
    
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $surname = $_POST['surname'];
    $com = $_POST['com'];

    array_push($data, array('name'=>"$name", 'surname'=>"$surname", 'com' => "$com", 'email' => "$email"));
    $newJsonString = json_encode($data);
    file_put_contents("dane.json", $newJsonString);

    header('Location: kontakt.html');

?>