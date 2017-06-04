
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

        // check if player 1 is launching a missile
        if(player1.missileLaunching){
            
            // wait for missile to clear ship
            game.time.events.add(200, () => { player1.missileLaunching = false; }, this, true);

        } else { // if missile is 

            game.physics.arcade.overlap(player1.playerSprite, this.missileGroup, collisionHandler, null, this);

        } // if

        // check if player 2 is launching a missile
        if(player2.missileLaunching){
            
            // wait for missile to clear ship
            game.time.events.add(200, () => { player2.missileLaunching = false; }, this, true);

        } else { // if missile is 

            game.physics.arcade.overlap(player2.playerSprite, this.missileGroup, collisionHandler, null, this);

        } // if
        
        
        //game.physics.arcade.overlap(player2, this.missileGroup, collisionHandler, null, this);


    } // battleUpdate()

    // when the player collides with a missile
    function collisionHandler (player, missile) {

        // remove the missile
        missile.kill();

        // hurt the player

        console.log("HIT");

    } // collisionHandler()

} // BattleController object