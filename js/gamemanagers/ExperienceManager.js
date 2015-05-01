 game.ExperienceManager = Object.extend ({
     init: function (x, y, settings) {
         // Always updating experience after player recieves.
         this.alwaysUpdate = true;
         this.gameOver = false;
     },
     
     update: function() {
         if(game.data.win=== true && !this.gameOver){
            this.gameOver= true;
            alert("YOU WIN");
            
         }else if(game.data.win=== false && !this.gameOver){
                this.gameOver(false); 
                alert("YOU LOSE");
         }
         
         return true;
     },
     
     gameOver: function (win) {
         if(win) {
             // If player wins he recieves 10 exp.
           game.data.exp += 10;
         }else{
             // Otherwise he will recieve 1 exp.
              game.data.exp += 1;
         }
         console.log(game.data.exp);
         this.gameOver = true;
         // Saves exp as Game goes on
          me.save.exp = game.data.exp;
          
              
                    $.ajax({
                        
                        type: "POST",
                        // Linking it to create-user.php in the controller folder
                        url: "php/controller/save-user.php",
                        data: {
                         exp: game.data.exp,
                         exp1: game.data.exp1,
                         exp2: game.data.exp2,
                         exp3: game.data.exp3,
                         exp4: game.data.exp4
                        },
                        dataType: "text"
                    })  // If the function is successful it will be true.
                        .success(function(response){
                            if(response==="true")  {
                                me.state.change(me.state.MENU);
                              // If not succesfull it will alert a response  
                            }else{
                                alert(response);
                            }
                    })
                    .fail(function(response){
                        alert("fail");
                    });     
          
     }
     
  });