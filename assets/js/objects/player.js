
// player object
function Player(isPlayer1) {

    // variables

    this.playerSprite;

    // functions

    // initialise the player
    this.init = function(){

        // set the player sprite
        this.playerSprite = game.add.sprite(400, 300, 'ship');

        // anchor player
        playerSprite.anchor.setTo(0.5);    

        // set the players pivot. (how far from it's position it is)
        player1.pivot.x = 240;  

        // check if not player 1
        if(!isPlayer1){

            // rotate the player by 180 degrees because it's player 2
            player2.angle = 180;

        } // if     

    } // init()


} // Player object