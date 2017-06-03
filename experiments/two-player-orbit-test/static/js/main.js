
// create the game
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

// variables

var planet;
var player1;
var player2;
var cursors;


// loads before game starts
function preload() {

    game.load.image('planet', 'assets/sprites/shmup-ship2.png');
    game.load.image('player', 'assets/sprites/blue_ball.png');

} // preload()


// runs when game starts
function create() {

    // set background colour
    game.stage.backgroundColor = '#001255';

    // add the planet to the game and anchor it
    planet = game.add.sprite(game.world.centerX, game.world.centerY, 'planet');
    planet.anchor.setTo(0.5, 0.5);

    // add physics to the planet
    game.physics.arcade.enable(planet);

    // add player one to the game
    player1 = game.add.sprite(400, 300, 'player');
    player1.anchor.setTo(0.5);      // anchor player
    player1.pivot.x = 240;          // set the players pivot. (how far from it's position it is)

    // add player two to the game
    player2 = game.add.sprite(400, 300, 'player');
    player2.anchor.setTo(0.5);      // anchor player
    player2.pivot.x = -240;         // set the players pivot. (how far from it's position it is)

    // sets up game to read key presses
    cursors = game.input.keyboard.createCursorKeys();

} // create()


// runs every frame
function update() {

    // check for key presses
    checkForKeyPress();

    // keep player 1 locked to planet
    player1.x = planet.x;
    player1.y = planet.y;

    // keep player 2 locked to planet
    player2.x = planet.x;
    player2.y = planet.y;

    // planets x and y velocity to 0
    planet.body.velocity.x = 0;
    planet.body.velocity.y = 0;

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
