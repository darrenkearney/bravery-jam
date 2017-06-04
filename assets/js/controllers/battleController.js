
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
        //game.physics.arcade.overlap(player2, this.missileGroup, collisionHandler, null, this);


    } // battleUpdate()

    function collisionHandler (player, missile) {

        //  If the player collides with a chilli it gets eaten :)
        missile.kill();

        console.log("HIT");

    } // collisionHandler()

} // BattleController object