window.onload = function () {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    // Set our starting view
    var view = 'battle';

    function preload() {
        console.log('Preloading...');

        game.load.image('logo', 'assets/sprites/phaser.png');
        game.load.image('ship', 'assets/sprites/ship.png');

        console.log('Preloaded.');
        cursors = game.input.keyboard.createCursorKeys();
    }

    function create() {
        console.log('Creating...');

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        ship = game.add.sprite(100, 100, 'ship');

        //  We need to enable physics on the ship
        game.physics.arcade.enable(ship);

        ship.body.collideWorldBounds = true;

        console.log('Created.');
    }

    function update() {
        console.log("update");

        // switch checks view and uses appropriate update
        //if ( view === 'battle' ) {
        //    battleUpdate();
        //}

         if (cursors.left.isDown)
        {
            //  Move to the left
            ship.body.velocity.x = -150;

            //ship.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            ship.body.velocity.x = 150;

            //ship.animations.play('right');
        }
        else if (cursors.up.isDown)
        {
            ship.body.velocity.y = -150;
        }
        else if (cursors.down.isDown)
        {
            ship.body.velocity.y = 150;
        }
        else
        {
            //  Stand still
            //ship.animations.stop();

            //ship.frame = 4;
        }

        // //  Allow the player to jump if they are touching the ground.
        // if (cursors.up.isDown && ship.body.touching.down && hitPlatform)
        // {
        //     ship.body.velocity.y = -350;
        // }
    }

};