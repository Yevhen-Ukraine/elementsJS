<?php

// php нативно не умеет работать с форматом json поэтому все что нам приходит от клиента мы декодируем из json. т.о на php коде получаем json данные и можем с ними работать 
$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST);