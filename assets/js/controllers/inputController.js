
// Input Controller object
function InputController() {

    // variables

    this.player1Left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.player1Right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.player2Left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.player2Right = game.input.keyboard.addKey(Phaser.Keyboard.D);


    // functions

    // initialise the input controller
    this.init = function() {

        //  Register the keys.
        
        //  Stop the following keys from propagating up to the browser
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.D, Phaser.Keyboard.A ]);
        
    } // init()

    // pass in the player and a string with the sign eg "+" or "-"
    this.pivotPlayer = function(player, sign){

        if(sign == "+"){ // if positive

            // increase pivot value
            player.pivot.x += 0.5;

        }
        else // if negative 
        {
            // decrease pivot value
            player.pivot.x -= 0.5;

        } // if

    } // pivotPlayer()

    // initialise the controller
    this.init();

} // InputController()