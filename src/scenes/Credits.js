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
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){ // transition into menu scene with fade out effect
            this.sound.play('magic');
            this.cameras.main.fadeOut(1000, 0, 0, 0); 
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.time.delayedCall(1000, () => {
                    this.scene.start('menuScene');
                })
            });
        }
    }
}