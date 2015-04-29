 game.GameTimerManager = Object.extend({
     // Manages different timers in game.
      init:function(x, y, settings){
          this.now = new Date (). getTime();
          this.lastCreep = new Date () . getTime();
          this.paused = false;
          this.alwaysUpdate=true;
            
          
    },
    update: function() {
        this.now = new Date().getTime();
        //Checking to see if goldTimer and Creep timer are functioning.
        this.goldTimerCheck();
        this.creepTimerCheck();
        
        return true;
     },
    
    goldTimerCheck: function (){
        // Sets how much time for the Gold Timer.
            if (Math.round(this.now / 1000) % 20 === 0 && (this.now - this.lastCreep >= 1000)) {
           // Sets how much gold and exp player recieves
            game.data.gold+= game.data.exp1+1;
            console.log("Current gold: " + game.data.gold);
        }
    },
    
    creepTimerCheck: function (){
        // Timer for how often creeps spawn
        if (Math.round(this.now / 1000) % 10 === 0 && (this.now - this.lastCreep >= 1000)) {
            this.lastCreep = this.now;
            // Location of where creep spawns on the map.
            var creepe = me.pool.pull("EnemyCreep", 1000, 0, {});
            me.game.world.addChild(creepe, 5);
        }
    }
});
