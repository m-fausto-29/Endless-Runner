// Play.js
let highScore = 0;
let tries = 0;
class Play extends Phaser.Scene{
    constructor(){
        super("Play");
    }
    preload(){
        //load images/tile sprites
        this.load.image('plain_road', 'assets/plain_road.png');
        this.load.spritesheet('witch', 'assets/witch.png',{
            frameWidth: 49,
            frameHeight: 77,
        });
        this.load.image('pitchfork', 'assets/pitchfork.png');
        this.load.image('tree', 'assets/tree.png');
    }

}