<?php
require_once './config/database.php';
require_once './config/config.php';
spl_autoload_register(function ($class_name) {
    require './app/models/' . $class_name . '.php';
});


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./public/css/style.css">
</head>

<body>
    <div class="container">
        <h1 class="text-center mb-3">Search</h1>
        <form action="" method="get">
            <div class="mx-auto" style="width: 600px;">
                <div class="input-group">
                    <input type="search" class="form-control rounded" placeholder="Search" id="search-box" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary ml-2">search</button>
                </div>
                <div class="feed-back">
              
                </div>
            </div>
        </form>
    </div>
    <script src="./public/js/ajax.js"></script>
   
</body>

</html>