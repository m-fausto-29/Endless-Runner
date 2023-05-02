//main file
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu ] 
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyUP, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;