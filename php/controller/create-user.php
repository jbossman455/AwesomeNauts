<?php
// Link to config.php.
require_once(__DIR__ . "/../model/config.php");

// allows email,password, and username to be filtered and inserted.
$username = filter_input(INPUT_POST, "username" , FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "password" , FILTER_SANITIZE_STRING);

// 
$salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true) . "$";
// crypts passwword when typed.
$hashedPassword = crypt ($password, $salt);
// 
$query = $_SESSION["connection"]->query("INSERT INTO users SET " 
      . "email = '"
      . "username = '$username',"
      . "password = '$hashedPassword',"
      . "salt  = '$salt' , "
      . "exp = 0,"
      . "exp= 0 ,"
      . "exp = 0,"
      . "exp = 0,"
      . "exp = 0,");

$_SESSION["name"] = $username;
       
// echo's when user has succesfully created a username.
if($query) {
    // Need this for Ajax on index.php
    echo "true";
}
// if not succesfully created page will say "User not successfully created."
else{
    echo "<p>" . $_SESSION["connection"]->error . " <p> User not successfully created.</p>";
}