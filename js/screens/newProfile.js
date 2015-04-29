game.NewProfile = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage ("new-screen")), -10); // TODO
                
               me.input.unbindKey(me.input.KEY.B);
               me.input.unbindKey(me.input.KEY.Q);
               me.input.unbindKey(me.input.KEY.E);
               me.input.unbindKey(me.input.KEY.W);
               me.input.unbindKey(me.input.KEY.A);
               var exp1cost =  ((game.data.exp1 + 1) * 10);
                
                me.game.world.addChild (new (me.Renderable.extend ({
                    init: function () {
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font ("Arial", 46, "white");
                        
                    },
                    
                    
                    draw: function (renderer) {
                        this.font.draw(renderer.getContext(), "PICK A USERNAME AND PASSWORD.", this.pos.x , this.pos.y); this.font.draw(renderer.getContext(), "CURRENT EXP: " + game.data.exp.toString(), this.pos.x + 100 , this.pos.y - 50);  
        
                       
                    }
                       })));
               this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
                   if(action === "F1"){
                       if(game.data.exp >=  exp1cost){
                          game.data.exp1 += 1; 
                          game.data.exp -= exp1cost;
                          me.state.change(me.state.PLAY);
                       }else{
                           console.log("not enough experience");
                       }
                   }else if(action === "F2") {
                        
                   }else if(action === "F3") {
                          
                   }else if(action === "F4") {
                          
                   }else if(action === "F5") {
                     me.state.change(me.state.PLAY);
                   }
               });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {

	}
});

