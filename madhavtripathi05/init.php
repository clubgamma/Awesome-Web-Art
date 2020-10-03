<?php

// for running locally
$dbName = 'todo';
$host = 'localhost';
$username = 'root';
$password = '';

$cookie_name = "user_id";

session_start();
if(!isset($_COOKIE[$cookie_name])) {
  $cookie_value = round(microtime(true) * 1000);
  //will expire in approx. 8.2 years XD
  setcookie($cookie_name, $cookie_value, time() + (86400 * 3000), "/");
}
session_start();
$_SESSION['user_id'] = $_COOKIE[$cookie_name]??'user'.$cookie_value;
if(empty($_COOKIE[$cookie_name])){
     $_COOKIE[$cookie_name] = 'user'.$cookie_value;
}

$db = new PDO("mysql:dbname=$dbName;host=$host",$username,$password);// Php Data Object

        $addUser = $db->prepare("
            INSERT INTO users (username)
            VALUES (:username)
        ");
        
        $addUser->execute([
            'username' => 'user'.$_SESSION['user_id']
        ]);

    // if user doesn't exist
    if(!isset($_SESSION['user_id'])){
         die('plz sign in again');
         echo 'debug';
    }
