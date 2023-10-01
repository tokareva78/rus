<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$site = $_POST['site'];

$token = '6569980160:AAGvLUx7Ygjx0i8LUHdi7TZWDRRmrZJcGRM';
$chat_id = '-4064135071'; // -4029074444
$arr = [
  'Форма: ' => $site,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
];


foreach ($arr as $key => $value) {
  $txt .= '<b>' . $key . '</b> ' . $value . '%0A';
}


$sendToTelegram = fopen(
  "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}",
  'r'
);

if ($sendToTelegram) {
  header('Location: index');
} else {
  echo 'Error';
}
