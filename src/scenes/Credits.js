class Credits extends Phaser.Scene {
    constructor(){
        super("credits");
    }
    preload(){
        this.load.image('credits', './assets/creditspage.png');
        // Loading SFX
        this.load.audio('magic', 'assets/magic_sfx.wav');
    }

    create(){
        this.cameras.main.setBackgroundColor('##421278');
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        // adding title screen
        this.creditsPage = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'credits').setOrigin(0, 0);

        // defining keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(){
        //this.sound.play('magic');
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.sound.play('magic');
            this.scene.start('menuScene');
        }
    }
}