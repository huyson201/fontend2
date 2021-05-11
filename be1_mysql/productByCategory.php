<?php
require_once './config/database.php';
require_once './config/config.php';
spl_autoload_register(function ($class_name) {
    require './app/models/' . $class_name . '.php';
});

$input=json_decode(file_get_contents('php://input'),true);
$id=$input['id'];

if (empty($id)) {
    echo json_encode(false); die; 
}

$productModel = new ProductModel();
$product = [];
foreach ($id as $value ) {
    $productList = $productModel->getProductsByCategory($value); 
   $product = array_merge($product,$productList);
}

echo json_encode($product);
?>