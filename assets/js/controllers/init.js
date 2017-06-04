function preloadAssets( view ) {
    //console.log('Preloading...');

    // load game sprites
    game.load.image('logo', 'assets/sprites/phaser.png');
    game.load.image('planet', 'assets/sprites/planet.png');
    game.load.image('ship', 'assets/sprites/ship.png');
    game.load.image('missile', 'assets/sprites/missile.png');

    //console.log('Preloaded.');
}

function createGame( view ) {

    // Global Create

    // enable the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // setup input controller
    inputController = new InputController();

    // setup the battle controller
    battleController = new BattleController();

    // set background colour
    game.stage.backgroundColor = '#001255';

    // add the planet to the game and anchor it
    planet = new Planet();

    if (view === "battle") {

    //console.log('Creating...');

        // var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);

        // add player one to the game
        player1 = new Player(true);

        // add player two to the game
        player2 = new Player(false);

        // create missiles list
        missiles = [];

        //console.log('Created.');

    } // if view === battle
}