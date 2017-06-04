
// missile object
function Missile(){

    // variables

    this.missileSprite;
    this.speed = 0.02;


    // functions

    // initialise the missile object
    this.init = function(){

        // set the missile sprite
        this.missileSprite = game.add.sprite(400, 300, 'missile');

    } // init()

    // update the missile x and y position
    this.updatePosition = function(x, y){

        // update the missiles x and y position
        this.missileSprite.x = x;
        this.missileSprite.y = y;

    } // updatePosition()

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

    // get missiles x position
    this.getXpos = function(){

        return this.missileSprite.x;

    } // getXpos()

    // get missiles y position
    this.getYpos = function(){

        return this.missileSprite.y;
        
    } // getYpos()

    // initialise the missile
    this.init();

} // Missile Object