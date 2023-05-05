// Obstacle class
/*
    Objects that will get randomly thrown at the player
    with each passing level they will be faster some may be harder to avoid
    will span form the sides and from above
*/
class Obstacle extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isAlive = false;
        this.moveSpeed = 2;         // pixels per frame    
    }
    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge  
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}