<?php

require_once 'app/init.php';

// check if the todo exists
if(isset($_GET['item_id'])) {
    $item_id = $_GET['item_id'];
   
    // query to delete an item
    $deleteQuery = $db->prepare("
        DELETE FROM todos
        WHERE id = :item_id
        AND username = :username
    ");

    $deleteQuery->execute([
        'item_id' => $item_id,
        'username' => 'user'.$_SESSION['user_id']
    ]);

}

header('Location: index.php',true, 301);
?>