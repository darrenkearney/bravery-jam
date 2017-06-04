
// runs in the main update function
// updates objects in the battle scene
function battleUpdate() {

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

} // battleUpdate()