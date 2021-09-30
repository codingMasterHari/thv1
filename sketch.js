var bg, bg2, form, system, code, security;

var score=0;

var bgEx, bgExSp;

var coinImg;
var coin1, coin2, coin3, coin4, coin5;
var coin6, coin7, coin8, coin9, coin10;

var jenieImg;
var jenie1, jenie2;

var princessImg, princess;

var invisibleGround;

const bgSound = new Audio("bgSound.wav");

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  bgEx = loadImage("aladdin_cave_ex.jpg");
  coinImg = loadImage("coin.png");
  jenieImg = loadImage("jenie.png");
  princessImg = loadImage("princess.png");
}

function setup() {
  createCanvas(930,500);
  bgExSp = createSprite(890, 250);
  bgExSp.addImage(bgEx);
  bgExSp.scale = 0.465;
  bgExSp.scale = 0.1;
  bgExSp.visible = false;
  // bgExSp.velocityX(1);

  coin1 = createSprite(300, 10);
  coin1.addImage(coinImg);
  coin1.scale = 0.1;
  coin1.velocityY = 0;
  coin1.visible = false;

  coin2 = createSprite(390, 10);
  coin2.addImage(coinImg);
  coin2.scale = 0.1;
  coin2.velocityY = 0;
  coin2.visible = false;

  coin3 = createSprite(450, 10);
  coin3.addImage(coinImg);
  coin3.scale = 0.1;
  coin3.velocityY = 0;
  coin3.visible = false;

  coin4 = createSprite(510, 10);
  coin4.addImage(coinImg);
  coin4.scale = 0.1;
  coin4.velocityY = 0;
  coin4.visible = false;

  coin5 = createSprite(590, 10);
  coin5.addImage(coinImg);
  coin5.scale = 0.1;
  coin5.velocityY = 0;
  coin5.visible = false;

  jenie1 = createSprite(410, 10);
  jenie1.addImage(jenieImg);
  jenie1.scale = 0.3;
  jenie1.velocityY = 0;
  jenie1.visible = false;

  jenie2 = createSprite(510, 10);
  jenie2.addImage(jenieImg);
  jenie2.scale = 0.3;
  jenie2.velocityY = 0;
  jenie2.visible = false;

  princess = createSprite(465, 10);
  princess.addImage(princessImg);
  princess.scale = 0.3;
  princess.velocityY = 0;
  princess.visible = false;

  invisibleGround = createSprite(465, 500, 930, 5);
  invisibleGround.visible = true;


  system = new System()
  security = new Security()

  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score != 3) {
    bgSound.play();
    bgSound.loop = true;
  }

  if(score === 3) {
    clear();
    background(bg2)
    // bgExSp.addImage(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    princess.collide(invisibleGround);
  }

  drawSprites()
}