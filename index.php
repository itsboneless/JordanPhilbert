<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jordan Philbert Portfolio</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="icon" type="image/png" href="images/logo.png">
        </head>
    <body>
        <!-- static navbar -->
        <header class="menu">
            <div class="navbar">
                <a href="index.php">Home</a>
                <a href="#project">Projects</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
        </header>
        <!-- end navbar -->

        <!-- background homepage -->
        <div class="background">
            <div class="background-column">
                <div class="text-wrapper">
                    <div class="text">
                        <h1>RECENT WORK</h1>
                        <p>A COLLECTION OF WORK, PAST AND PRESENT. SOME BUILT FOR
                            TODAY, FOR TOMORROW AND OTHERS FOR THE FUTURE.</p>
                    </div>
                </div>
            </div>
            <div class="background-column">
                <div class="lastupdated">last updated 30 12 2022</div>
            </div>
            <div class="background-column">
                <div class="weather-container">
                    <p class="country"></p>
                        <img class="icon" alt="Weather icon">
                    <p class="description"></p>
                    <p class="temp"></p>
                </div>
            </div>
        </div>
        <!-- end background -->

           <!-- Project grid -->
           <div class="grid-container" id="project">
                <div class="grid">
                     <?php include 'projects.php';?>
                </div>
            </div>
        <!-- end project grid -->

    </body>
    <script src="weather.js"></script>
</html>