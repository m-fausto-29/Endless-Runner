class Tutorial extends Phaser.Scene {
    constructor(){
        super("tutorial");
    }
    preload(){
        this.load.image('tutorial', './assets/tutorialpage.png');
    }

    create(){
        this.cameras.main.setBackgroundColor('#99E550');

        // adding title screen
        this.tutorialPage = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'tutorial').setOrigin(0, 0);

        // defining keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start('Play');
        }
    }
}