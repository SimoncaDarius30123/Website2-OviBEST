<?php
// Verificăm dacă formularul a fost trimis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Colectăm datele din formular
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Construim mesajul de email
    $email_message = "
    Nume: $name
    Email: $email
    Telefon: $phone
    Localitate: $subject
    Detalii: $message
    ";

    // Trimitem emailul
    mail("oferta@ovibest.ro", "New Message", $email_message);

    // Redirecționăm către altă pagină HTML
    header("Location: contactUs.html");
    exit;
}
?>
