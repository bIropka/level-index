<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['write-us-name'])) {$name = $_POST['write-us-name'];}
    if (isset($_POST['write-us-tel'])) {$phone = $_POST['write-us-tel'];}
    if (isset($_POST['write-us-city'])) {$city = $_POST['write-us-city'];}
    if (isset($_POST['write-us-email'])) {$email = $_POST['write-us-email'];}
    if (isset($_POST['write-us-comment'])) {$comment = $_POST['write-us-comment'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "biropka@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "level"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br><b>Поступило сообщение </b> <br> <b>Имя клиента:</b> $name <br><b>Телефон:</b> $phone <br> <b>Email:</b> $email <b>Город:</b> $city <br>  <b>Текст сообщения:</b> $comment <br>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<p class="success">Спасибо за обращение к нам!</p>';
    }
    else 
    {
    echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>