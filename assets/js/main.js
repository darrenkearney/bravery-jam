
// create the game
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// variables

var planet;
var player1;
var player2;
var ships;
var missiles = [];

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

        // update the battle
        battleController.battleUpdate();

    } // if

} // update()