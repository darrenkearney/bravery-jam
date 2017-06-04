
// Battle Controller Object
// manages the battle
function BattleController() {

    // variables

    this.missileGroup = game.add.group();
    this.missileGroup.enableBody = true;

    // functions

    // update function that runs in the main game update loop
    // updates the battle
    this.battleUpdate = function(){

        // check for key presses, takes player1 and player2 as args
        inputController.checkForKeyPress(player1, player2);

        // rotate the planet
        planet.rotate();

        // rotate the players (around the planet)
        player1.orbit();
        player2.orbit();

        // orbit each missile
        missiles.forEach(missile => {

            // make missile orbit
            missile.orbit();

        }); // foreach

        // check for collisions
        game.physics.arcade.overlap(player1.playerSprite, this.missileGroup, collisionHandler, null, this);
        game.physics.arcade.overlap(player2.playerSprite, this.missileGroup, collisionHandler, null, this);

    } // battleUpdate()

    // when the player collides with a missile
    function collisionHandler (player, missile) {

        // check that missile is not just fired
        if(missile.name == ""){ // missile can do damage

            // remove the missile
            missile.kill();

            // check which player it is
            if(player.name == "player1"){

                // hurt player 1
                this.hurtPlayer(player1);

            } else { // player 2

               // hurt player 2
               this.hurtPlayer(player2);

            } // if

            console.log("HIT");

        } // if
    
    } // collisionHandler()

    // hurts the player and handles game over
    this.hurtPlayer = function(player){

        // hurt the player
        player.health--;

        // check if player is dead
        if(player.health < 1){

            // game over
            player.playerSprite.kill();

        } // if

    } // hurtPlayer()

} // BattleController object