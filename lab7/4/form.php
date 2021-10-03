<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
    </script>
    <title>Lab7-4 Form</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <?php
    $data = array(
        "id" => $_POST["id_num"],
        "prefix" => $_POST["prefix"],
        "fname" => $_POST["fname"],
        "lname" => $_POST["lname"],
        "address" => $_POST["address"],
        "district" => $_POST["district"],
        "province" => $_POST["province"],
        "zipcode" => $_POST["zipcode"],
        "phone" => $_POST["phone"]
    );
    echo "<div class='container overflow-auto' style='height:220px;'>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>หมายเลขบัตรประชาชน</th>
                    <th scope='col'>คำนำหน้า</th>
                    <th scope='col'>ชื่อจริง</th>
                    <th scope='col'>นามสกุล</th>
                    <th scope='col'>ที่อยู่</th>
                    <th scope='col'>อำเภอ/เขต</th>
                    <th scope='col'>จังหวัด</th>
                    <th scope='col'>รหัสไปรษณีย์</th>
                    <th scope='col'>เบอร์โทรศัพท์</th>
                </tr>
            </thead>
            <tbody>";

    echo "<tr>";
    foreach ($data as $key => $value) {
        echo "<td>$value</td>";
    }

    echo "</tr>
            </tbody>
        </table>
        <button type='button' class='btn btn-primary' onclick='location.href=`index.html`'>back</button>
    </div>";
    ?>
    <script>
    let body = document.querySelector("tbody");
    let check = body.querySelectorAll("td");
    for (let i = 0; i < check.length; i++) {
        if (check[i].innerHTML.length < 5) {
            check[i].style.color = "red";
        }
    }
    </script>
</body>

</html>