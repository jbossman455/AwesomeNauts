<?php
// Link to database.php
require_once (__DIR__ ."/database.php");
   session_start();
   session_regenerate_id(true);
   $path = "/JasonBAwesomenauts/php/";
   // Stating host information in Localhost.
   $host = "localhost";
   $username = "root";
   $password = "root";
   $database = "awesomenauts_db";
//    Asking if connection is set
   if (!isset($_SESSION["connection"])){
   $connection = new Database($host, $username, $password, $database);
   $_SESSION["connection"] = $connection;
   }
   