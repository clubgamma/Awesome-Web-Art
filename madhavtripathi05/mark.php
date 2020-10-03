<?php

require_once 'app/init.php';

if(isset($_GET['as'], $_GET['id'])) {
    $as = $_GET['as'];
    $id = $_GET['id'];

    echo $as;

    switch($as) {
        case 'done':
            $doneQuery = $db->prepare("
                UPDATE todos
                SET done = 1
                WHERE id = :id
                AND username = :username
            ");

            $doneQuery->execute([
                'id' => $id,
                'username' =>'user'.$_SESSION['user_id']
            ]);
            break;
            
        case 'undone':
            
            $doneQuery = $db->prepare("
                UPDATE todos
                SET done = 0
                WHERE id = :id
                AND username = :username
            ");

            $doneQuery->execute([
                'id' => $id,
                'username' => 'user'.$_SESSION['user_id']
            ]);

        break;
    }

}

header('Location: index.php');
?>