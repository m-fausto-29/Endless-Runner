// Tutorial class
// a practice run/teaching the player how to move
// allow the player to press a button once they are ready for the real thing
class Tutorial extends Phaser.Scene{
    constructor(){
        super("tutorialScene");
    }
    preload(){
        //load images/tile sprites
        this.load.image('witch', './assets/witch.png');
        this.load.image('tree', './assets/tree.png');
        this.load.image('pitchfork', './assets/pitchfork.png');
        this.load.image('plain_road', './assets/plain_road.png');

        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        //this.load.spritesheet('explosion1', './assets/explosion1.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create(){

        // Adding music
        // this.music = this.sound.add("bg_music", 
        // {
        //     loop:true
        // });
        // this.music.play();

        //place tile sprite
        //this.plain_road = this.add.tileSprite(0, 0, 640, 700, 'plain_road').setOrigin(0, 0);
        //this.plain_road.setDepth(-1);

        //this is to try to test the scrolling vertical
        this.plain_road = this.add.image(640, 700, 'plain_road').setScrollFactor(0,0);
        const camera = this.cameras.main
        camera.postFX.addTiltShift(0.9, 2.0, 0.4);

        this.tweens.add({
            targets: camera,
            scrollY: 1800,
            duration: 20000,
            yoyo: true,
            loop: -1
        });

        //green UI background
        //this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x000000).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x000000).setOrigin(0, 0);

        // add rocket (p1)
        this.witch = new Player(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'witch').setOrigin(0.5, 0);

        // add spaceships (x3)
        this.pitchfork01 = new Obstacle(this, game.config.width + borderUISize*6, borderUISize*4, 'pitchfork', 0, 30).setOrigin(0, 0);
        this.pitchfork02 = new Obstacle(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'pitchfork', 0, 20).setOrigin(0, 0);
        this.pitchfork03 = new Obstacle(this, game.config.width, borderUISize*6 + borderPadding*4, 'pitchfork', 0, 10).setOrigin(0, 0);

        // add spaceshipChallenge (x1)
        this.tree = new Tree(this, game.config.width, borderUISize*7 + borderPadding*5, "tree", 0, 0).setOrigin(0, 0);

        // add asteroid (x1)
        //this.asteroid = new Asteroid(this, game.config.width, borderUISize*8 + borderPadding*5.7, 'asteroid', 0, 5).setOrigin(0, 0);
        //this.asteroid.setDepth(-0.5);
        
        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // define mouse controls
        mouse = this.input;

        //animation config for ships
        // this.anims.create({
        //     key: 'explode',
        //     frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
        //     frameRate: 30
        // })

        //animation config for asteroid
        // this.anims.create({
        //     key: 'explode1',
        //     frames: this.anims.generateFrameNumbers('explosion1', { start: 0, end: 9, first: 0}),
        //     frameRate: 30
        // })

        // initialize score
        this.p1Score = 0;

        //initialize time left
        this.p1time = 60;
        this.timeLeft = 0;

        // Checking gameTimer to determine how much time to display
        if(game.settings.gameTimer == 60000)
        {
            this.p1time = 60;
            this.timeLeft = 60;
        }
        if(game.settings.gameTimer == 45000)
        {
            this.p1time = 45;
            this.timeLeft = 45;
        }

        // display score
        // let scoreConfig = {
        //     fontFamily: 'Courier',
        //     fontSize: '28x',
        //     backgroundColor: '#F3B141',
        //     color: '#843605',
        //     align: 'right',
        //     padding: {
        //         top: 5,
        //         bottom: 5,
        //     },
        //     fixedWidth: 100
        // }
        // this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        // //Timer text
        // this.scoreRight = this.add.text(game.config.width - borderUISize - borderPadding - scoreConfig.fixedWidth, borderUISize + borderPadding*2, this.timeleft, scoreConfig);

        // //FIRE text
        // this.scoreCTR = this.add.text(game.config.width / 2, borderUISize + borderPadding * 2, "", scoreConfig).setOrigin(0.5, 0);

        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        // scoreConfig.fixedWidth = 0;
        // this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
        //     this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        //     this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or <- for Menu', scoreConfig).setOrigin(0.5);
        //     this.gameOver = true;
        // }, null, this);

        // Increase speed after 30 sec
        // this.clock30 = this.time.delayedCall(game.settings.gameTimer/2, () => 
        // {
        //     this.ship01.increaseSpeed(1.5);
        //     this.ship02.increaseSpeed(1.5);
        //     this.ship03.increaseSpeed(1.5);
        //     this.fastShip.increaseSpeed(1.5);

        // }, null, this);

        //Starting time
        this.startTime = Date.now();

    }

