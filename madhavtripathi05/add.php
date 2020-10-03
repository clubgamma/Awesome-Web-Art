<?php

require_once 'app/init.php';

if(isset($_POST['name'])) {
    $name = trim($_POST['name']);

    if(!empty($name)) {

        $addQuery = $db->prepare("
            INSERT INTO todos (name, username, done, created)
            VALUES (:name, :username, 0, NOW())
        ");

        $addQuery->execute([
            'name' => $name,
            'username' => 'user'.$_SESSION['user_id']
        ]);

    }
}

header('Location: index.php');
?>