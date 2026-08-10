<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to      = "info@prismtech.ph"; // Replace with your email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "📩 New message from PRISM Tech PH Contact Form:\n\n";
    $body .= "👤 Name: $name\n";
    $body .= "📧 Email: $email\n";
    $body .= "📝 Subject: $subject\n";
    $body .= "💬 Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: ../page/thankyou.html"); // Redirect to thank-you page
        exit();
    } else {
        echo "Error sending message.";
    }
}
?>