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


// creates objects when game starts
function create() {

    game.stage.backgroundColor = '#001255';

    planet = game.add.sprite(game.world.centerX, game.world.centerY, 'planet');
    planet.anchor.setTo(0.5, 0.5);

    game.physics.arcade.enable(planet);

    player1 = game.add.sprite(400, 300, 'player');
    player1.anchor.setTo(0.5);
    player1.pivot.x = 240;

    player2 = game.add.sprite(400, 300, 'player');
    player2.anchor.setTo(0.5);
    player2.pivot.x = -240;

    cursors = game.input.keyboard.createCursorKeys();

} // create()


// runs every frame
function update() {

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
    player1.rotation += 0.02;
    player2.rotation += 0.02;

} // update()
