window.onload = function () {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var planet;
    var ships;
    var missiles;
    var cursors;

    // Set our starting view
    var view = 'battle';

    function preload() {
        console.log('Preloading...');

        game.load.image('logo', 'assets/sprites/phaser.png');
        game.load.image('planet', 'assets/sprites/planet.png');
        game.load.image('ship', 'assets/sprites/ship.png');
        game.load.image('missile', 'assets/sprites/missile.png');

        console.log('Preloaded.');
    }

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