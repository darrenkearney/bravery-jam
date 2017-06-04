
// player object
function Player(isPlayer1) {

    // variables

    this.playerSprite;
    this.health = 3;            // can take 3 hits
    this.fireCoolDown = 2000;   // in milliseconds
    this.missileLaunching = false;
    var canFire = true;

    // functions

    // initialise the player
    this.init = function(){

        // set the player sprite
        this.playerSprite = game.add.sprite(400, 300, 'ship');

        // anchor player
        this.playerSprite.anchor.setTo(0.5);    

        // set the players pivot. (how far from it's position it is)
        this.playerSprite.pivot.x = 240;  

        if(isPlayer1){  // if player 1

            // tag as player one
            this.playerSprite.name = "player1";

        } else { // if player 2

            // tag as player 2
            this.playerSprite.name = "player2";

            // rotate the player by 180 degrees because it's player 2
            this.playerSprite.angle = 180;

        } // if     

        // add physics to player
        game.physics.enable(this.playerSprite, Phaser.Physics.ARCADE);
        //this.playerSprite.body.collideWorldBounds = true;

    } // init()

    // fire a missile, takes list of missiles as args
    this.fireMissile = function(){

        // check if player can fire missile
        if(canFire){

            // set canFire to false
            setCanFire(false);

            // missile is launching
            this.missileLaunching = true;

            // create the missile
            var m = new Missile();

            // set the missiles rotation
            m.setRotation(this.playerSprite.rotation)

            // set the missiles pivot
            m.setPivot(this.playerSprite.pivot);

            // add missile to the list of missiles
            missiles.push(m);

            // set cool down timer
            game.time.events.add(this.fireCoolDown, setCanFire, this, true);

        } // if

    } // fireMissile()

    // set the canFire boolean
    var setCanFire = function(value){

        canFire = value;

    } // setCanFire()

    // pivot the player. pass a string with the sign eg "+" or "-"
    this.pivot = function(sign){

        if(sign == "+" && this.playerSprite.pivot.x < 280){ // if positive

            // increase pivot value
            this.playerSprite.pivot.x += 0.5;

        }
        else if(sign == "-" && this.playerSprite.pivot.x > 100) // if negative 
        {
            // decrease pivot value
            this.playerSprite.pivot.x -= 0.5;

        } // if

    } // pivot()

    // orbits the player around the planet
    this.orbit = function(){

        // rotate the players (around the planet)
        this.playerSprite.rotation += 0.002;

    } // orbit()


    // initialise the player
    this.init();

} // Player object