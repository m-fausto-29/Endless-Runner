//main file
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 700,
    scene: [ Menu, Play, Tutorial, Credits ] 
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyENTER;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// set mouse controls;
let mouse;