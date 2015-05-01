<?php
// User database class in Localhost.
class Database {
   private $connection;
   private $host;
   private $username;
   private $password;
   private $database;
   public $error;

// Constructing host, database, password, and username in Local host.
 public function __construct($host, $username, $password, $database) {
     $this->host = $host;
     $this->database = $database;
     $this->password = $password;
     $this->username = $username;
     
     
     
 }
 // Opening Database class in Localhost.
    public function openConnection () {
        $this->connection= new mysqli($this->host, $this->username,$this->password);
         
           if($this->connection->connect_error) {
               die("<p>Error: " . $this->connection->connect_error . "</p>");
           }
         
    }// CLosing database class in LocalHost
    public function closeConnection () {
        if(isset($this->connection)) {
            $this->connection->close();
        }
        
    } 
    public function query($string) {
        $this->openConnection();
        
        $query = $this->connection->query($string);
        
        if (!$query) {
         $this->error = $this->connection->error;
            
        }
        
        $this->closeConnection();
    
        return $query;
         }
}
