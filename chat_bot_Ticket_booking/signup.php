<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "museum_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$user = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];
$phone = $_POST['phone'];

// Validate phone number (must be exactly 10 digits)
if (!preg_match("/^\d{10}$/", $phone)) {
    die("Invalid phone number. Please enter a 10-digit number.");
}

// Hash the password for security
$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO userinformation (username, email, password, phone) VALUES (?, ?, ?, ?)");

// Bind parameters (note: changed 'i' to 's' for phone number as a string)
$stmt->bind_param("ssss", $user, $email, $hashed_password, $phone);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
