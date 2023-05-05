// Incoming trees that players must avoid along with the other obstacles
class Tree extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isAlive = false;
        this.moveSpeed = 2;         // pixels per frame 
    }
}