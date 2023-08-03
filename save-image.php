<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST["imageData"])) {
        $dataURL = $_POST["imageData"];

        // Remove the data URL prefix
        $encodedImage = str_replace("data:image/png;base64,", "", $dataURL);

        // Decode the base64-encoded image data
        $decodedImage = base64_decode($encodedImage);

        // Specify the directory paths for saving the images and HTML files
        $capturesDirectory = "./captures/"; // The directory where the images will be saved
        $pagesDirectory = "./pages/"; // The directory where the HTML files will be saved

        // Check if the directories exist, if not, create them
        if (!is_dir($capturesDirectory)) {
            mkdir($capturesDirectory, 0777, true);
        }
        if (!is_dir($pagesDirectory)) {
            mkdir($pagesDirectory, 0777, true);
        }

        // Generate a unique filename using timestamp
        $timestamp = time();
        $filename = "captured" . $timestamp . ".png"; // e.g., captured1626185721.png
        $htmlFilename = "page" . $timestamp . ".html"; // e.g., page1626185721.html

        // Save the image file to the captures directory
        $success = file_put_contents($capturesDirectory . $filename, $decodedImage);

        if ($success !== false) {
            // Generate the HTML file content
            $htmlContent = '<!DOCTYPE html>
<html>
<head>
    <meta property="og:image" content="https://bitnet.kerley.ge/' . $capturesDirectory . $filename . '">
    <meta property="og:title" content="bitcoin or stupid shit?" />
    <meta property="og:description" content="Buy bitcoin instead of fuckin stupid shit" />

    <!-- Add other necessary meta tags -->
</head>
<body>
    <!-- Add your HTML content here -->
    <img src="https://bitnet.kerley.ge/' . $capturesDirectory . $filename . '" alt="Image">
    <script>window.location.href = "https://bitnet.kerley.ge/";
</script>
</body>
</html>';

            // Save the HTML file to the pages directory
            $success = file_put_contents($pagesDirectory . $htmlFilename, $htmlContent);

            if ($success !== false) {
                $htmlUrl = $pagesDirectory . $htmlFilename; // URL of the saved HTML file
                echo $htmlUrl;
                exit;
            } else {
                echo "Failed to save the HTML file.";
                exit;
            }
        } else {
            echo "Failed to save the image.";
            exit;
        }
    }
}
?>