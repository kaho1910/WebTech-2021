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
    <title>Lab8-1</title>
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
        border-radius: 20px;
        padding: 40px;
    }
    </style>
</head>

<body>
    <?php
    $val1 = 0;
    $val2 = 0;
    $cur1 = "-- [Please Select] --";
    $cur2 = "-- [Please Select] --";
    function check($c)
    {
        $url = "http://10.0.15.20/lab8/restapis/currencyrate";
        $response = json_decode(file_get_contents($url));
        $r = 1;
        if ($c == "THB") {
            $r = $response->rates->THB;
        } else if ($c == "JPY") {
            $r = $response->rates->JPY;
        } else if ($c == "CNY") {
            $r = $response->rates->CNY;
        } else if ($c == "SGD") {
            $r = $response->rates->SGD;
        } else if ($c == "USD") {
            $r = $response->rates->USD;
        }
        return $r;
    }
    if (isset($_POST['submit'])) {
        $val1 = ((float)$_POST['amount1']);
        $cur1 = $_POST['check1'];
        $cur2 = $_POST['check2'];
        $val2 =  $val1 / ((float)check($cur1)) * ((float)check($cur2));
    }
    ?>
    <div class="container">
        <h3>Currency Converter</h3>
        <form action="" method="post">
            <div class="form-group row">
                <div class="input-group mb-2 mr-sm-2">
                    <label for="amount1" class="col-sm-1">From :</label>
                    <select name="check1" class="custom-select col-sm-2 mr-sm-4" id="cur1" required>
                        <option selected hidden value=<?php echo $cur1 ?>><?php echo $cur1 ?></option>
                        <option value="THB">THB</option>
                        <option value="JPY">JPY</option>
                        <option value="CNY">CNY</option>
                        <option value="SGD">SGD</option>
                        <option value="USD">USD</option>
                    </select>
                    <input name="amount1" type="number" min="0" class="form-control col-auto" id="amount1" required
                        value=<?php echo $val1 ?>>
                </div>
            </div>
            <div class="form-group row">
                <div class="input-group mb-2 mr-sm-2">
                    <label for="amount2" class="col-sm-1">To :</label>
                    <select name="check2" class="custom-select col-sm-2 mr-sm-4" id="cur2" required>
                        <option selected hidden value=<?php echo $cur2 ?>><?php echo $cur2 ?></option>
                        <option value="THB">THB</option>
                        <option value="JPY">JPY</option>
                        <option value="CNY">CNY</option>
                        <option value="SGD">SGD</option>
                        <option value="USD">USD</option>
                    </select>
                    <input name="amount2" type="number" readonly class="form-control col-auto" id="amount2"
                        value=<?php echo $val2 ?>>
                </div>
            </div>
            <button type="submit" name="submit" class="btn btn-primary">Convert</button>
        </form>
    </div>
</body>

</html>