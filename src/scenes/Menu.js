//Menu scene
class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload() {
        this.load.image('title', './assets/title.png');   // load title screen
    }

    create(){

        // add titlescreen
        this.title = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'title').setOrigin(0, 0);

        // define keys
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyENTER)) {
            // easy mode
            game.settings = {
                gameTimer: 60000
            }
        }
    }
    
}