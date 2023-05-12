//main file
/*
 - Name: Monserrat Fausto
 - Title: Witch Hunt
 - Approximate Hours: 25
 - Creative Tilt:
    - Technical: Beyond the class examples, I went more into depth with the Phaser camera examples and learned how to create fading 
    transitions between a couple of scenes to give a more dramatic effect. The scenes I have implemented this effect include 
    the Menu, Tutorial, and Credits Scenes.
    - Creative: I am particularly proud of the animation I made with a texture atlas in my tutorial page that I made completely 
    from scratch given that I am not used to creating my own assets in this manner and it did take some trial and error for 
    me to get it the way I want it to appear in the Tutorial scene.
*/

let cursors;
let keyUP, keyC, keyENTER, keyR;

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
    scene: [ Menu, Play, Tutorial, Credits ] 
}
let game = new Phaser.Game(config);