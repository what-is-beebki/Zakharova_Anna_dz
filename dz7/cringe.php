<?php
$data = json_decode(file_get_contents('php://input'));
$data->best_anek = "man & hat";
$data = json_encode($data);
echo $data;
?>