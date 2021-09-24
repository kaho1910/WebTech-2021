<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <title>Lab7-6</title>
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
        background: rgb(240, 240, 240);
    }

    .container {
        background: rgb(255, 255, 255);
        padding: 2% 0.5% 2% 4%;
        border-radius: 30px;
    }

    img {
        margin: 3% 0 3% 0;
        padding: 0;
        border-radius: 7px;
    }

    div.row {
        width: 100%;
    }

    div.col-3 {
        padding: 0;
    }

    ::-webkit-scrollbar {
        /* width */
        width: 10px;

    }

    ::-webkit-scrollbar-track {
        /* Track */
        background: #fff;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        /* Handle */
        background: #888;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        /* Handle on hover */
        background: #555;
    }
    </style>
</head>

<body>
    <div class="container" style="width: 80%; height: 85%;">
        <h2 style="text-align: center;height: 6%;">
            My Gallery
            <span class="material-icons">collections</span>
        </h2>
        <!-- <div style="overflow:auto; height:94%;"> -->
        <div class="row" style="overflow:auto; height:94%;">
            <?php
            // for ($i = 1; $i < 9; $i++) {
            //     echo "<div class='row'>";
            //     for ($j = 1; $j < 5; $j++) {
            //         $num = $i * 7 + 3 * $j;
            //         echo "<img class='col-3' src='https://picsum.photos/id/$num/200/300' width='80%'>";
            //     }
            //     echo "</div>";
            // }
            $set = array("150", "200", "300", "350");
            for ($i = 0; $i < 4; $i++) {
                echo "<div class='col-3'>";
                for ($j = 1; $j < 13; $j++) {
                    $num = $i * 7 + 3 * $j;
                    $random = $set[$num % 4];
                    echo "<img src='https://picsum.photos/id/$num/200/$random' width='90%'>";
                }
                echo "</div>";
            }
            ?>
        </div>
    </div>
</body>

</html>