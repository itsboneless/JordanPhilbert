
<?php 
    $servername = "studmysql01.fhict.local";
    $username = "dbi481132";
    $password = "Tgg0flmLcj";
    $database = "dbi481132";

    $connection = new mysqli($servername, $username, $password, $database);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $sql = "SELECT * FROM datatest";
    $result = $connection->query($sql);

    if (!$result) {
        die("Invalid query: " . $connection->error);
    }
?>

    <?php 
    while($row = $result->fetch_assoc()) { ?>
    <div class="grid-item">
            <a href="<?php echo $row["Description"]; ?>">
                <h1 class="Name"><?php echo $row["Name"]; ?></h1>
                <h1 class="Date"><?php echo $row["Year"]; ?></h1>
                <img src="<?php echo $row["Image"]; ?>" alt="<?php echo $row["Name"]; ?>">
            </a>
    </div>
    <?php } ?>


