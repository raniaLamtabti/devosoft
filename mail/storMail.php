<?php 
include 'connection.php';
$email = $_POST['email'];

$sql = ('insert into email (email) values(?)');
$req = $bdd->prepare($sql);
$res = $req->execute(array($email));
?>