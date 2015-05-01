<?php
// Link to config.php
require_once(__DIR__ . "/../model/config.php");

unset($_SESSION["authenticated"]);
// When logged out session will be destroyed in "index.php"
session_destroy();
header("Location: " . $path . "index.php");