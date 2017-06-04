
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

// check for key presses
function checkForKeyPress(){

    // check if player one is trying to move
    if (inputController.player1Left.isDown)
    {
        // move the player away from the planet
        inputController.pivotPlayer(player1, "+");
    }
    else if (inputController.player1Right.isDown)
    {
        // move the player towards the planet
        inputController.pivotPlayer(player1, "-");
    }

     // check if player two is trying to move
    if (inputController.player2Left.isDown)
    {
        // move the player away from the planet
        inputController.pivotPlayer(player2, "-");
    }
    else if (inputController.player2Right.isDown)
    {
        // move the player towards the planet
        inputController.pivotPlayer(player2, "+");
    }

} // checkForKeyPress()


