<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Recoger los datos del formulario
$nombre = $_POST['nombre'];
$fecha = $_POST['fecha'];
$asunto = $_POST['asunto'];

// Configurar el destinatario y el asunto del correo
$destinatario = "rodriguezalanm731@gmail.com";
$asunto_email = "Mensaje de contacto desde tu formulario";

// Construir el cuerpo del mensaje
$cuerpo_email = "Nombre: $nombre\n";
$cuerpo_email .= "Fecha: $fecha\n";
$cuerpo_email .= "Mensaje:\n$asunto";

// Crear una instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Servidor SMTP de Gmail
    $mail->SMTPAuth = true;
    $mail->Username = 'rodriguezalanm731@gmail.com'; // Tu dirección de correo de Gmail
    $mail->Password = 'sukuna12345.'; // Tu contraseña de Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Configuración del correo
    $mail->setFrom('rodriguezalanm@gmail.com', 'Tu Nombre');
    $mail->addAddress($destinatario);

    $mail->isHTML(false);
    $mail->Subject = $asunto_email;
    $mail->Body = $cuerpo_email;

    // Enviar el correo
    $mail->send();
    echo "<p>¡El mensaje se ha enviado correctamente!</p>";
} catch (Exception $e) {
    echo "<p>Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.</p>";
    echo "<p>Error: {$mail->ErrorInfo}</p>";
}
?>
