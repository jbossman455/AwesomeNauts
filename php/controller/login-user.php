<?php
//Link to config.php
require_once(__DIR__ . "/../model/config.php");


$array = array(
    'exp' => '',
    'exp1' => '',
    'exp2' => '',
    'exp3' => '',
    'exp4' => '',
    
);

$username = filter_input(INPUT_POST, "username",FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "password",FILTER_SANITIZE_STRING);
// Selects salt and password in user database.
$query = $_SESSION["connection"]->query("SELECT * FROM users WHERE username = '$username'");

if ($query->num_rows == 1) {
    $row = $query->fetch_array();
     // If salt and password match, will echo ..
    if ($row["password"] === crypt($password, $row["salt"])) {
        $_SESSION["authenticated"] = true;
        $array["exp"] = $row["exp"];
        $array["exp1"] = $row["exp1"];
        $array["exp2"] = $row["exp2"];
        $array["exp3"] = $row["exp3"];
        $array["exp4"] = $row["exp4"];
        $_SESSION["name"] = $username;
        echo json_encode($array);
        
     // If username is correct, will echo.
        echo "<p>Login Successful!</p>";
      // if invalid username will username will echo...
    } else { 
        echo"<p>Invalid username and password1</p>";
    }//if invalid password will echo...
} else {
    echo"<p>Invalid username and password2</p>";
}