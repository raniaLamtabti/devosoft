<?php 
$email = $_POST['user_email'];
$message = $_POST['user_message'];
mail("lamtabti.rania@gmail.com",$email,$message);

?>