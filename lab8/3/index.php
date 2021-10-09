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
    <title>Lab8-5</title>
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

    .container {
        background-color: #fff;
        border-radius: 20px 0px 0px 20px;
    }

    ::-webkit-scrollbar {
        /* width */
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        /* Track */
        background: #eee;
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
    <div class="container overflow-auto h-75 p-5">
        <?php
        $url = "http://10.0.15.20/lab8/restapis/movies90";
        $response = json_decode(file_get_contents($url));
        $count = 0;
        foreach ($response as $r) {
            $txt = "";
            echo "<div class='p-4'>
                <h2><b>" . ++$count . ". " . $r->title . "</b> (" . $r->year . ")</h2>
                <h3><b>Cast :</b></h3>";
            foreach ($r->cast as $c) {
                echo "<h3>- " . $c . "</h3>";
            }
            for ($i = 0; $i < sizeof($r->genres); $i++) {
                if ($i == sizeof($r->genres) - 1) {
                    $txt = $txt . $r->genres[$i];
                } else {
                    $txt = $txt . $r->genres[$i] . ", ";
                }
            }
            echo "<h3><b>Genres :</b> " . $txt . "</h3>";
            echo "</div>";
        }
        ?>
    </div>
</body>

</html>