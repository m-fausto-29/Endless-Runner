class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('title', './assets/title.png');
    }

    create(){
        this.cameras.main.setBackgroundColor('#99E550');

        // adding title screen
        this.title = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'title').setOrigin(0, 0);

        // defining keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start('Play')
        }
    }
}