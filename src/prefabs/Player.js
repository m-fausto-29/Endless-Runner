// Player class
/*
    Player must move around using the mouse??
    Can only move left and right to avoid objects
    sound is made each time player moves
    maybe add a gimmick where a player presses a button to make a noise???
*/
class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isAlive = false;
        this.moveSpeed = 2;         // pixels per frame    
    }

    update(){
        // left/right movement with mouse
        mouse.on
        (
            "pointermove", // event
            (pointer) => // callback
            {
                if(!this.isAlive)
                {
                    this.x = Phaser.Math.Clamp(pointer.x, 47, 578);
                }
            },
            this
        );
       
        // fire button
        if(mouse.activePointer.leftButtonDown() && !this.isFiring) 
        {
            this.isFiring = true;
        }
       
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}