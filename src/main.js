//main file

let cursors;
let keyUP, keyJ, keySPACE, keyW, keyA, keyS, keyD, keyR;

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    scene: [ Menu, Play ] 
}
let game = new Phaser.Game(config);