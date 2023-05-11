//main file

let cursors;
let keyUP, keyJ, keyENTER, keyR;

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    scene: [ Menu, Play ] 
}
let game = new Phaser.Game(config);