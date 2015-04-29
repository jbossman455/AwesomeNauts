 game.ExperienceManager = Object.extend ({
     init: function (x, y, settings) {
         // Always updating experience after player recieves.
         this.alwaysUpdate = true;
         this.gameOver = false;
     },
     
     update: function() {
         if(game.data.win=== true && !this.gameOver){
            this.gameOver= true;
         }else if(game.data.win=== false && !this.gameOver){
                this.gameOver(false); 
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
     }
     
  });