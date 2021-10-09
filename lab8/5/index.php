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
        width: 60%;
        height: 80%;
        overflow-y: auto;
        background-color: white;
        padding: 2%;
        border-radius: 10px;
    }

    .card {
        background-color: rgb(245, 245, 245);
    }

    img {
        width: 100%;
        height: auto;
    }

    ::-webkit-scrollbar {
        /* width */
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        /* Track */
        background: white;
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
    <div class="container">
        <?php
        $url = "http://10.0.15.20/lab8/restapis/10countries";
        $response = json_decode(file_get_contents($url));

        foreach ($response as $r) {
            echo '<div class="card mb-3" id=' . $r->alpha3Code . 'style="width: 90%;">
            <div class="row no-gutters d-flex justify-content-around">
                <div class="col-md-5">
                    <div class="card-body">
                        <h4>Name: <b>' . $r->name . '</b></h4>
                        <h4>Capital: ' . $r->capital . '</h4>
                        <h4>Population: ' . $r->population . '</h4>
                        <h4>Region: ' . $r->region . '</h4>';
            $txt = "";
            foreach ($r->latlng as $l) {
                $txt = $txt . " " . $l;
            }
            echo '                <h4>Location:' . $txt . '</h4>';
            $txt = "";
            foreach ($r->borders as $b) {
                $txt = $txt . " " . $b;
            }
            echo '                <h4>Borders:' . $txt . '</h4>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-around">
                    <img src="' . $r->flag . '">
                </div>
            </div>
        </div>';
        }
        ?>
    </div>
</body>

</html>