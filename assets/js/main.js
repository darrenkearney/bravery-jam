
// create the game
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// controllers


// variables

var planet;
var player1;
var player2;
var ships;
var missiles;
var cursors;

// Set our starting view
var view = 'battle';

// runs before the game starts
function preload() {

    preloadAssets(view);

} // preload()

// runs when the game starts
function create() {

    createGame(view);
    
} // create()

// runs every frame
function update() {

    //console.log("update");

    // switch checks view and uses appropriate update
    if ( view === 'battle' ) {
        battleUpdate();
    }

    // check for key presses
    checkForKeyPress();

    // keep player 1 locked to planet
    player1.x = planet.x;
    player1.y = planet.y;

    // keep player 2 locked to planet
    player2.x = planet.x;
    player2.y = planet.y;

    // rotate the players
    player1.rotation += 0.002;
    player2.rotation += 0.002;

} // update()

function checkForKeyPress(){

    if (cursors.up.isDown)
    {
        // move the player away from the planet
        player2.pivot.x -= 0.5;
    }
    else if (cursors.down.isDown)
    {
        // move the player towards the planet
        player2.pivot.x += 0.5;
    }

} // checkForKeyPress()

