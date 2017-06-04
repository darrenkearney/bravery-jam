
// player object
function Player(isPlayer1) {

    // variables

    this.playerSprite;
    this.health = 3;            // can take 3 hits
    this.fireCoolDown = 2000;   // in milliseconds
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

        // check if not player 1
        if(!isPlayer1){

            // rotate the player by 180 degrees because it's player 2
            this.playerSprite.angle = 180;

        } // if     

    } // init()

    // fire a missile, takes list of missiles as args
    this.fireMissile = function(){

        // check if player can fire missile
        if(canFire){

            // set canFire to false
            setCanFire(false);

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

    // update the players x and y position
    this.updatePosition = function(x, y){

        // update the players x and y position
        this.playerSprite.x = x;
        this.playerSprite.y = y;

    } // updatePosition()

    // pivot the player. pass a string with the sign eg "+" or "-"
    this.pivot = function(sign){

        if(sign == "+"){ // if positive

            // increase pivot value
            this.playerSprite.pivot.x += 0.5;

        }
        else // if negative 
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