// Play.js
let highScore = 0;
let tries = 0;
class Play extends Phaser.Scene{
    constructor(){
        super("Play");
    }
    preload(){
        //load images/tile sprites
        this.load.image('plain_road', 'assets/plain_road.png');
        this.load.spritesheet('witch', 'assets/witch.png',{
            frameWidth: 49,
            frameHeight: 77,
        });
        this.load.image('pitchfork', 'assets/pitchfork.png');
        this.load.image('tree', 'assets/tree.png');
    }

    create(){


        this.scrollingField = this.add.tileSprite(0, 0, 0, 0, 'plain_road').setOrigin(0,0);
        this.playerVelocity = game.config.height / 2;
        this.scrollSpeed = game.config.height / 2;


        // create simple cursor input
        cursors = this.input.keyboard.createCursorKeys();

        // WASD keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);


        // physics sprite
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height - 100, 'witch')
            .setOrigin(0.5, 1)
            .setScale(game.config.width / 800, game.config.height / 800)
            .setDepth(0.5);
        // scale sprite such that it is always the same relative to screen size
        this.player.displayWidth = game.config.width / 10;
        this.player.displayHeight = game.config.height / 5;
        this.player.setCollideWorldBounds(true);


        // running animation
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('witch', {start: 0, end: 1, first: 0}),
            frameRate: 10,
            repeat: -1
        });


        this.centerDistance = 0;
        this.obstacles = this.physics.add.group({
            runChildUpdate: true
        });
        this.physics.add.overlap(this.player, this.obstacles, this.setGameOver, null, this);


        // set game over initially to false
        this.gameOver = false;


        this.p1score = 0;


        // display score
        let scoreConfig = {
            fontFamily: 'Stencil Std, fantasy',
            fontSize: '56px',
            strokeThickness: 4,
            stroke: '013220',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        this.p1Score = 0;
        this.scoreLeft = this.add.text(0,0,'Score: ' + this.p1Score, scoreConfig);
        this.scoreLeft.setDepth(1);


        // scale difficulty through multiple waves based on distance traveled
        this.obstacleSpeed = 300;   // pitchforks start at 300
        this.obstacleSpeedMultiplier = 1;
        this.startNextWave = 50; //starting at 50 yards
        this.obstacleSpawnDelay = 4000; // initial time between obstacles appearing
        this.obstacleSpawnTimer = this.obstacleSpawnDelay;

        this.player.anims.play('run');
    }


}