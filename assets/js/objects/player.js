
// player object
function Player(isPlayer1) {

    // variables

    this.playerSprite;
    this.health = 2;        // can take two hits
    this.fireCoolDown = 3000; // 3 second cool down
    this.canFire = true;
    var timeout;

    // functions

    // initialise the player
    this.init = function(){

        // set the player sprite
        this.playerSprite = game.add.sprite(400, 300, 'ship');

        // anchor player
        this.playerSprite.anchor.setTo(0.5);    

        // set the players pivot. (how far from it's position it is)
        this.playerSprite.pivot.x = 240;  

        // check if not player 1
        if(!isPlayer1){

            // rotate the player by 180 degrees because it's player 2
            this.playerSprite.angle = 180;

        } // if     

    } // init()

    // fire a missile, takes list of missiles as args
    this.fireMissile = function(){

        // check if player can fire missile
        if(this.canFire){

            // set canFire to false
            this.canFire = false;

            // create the missile
            var m = new Missile();

            // set the missiles rotation
            m.setRotation(this.playerSprite.rotation)

            // set the missiles pivot
            m.setPivot(this.playerSprite.pivot);

            // add missile to the list of missiles
            missiles.push(m);

            // set cool down timer
            window.setTimeout(this.setCanFire(), 3000);

        } // if

    } // fireMissile()

    // set the canFire boolean
    this.setCanFire = function(){

        this.canFire = true;

    } // setCanFire()

    // update the players x and y position
    this.updatePosition = function(x, y){

        // update the players x and y position
        this.playerSprite.x = x;
        this.playerSprite.y = y;

    } // updatePosition()

    // orbits the player around the planet
    this.orbit = function(){

        // rotate the players (around the planet)
        this.playerSprite.rotation += 0.002;

    } // orbit()

    // get players x position
    this.getXpos = function(){

        return this.playerSprite.x;

    } // getXpos()

    // get players y position
    this.getYpos = function(){

        return this.playerSprite.y;
        
    } // getYpos()


    // initialise the player
    this.init();

} // Player object