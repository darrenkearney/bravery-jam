window.onload = function () {

    // create the game
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    // variables

    var planet;
    var player1;
    var player2;
    var cursors;

    // Set our starting view
    var view = 'battle';

    
    function preload() {

        console.log('Preloading...');

        // load game sprites
        game.load.image('logo', 'assets/sprites/phaser.png');
        game.load.image('planet', 'assets/sprites/shmup-ship2.png');
        game.load.image('player', 'assets/sprites/blue_ball.png');

        console.log('Preloaded.');

    } // preload()

    function create() {
        console.log('Creating...');

        

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        console.log('Created.');
    }

    function update() {
        console.log("update");

        // switch checks view and uses appropriate update
        if ( view === 'battle' ) {
            battleUpdate();
        }
    }

};