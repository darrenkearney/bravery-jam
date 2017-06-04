
// Input Controller object
function InputController() {

    // variables

    this.p1Left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.p1Right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.p2Left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.p2Right = game.input.keyboard.addKey(Phaser.Keyboard.D);


    // functions

    // initialise the input controller
    this.init = function() {

        //  Register the keys.
        
        //  Stop the following keys from propagating up to the browser
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.D, Phaser.Keyboard.A ]);
        
        
    } // init()

} // InputController()