class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('title', './assets/title.png');
        // Loading SFX
        this.load.audio('magic', 'assets/magic_sfx.wav');
    }

    create(){
        this.cameras.main.setBackgroundColor('#421278');
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        // adding title screen
        this.title = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'title').setOrigin(0, 0);

        // defining keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){ // transition into tutorial scene with fade out effect
            this.sound.play('magic');
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.time.delayedCall(1000, () => {
                    this.scene.start('tutorial');
                })
            });
        }
        if(Phaser.Input.Keyboard.JustDown(keyC)){ // transition into credits scene with fade out effect
            this.sound.play('magic');
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.time.delayedCall(1000, () => {
                    this.scene.start('credits');
                })
            });
        }
    }
}