
// Planet Object
function Planet() {

    // variables

    this.planetSprite;

    // functions

    // initialises the planet
    this.init = function(){

        // create the planet sprite
        this.planetSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'planet');
        this.planetSprite.anchor.setTo(0.5, 0.5);   // anchor the planet

        // add physics to the planet
        game.physics.arcade.enable(this.planetSprite);

        // stop the planet from moving
        this.planetSprite.body.immovable = true;

    } // init()

    // make the planet rotate
    this.rotate = function(){

        this.planetSprite.angle += 0.2;

    } // rotate()


    // initialise the planet
    this.init();

} // Planet Object