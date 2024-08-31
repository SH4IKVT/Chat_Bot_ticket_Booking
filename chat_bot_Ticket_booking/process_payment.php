<?php
// Retrieve POST data from the form
$username = $_POST['username'];
$phone = $_POST['phone'];
$num_tickets = $_POST['num_tickets'];
$payment_mode = $_POST['payment_mode'];
$amount = $_POST['amount']; // This is calculated in the form

// Connect to the MySQL database using XAMPP
$conn = new mysqli('localhost', 'root', '', 'museum_database');

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Prepare the SQL statement to insert data into the payments table
$stmt = $conn->prepare("INSERT INTO bookings (username, phone, payment_mode, num_tickets, amount) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssii", $username, $phone, $payment_mode, $num_tickets, $amount);

// Execute the statement
if ($stmt->execute()) {
    echo "Payment details saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
