<?php
require_once './config/database.php';
require_once './config/config.php';
spl_autoload_register(function ($class_name) {
    require './app/models/' . $class_name . '.php';
});


$input = json_decode(file_get_contents("php://input"), true);
$key = $input['key'];

$productModel = new ProductModel();
$result = $productModel->getProductNameByKey($key);

echo json_encode($result);