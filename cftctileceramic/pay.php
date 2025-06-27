<?php
require_once __DIR__ . '/vendor/autoload.php';

use Shopier\Shopier;
use Shopier\Models\Buyer;

$apiKey = '3f823d81fee2c83863764f4137a0e5df';
$apiSecret = 'd127efaf06ef8ad907867fa23ad2beb7';

$shopier = new Shopier($apiKey, $apiSecret);

// Formdan gelen veriler
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$productName = $_POST['product'];
$totalPrice = $_POST['price'];

$orderId = rand(100000, 999999);

$buyer = new Buyer([
    'id' => $orderId,
    'name' => $name,
    'surname' => $surname,
    'email' => $email,
    'phone' => $phone,
]);

$params = $shopier->getParams();
$params->setBuyer($buyer);
$params->setOrderData($orderId, $totalPrice);
$params->setProductData($productName);

// Shopier'e yönlendir
$shopier->go();



