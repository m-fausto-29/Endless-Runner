//adding pitchfork class
class Pitchfork extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, speed, multiplier){
        super(scene, x, y, texture, frame);
        this.worldScene = scene;
        this.speed = speed;
        this.multiplier = multiplier;
        scene.physics.add.existing(this);
        this.displayWidth = game.config.width * (1/15);
        this.displayHeight = game.config.height * (2/15);
    }

    update(){
        this.body.setVelocityY(this.worldScene.scrollSpeed * this.multiplier);
        this.body.setVelocityX(this.speed * this.multiplier);
        if(this.y > game.config.height + this.height) {
            this.destroy();
        }
    }
}
