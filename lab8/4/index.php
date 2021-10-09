<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital@0;1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Lab8-4</title>
    <style>
    * {
        font-family: 'Kanit', sans-serif;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eee;
    }

    .card {
        padding: 30px;
        background-color: #fff;
        border-radius: 20px;
    }

    .card-img-top {
        border-radius: 10px;
    }

    .card-text {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    </style>
</head>

<body>
    <?php
    $url = "https://www.themealdb.com/api/json/v1/1/random.php";
    $res = json_decode(file_get_contents($url))->meals[0];
    ?>
    <div class="container d-flex justify-content-center" style="width:80%;">
        <div class="card" style="width: 60%;">
            <img class="card-img-top" src=<?php echo $res->strMealThumb; ?> alt="pic">
            <div class="card-body">
                <h5 class="card-title"><?php echo $res->strMeal; ?></h5>
                <hr>
                <p class="card-text"><?php echo $res->strInstructions; ?></p>
                <div class="d-flex flex-row justify-content-center">
                    <button onclick="window.location.reload()" type="button" class="btn btn-link mr-2">
                        <span class="material-icons">refresh</span>
                    </button>
                    <a href=<?php echo $res->strSource; ?> target="_blank" class="btn btn-primary">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>