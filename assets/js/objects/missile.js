
// missile object
function Missile(){

    // variables

    this.missileSprite;
    this.speed = 0.02;


    // functions

    // initialise the missile object
    this.init = function(){

        // set the missile sprite
        //this.missileSprite = game.add.sprite(400, 300, 'missile');
        this.missileSprite = battleController.missileGroup.create(400, 300, 'missile');

        // add physics to missile
        game.physics.enable(this.missileSprite, Phaser.Physics.ARCADE);
        this.missileSprite.body.collideWorldBounds = true;

        // flag missile as just fired
        this.missileSprite.name = "JustFired";

        // set timers to clear name
        game.time.events.add(1000, () => { this.missileSprite.name = ""; }, this, true);

    } // init()

    // orbits the missile around the planet
    this.orbit = function(){

        // rotate the missile (around the planet)
        this.missileSprite.rotation += this.speed;

    } // orbit()

    // set the missiles rotation
    this.setRotation = function(newRotation){
        
        // set the missiles rotation value
        this.missileSprite.rotation = newRotation;

    } // setRotation()

    // set the missiles rotation
    this.setPivot = function(newPivot){
        
        // set the missiles rotation value
        this.missileSprite.pivot.x = newPivot.x;

    } // setRotation()


    // initialise the missile
    this.init();

} // Missile Object