<?php

$recepient = "arseniy.kozenko@yandex.ru";
$sitename = "Ремонт квартир";

$data = $_POST;
echo $data['username'];

$name = trim($_POST["username"]);
$phone = trim($_POST["userphone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");