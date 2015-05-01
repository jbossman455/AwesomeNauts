<?php
// Link to config.php in model folder.
require_once(__DIR__ . "/../model/config.php");
// Making sure user is authenticated and verified.
function authenticateUser() {
    if (!isset($_SESSION["authenticated"])) {
        return false;
    } 
        
  else  {
  if($_SESSION["authenticated"]  != true){
      return false;

       }
  else{
      return true;
  }
}

}

    

