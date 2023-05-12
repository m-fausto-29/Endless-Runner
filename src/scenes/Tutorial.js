class Tutorial extends Phaser.Scene {
    constructor(){
        super("tutorial");
    }
    preload(){
        this.load.image('tutorial', './assets/tutorialpage1.png');
        this.load.atlas('girl', 'assets/witch_atlas.png', 'assets/witch_atlas.json');
        // Loading SFX
        this.load.audio('magic', 'assets/magic_sfx.wav');
    }

    create(){
        this.cameras.main.setBackgroundColor('#421278');
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        // adding title screen
        this.tutorialPage = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'tutorial').setOrigin(0, 0);
        this.tutorialPage.setDepth(0);

        this.anims.create({
            key: 'float',
            frames: this.anims.generateFrameNames('girl', {
                prefix: 'float(',
                start: 1,
                end: 6,
                suffix: ')'
            }),
            frameRate: 10,
            repeat: -1      // loop animation
        });

        // add girl
        this.girl = this.add.sprite(game.config.width/2, game.config.height/2.6, 'girl', 'float(1)');


        // defining keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(){
        this.girl.play('float', true);
        
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.sound.play('magic');
            this.scene.start('Play');
        }
    }
}