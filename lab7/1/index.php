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
    <title>Lab7-1</title>
    <style>
    * {
        font-family: 'Kanit', sans-serif;
    }

    body,
    html {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h5 {
        text-align: center;
    }
    </style>
</head>

<body>
    <div class="container" style="height:80%">
        <form method="post">
            <div class="form-group row">
                <label for="num" class="col-2 col-form-label">กรอกสูตรคูณ :</label>
                <div class="col-8">
                    <input type="number" class="form-control" id="num" name="number" placeholder="ระบุตัวเลข">
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary">แสดงตาราง</button>
                </div>
            </div>
        </form>
        <div class="container" style="height:80%">
            <?php
            if (isset($_POST["number"])) {
                $num = $_POST["number"];
                echo "<h2>ตารางสูตรคูณแม่ $num</h2>";
                cal($num);
            }
            function cal($num)
            {
                if ($num != "") {
                    for ($i = 1; $i < 13; $i++) {
                        echo sprintf("<h5>%d x %d = %d</h5><hr>", $num, $i, $num * $i);
                    }
                }
            }
            ?>
        </div>
    </div>
</body>

</html>