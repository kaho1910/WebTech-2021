<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form id="showmsg" method="post">
        <label>Input a message.</label>
        <input type="text" id="txtMessage" name="txtMsg" />
        <input type="submit" id="submit" value="Submit">
    </form>
    <h2>
        <?php
        if (isset($_POST["txtMsg"])) {
            Check();
        }
        function Check()
        {
            echo $_POST["txtMsg"];
        }
        ?>
    </h2>
</body>

</html>