    update(){

        // check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }

        // check key input for returning to Menu
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // Stopping music
            this.sound.stopAll()
            this.scene.start("menuScene");
        }

        //this.plain_road.tilePositionX -= 4;

        if(!this.gameOver) {
            // if(mouse.activePointer.leftButtonDown() && !this.p1Rocket.isFiring){    // FIRE text shown for one second when mouse clicked
            //     //this.scoreCTR.text = "FIRE!";
            //     this.clock = this.time.delayedCall(1000, () => {
            //         this.scoreCTR.text = "";
            //     }, null, this);
            // }
            this.witch.update();             // update rocket sprite
            this.pitchfork01.update()                // update spaceships (x3)
            this.pitchfork02.update();
            this.pitchfork03.update();
            this.tree.update();             // update spaceshipChallenge sprite
            //this.asteroid.update();             // update asteroid sprite (x1)
        }

        // Timer Display
        // this.timeleft = Math.floor((this.p1time*1000 - (Date.now() - this.startTime))/1000);
        // if(this.timeleft < 0){
        //     this.timeleft = 0;
        // }
        // if(this.timeleft % 60 < 10){
        //     this.scoreRight.text = (Math.floor(this.timeleft/60) + ':0' + (this.timeleft % 60));
        // }
        // else{
        //     this.scoreRight.text = (Math.floor(this.timeleft/60) + ':' + (this.timeleft % 60));
        // }

        // check collisions
    //     if(this.checkCollision(this.p1Rocket, this.ship03)) {
    //         this.p1Rocket.reset();
    //         this.shipExplode(this.ship03);
    //     }
    //     if(this.checkCollision(this.p1Rocket, this.ship02)) {
    //         this.p1Rocket.reset();
    //         this.shipExplode(this.ship02);
    //     }
    //     if(this.checkCollision(this.p1Rocket, this.ship01)) {
    //         this.p1Rocket.reset();
    //         this.shipExplode(this.ship01);
    //     }
    //     if(this.checkCollision(this.p1Rocket, this.fastShip)) {
    //         this.p1Rocket.reset();
    //         this.shipExplode(this.fastShip);
    //     }
    //     if(this.checkCollision(this.p1Rocket, this.asteroid)) {
    //         this.p1Rocket.reset();
    //         this.rockExplode(this.asteroid);
    //     }
    // }

    // checkCollision(rocket, ship) {
    //     //simple AABB checking
    //     if(rocket.x < ship.x + ship.width && rocket.x + rocket.width > ship.x && rocket.y < ship.y + ship.height && rocket.height + rocket.y > ship.y){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // shipExplode(ship){
    //     // temporarily hide ship
    //     ship.alpha = 0;

    //     // create explosion sprite at ship's position
    //     let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
    //     boom.anims.play('explode');             // play explode animation
    //     boom.on('animationcomplete', () => {    // callback after anim completes
    //         ship.reset();                       // reset ship position
    //         ship.alpha = 1;                     // make ship visible again
    //         boom.destroy();                     // remove explosion sprite
    //     });
    
    //     // score add and repaint
    //     this.p1Score += ship.points;
    //     this.scoreLeft.text = this.p1Score;

    //     // randomize sounds 
    //     let sounds = ['sfx_explosion2', 'sfx_explosion3', 'sfx_explosion4', 'sfx_explosion5'];
    //     this.sound.play(sounds[Math.floor(Math.random() * sounds.length)]);

    // }

    
    // rockExplode(rock){
    //     // temporarily hide rock
    //     rock.alpha = 0;

    //     // create explosion sprite at rock's position
    //     let boom = this.add.sprite(rock.x, rock.y, 'explosion1').setOrigin(0, 0);
    //     boom.anims.play('explode1');             // play explode animation
    //     boom.on('animationcomplete', () => {    // callback after anim completes
    //         rock.reset();                       // reset rock position
    //         rock.alpha = 1;                     // make rock visible again
    //         boom.destroy();                     // remove explosion sprite
    //     });
    
    //     // score add and repaint
    //     this.p1Score -= rock.points + 5;
    //     this.scoreLeft.text = this.p1Score;

    //     this.sound.play('rock_explosion');
    // }
    }
    

}