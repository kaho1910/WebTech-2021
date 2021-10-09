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
    <title>Lab8-2</title>
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
        padding: 35px;
        border-radius: 20px;
    }

    ::-webkit-scrollbar {
        /* width */
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        /* Track */
        background: #eee;
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
    <div class="container" style="width: 80%; height: 80%; overflow: auto;">
        <?php
        $url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";
        $response = json_decode(file_get_contents($url));
        $count = 0;
        echo "<h2>ข้อมูลวันที่ : " . $response[0]->txn_date . "</h2>";
        ?>
        <div class="container" style="width: 100%; height: 90%; overflow: auto;">
            <table class="table" data-sticky-header="true">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>จังหวัด</th>
                        <th>ผู้ติดเชื้อ</th>
                        <th>เสียชีวิต</th>
                        <th>ยอดผู้ป่วยสะสม</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    foreach ($response as $res) {
                        echo "<tr>
                        <td>" . ++$count . "</td>
                        <td>" . $res->province . "</td>
                        <td>" . $res->new_case . "</td>
                        <td>" . $res->new_death . "</td>
                        <td>" . $res->total_case . "</td>
                    </tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>