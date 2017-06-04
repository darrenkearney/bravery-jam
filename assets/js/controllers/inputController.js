
// Input Controller object
function InputController() {

    // variables

    this.player1Out = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.player1In = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.player1Fire = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.player2Out = game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.player2In = game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.player2Fire = game.input.keyboard.addKey(Phaser.Keyboard.F);

    // functions

    // initialise the input controller
    this.init = function() {

        //  Register the keys.
        
        //  Stop the following keys from propagating up to the browser
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.ENTER, Phaser.Keyboard.W, Phaser.Keyboard.S, Phaser.Keyboard.F ]);
        
    } // init()

    // check for key presses, pass in the two players
    this.checkForKeyPress = function(player1, player2){

        // check if player one is trying to move
        if (this.player1Out.isDown)
        {
            // move the player away from the planet
            this.pivotPlayer(player1.playerSprite, "+");
        }
        else if (this.player1In.isDown)
        {
            // move the player towards the planet
            this.pivotPlayer(player1.playerSprite, "-");
        }
        else if (this.player1Fire.isDown){

            // fire a missile
            player1.fireMissile();

        } // if

        // check if player two is trying to move
        if (this.player2Out.isDown)
        {
            // move the player away from the planet
            this.pivotPlayer(player2.playerSprite, "+");
        }
        else if (this.player2In.isDown)
        {
            // move the player towards the planet
            this.pivotPlayer(player2.playerSprite, "-");
        }
        else if (this.player2Fire.isDown){

            // fire a missile
            player2.fireMissile();

        } // if

    } // checkForKeyPress()

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