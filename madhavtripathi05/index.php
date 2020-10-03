<?php
  require_once 'app/init.php';
  $todosQuery = $db->prepare("
    SELECT id, name, done 
    FROM todos 
    WHERE username =:username
  ");
  $todosQuery->execute([ 'username' => 'user'.$_SESSION['user_id'] ]); 
  $todos = $todosQuery->rowCount() ? $todosQuery : []; 

  

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todos</title>
    
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="list">
      <h1>Todos</h1>

      <?php echo "Developed by Madhav while 💤" ?>
      <?php if(!empty($todos)): ?>
    
      <ul class="todos">
         <?php foreach($todos as $todo): ?>
        <li>
          <a class="delete-button" href="delete.php?item_id=<?php echo $todo['id']; ?>">Delete ❌</a>
          <span class="pending<?php echo $todo['done']?' done':''; ?>"><?php echo $todo['name']; ?></span>
           <?php if(!$todo['done']): ?>
                    <a href="mark.php?as=done&id=<?php echo $todo['id']; ?>" class="done-button">Done ✔</a>
          <?php elseif($todo['done']): ?>
                    <a href="mark.php?as=undone&id=<?php echo $todo['id']; ?>" class="done-button">Undo ↺</a>
          <?php endif; ?>
        </li>
        <?php endforeach; ?>
      </ul>


      <?php else: ?>
        <p>start adding something!</p>
    <?php endif; ?>

      <form class="add-todo" action="add.php" method="post">
        <input
          type="text"
          name="name"
          placeholder="Add a New Todo"
          autocomplete="off"
          required
          autofocus
        />

        <input type="submit" value="Add" class="submit" />
      </form>
    </div>
  </body>
</html>
