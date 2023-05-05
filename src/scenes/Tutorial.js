// Tutorial class
// a practice run/teaching the player how to move
// allow the player to press a button once they are ready for the real thing
class Tutorial extends Phaser.Scene{
    constructor(){
        super("tutorialScene");
    }
    preload(){
        //load images/tile sprites
        this.load.image('witch', './assets/witch.png');
        this.load.image('tree', './assets/tree.png');
        this.load.image('pitchfork', './assets/pitchfork.png');
        this.load.image('road', './assets/plain_road.png');
    }

    create(){
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x000000).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x000000).setOrigin(0, 0);

    }

}