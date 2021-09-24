<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
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
    <title>Lab7-5</title>
    <style>
    * {
        font-family: 'Kanit', sans-serif;
    }

    html,
    body {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(240, 240, 240);
    }

    .container {
        padding: 60px;
        background: white;
        border-radius: 20px;
    }

    tr,
    td,
    table {
        border-collapse: collapse;
        text-align: center;
    }

    th {
        background: rgb(60, 60, 60);
        color: white;
    }
    </style>
</head>

<body>
    <div class="container">
        <table class="table table-bordered">
            <?php
            for ($i = 0; $i < 13; $i++) {
                echo "<tr>";
                for ($j = 0; $j < 13; $j++) {
                    if ($i == 0 && $j == 0) {
                        echo sprintf("<th scope='col'>x</th>");
                    } elseif ($i == 0) {
                        echo sprintf("<th scope='row'>%d</th>", $j);
                    } elseif ($j == 0) {
                        echo sprintf("<th scope='col'>%d</th>", $i);
                    } else {
                        echo sprintf("<td>%d</td>", $i * $j);
                    }
                }
                echo "</tr>";
            }
            ?>
        </table>
    </div>
</body>

</html>