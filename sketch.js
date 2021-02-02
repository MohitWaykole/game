const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, gameState, player, b;
var playerImg, playerImg2;
var playerHealth = 100;

function preload(){
  playerImg = loadImage("cowboy 1.PNG");
  playerImg2 = loadImage("cowboy 1 left.PNG");
  bg = loadImage("Mohitv.PNG");
  btn = loadImage("shootbtn.png");
  rightImg = loadImage("game button1.png");
  leftImg = loadImage("game button2.png");
  upImg = loadImage("game button1-.png");
}

function setup(){
  var canvas = createCanvas(800, 400);
  canvas.position(150, 40);

  engine = Engine.create();
  world = engine.world;
  
  shootBtn = createSprite(640, 373, 100, 100);
  shootBtn.addImage(btn);
  shootBtn.scale = 1.1;
  
  leftArrow = createSprite(100, 373, 100, 100);
  leftArrow.addImage(leftImg);
  //leftArrow.scale = 0.6;

  rightArrow = createSprite(720, 373, 100, 100);
  rightArrow.addImage(rightImg);
  //rightArrow.scale = 0.6;

  upArrow = createSprite(170, 373, 100, 100);
  upArrow.addImage(upImg);
  //upArrow.scale = 0.6;

  ground = createSprite(400, 340, 1000, 10);
  ground.shapeColor = "lightgreen";

  player = createSprite(400, 340, 10, 60);
  player.addImage(playerImg);
  player.scale = 0.4;

  gameState = "start";
}

function draw(){
  background(255);

  player.collide(ground);

  Engine.update(engine);

  playerMovement();
  shoot();

  console.log(player.y);

  drawSprites();

  textSize(20);
  text("Player Health: " + playerHealth, player.x - 70, player.y - 60);
}

function playerMovement(){
  if (keyDown("up") && player.y > 280 || mousePressedOver(upArrow) && player.y > 280){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.6;

  if (keyDown("left") || mousePressedOver(leftArrow)){
    player.x = player.x - 5;
    player.addImage(playerImg2);
  }

  if (keyDown("right") || mousePressedOver(rightArrow)){
    player.x = player.x + 5;
    player.addImage(playerImg);
  }
}

function shoot(){
  if(keyWentDown("space") || mousePressedOver(shootBtn)){
    b = createSprite(40, 200, 10, 10);
    b.velocityX = 7;
    b.y = player.y;
    b.x = player.x;
    b.lifetime = 160;
  }
  if (keyDown("left") && keyDown("space")){
    b.velocityX = -7;
  }

  if (keyDown("right") && keyDown("space") || mousePressedOver(rightArrow) && mousePressedOver(shootBtn)){
    b.velocityX = 7;
  }
}

function enemy(){
  var e = createSprite()
}