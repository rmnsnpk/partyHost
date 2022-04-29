
<?php


//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1937965576:AAEGSiV33Iw_rWyim2TylnIeOrPr5kLlKso";

//Сюда вставляем chat_id
$chat_id = "-1001543115368";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $data = $_POST['user_date'];
}

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $_POST['user_name'],
        'Телефон:' => $_POST['user_phone'],
        'Дата:' => $_POST['user_date'],
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo('Success');
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo('Error, try again later');
    }


?>