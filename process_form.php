<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $name = $data['firstName'];
        $email = $data['email'];
        $message = $data['message'];

        // Compose the email body
        $email_body = "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Message:\n$message";

        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                      // Disable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'support@windowwashingexpert.com';                     //SMTP username
        $mail->Password   = 'aoqfdojdtgdikqnt';                               //SMTP password
        $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
        $mail->Port       = 587; // Check your SMTP port

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('raozahid489@gmail.com', 'Recipient Name');

        //Content
        $mail->isHTML(false);
        $mail->Subject = 'einnovention.org Customer Support';
        $mail->Body    = $email_body;

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Message has been sent']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
