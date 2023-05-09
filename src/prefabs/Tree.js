// Tree class
class Tree extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.worldScene = scene;
        scene.physics.add.existing(this);
        this.displayWidth = game.config.width * (1/15);
        this.displayHeight = game.config.height * (2/15);
    }

    update(){
        this.body.setVelocityY(this.worldScene.scrollSpeed);
        if(this.y > game.config.height + this.height) {
            this.destroy();
        }
    }
}